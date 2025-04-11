import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import mockData from '../mockData';
import styles from '../styles/styles';
import { useNavigation } from '@react-navigation/native';

const Profiles = () => {
    const navigation = useNavigation();
    const profileId = global.currentProfile?.id;
    const profile = mockData.profiles.find(p => p.id === profileId);
    const linkedAccounts = mockData.linked_accounts.filter(acc => acc.profile_id === profileId);
    
    // State for segmented control
    const [selectedPlatform, setSelectedPlatform] = useState('all');
    const [filteredContent, setFilteredContent] = useState([]);

    // Stats calculations
    const competitionsWon = mockData.submitted_entries.filter(
        entry => entry.profile_id === profileId && entry.active
    ).length;

    const totalWon = competitionsWon * 500;
    const totalFollowers = linkedAccounts.reduce((sum, acc) => sum + (acc.followers || 0), 0);

    // Get profile content
    const getProfileContent = () => {
        return mockData.profile_content
            .filter(content => content.profile_id === profileId && content.active === 1)
            .map(content => {
                const fullContent = mockData.content.find(c => c.id === content.content_id);
                const account = mockData.linked_accounts.find(a => a.id === content.linked_account_id);
                return {
                    ...content,
                    ...fullContent,
                    social: account?.social
                };
            });
    };

    // Filter content by platform
    useEffect(() => {
        const content = getProfileContent();
        if (selectedPlatform === 'all') {
            setFilteredContent(content);
        } else {
            setFilteredContent(content.filter(item => item.social === selectedPlatform));
        }
    }, [selectedPlatform]);

    useEffect(() => {
        if (profile && profile.username) {
            navigation.setOptions({ 
                title: profile.username,
            });
        }
        // Load initial content
        setFilteredContent(getProfileContent());
    }, [navigation, profile]);

    // Get image source (same as AC_fin.js)
    const getImageSource = (previewPic) => {
        if (typeof previewPic === 'number') return previewPic;
        if (typeof previewPic === 'string' && previewPic.startsWith('http')) {
            return { uri: previewPic };
        }
        if (typeof previewPic === 'string') {
            const localImages = {
                content1: require('../assets/images/content1.png'),
                content2: require('../assets/images/content2.png'),
                content3: require('../assets/images/content3.png'),
            };
            const imageKey = previewPic.replace('./assets/images/', '').replace('.png', '');
            return localImages[imageKey] || localImages.content1;
        }
        return require('../assets/images/content1.png');
    };

    // Render content item (similar to AC_fin.js)
    const renderContentItem = ({ item }) => {
        const imageSource = getImageSource(item.preview_pic);
        const account = mockData.linked_accounts.find(a => a.id === item.linked_account_id);
        
        return (
            <View style={styles.postContainer}>
                <Image 
                    source={imageSource}
                    style={styles.postImage}
                    resizeMode="cover"
                />
                <View style={styles.postOverlay}>
                    <Text style={styles.postViews}>{item.views} views</Text>
                    <Text style={styles.platformBadge}>
                        {item.social === 'ig' ? 'Instagram' : 
                         item.social === 'snap' ? 'Snapchat' : 'TikTok'}
                    </Text>
                </View>
            </View>
        );
    };

    return (
        <ScrollView style={styles.container}>
            {/* Profile Header Row */}
            <View style={[styles.row, { marginBottom: 15 }]}>
                {/* Avatar */}
                <Image
                    source={{ uri: profile?.avatar }}
                    style={[styles.linkedAccountImage, {
                        width: 80,
                        height: 80,
                        borderRadius: 40,
                        borderWidth: 2,
                        borderColor: '#8b51ff'
                    }]}
                />

                {/* Stats */}
                <View style={[styles.row, {
                    flex: 1,
                    justifyContent: 'space-around',
                    marginLeft: 20
                }]}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.prizeText}>{competitionsWon}</Text>
                        <Text style={styles.competitionNiche}>Prizes Won</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.prizeText}>${totalWon}</Text>
                        <Text style={styles.competitionNiche}>Won</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.prizeText}>{totalFollowers}</Text>
                        <Text style={styles.competitionNiche}>Followers</Text>
                    </View>
                </View>
            </View>

            {/* Bio Section */}
            <View style={{ marginBottom: 20 }}>
                <Text style={[styles.competitionNiche, { lineHeight: 20 }]}>
                    {profile?.bio || 'No bio yet'}
                </Text>
            </View>

            {/* Action Buttons */}
            <View style={[styles.row, {
                justifyContent: 'space-between',
                marginBottom: 20
            }]}>
                <TouchableOpacity
                    style={[styles.searchButton, {
                        flex: 1,
                        marginRight: 10,
                    }]}
                    onPress={() => navigation.navigate('EditProfile', { profileId })}
                >
                    <Text style={styles.text}>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.searchButton, { flex: 1 }]}
                    onPress={() => navigation.navigate('AddContent')}
                >
                    <Text style={styles.text}>Add Content</Text>
                </TouchableOpacity>
            </View>

            {/* Segmented Control */}
            <View style={styles.segmentedControl}>
                <TouchableOpacity
                    style={[
                        styles.segment,
                        selectedPlatform === 'all' && styles.activeSegment
                    ]}
                    onPress={() => setSelectedPlatform('all')}
                >
                    <Text style={[
                        styles.segmentText,
                        selectedPlatform === 'all' && styles.activeSegmentText
                    ]}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.segment,
                        selectedPlatform === 'ig' && styles.activeSegment
                    ]}
                    onPress={() => setSelectedPlatform('ig')}
                >
                    <Text style={[
                        styles.segmentText,
                        selectedPlatform === 'ig' && styles.activeSegmentText
                    ]}>Instagram</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.segment,
                        selectedPlatform === 'tik' && styles.activeSegment
                    ]}
                    onPress={() => setSelectedPlatform('tik')}
                >
                    <Text style={[
                        styles.segmentText,
                        selectedPlatform === 'tik' && styles.activeSegmentText
                    ]}>TikTok</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.segment,
                        selectedPlatform === 'snap' && styles.activeSegment
                    ]}
                    onPress={() => setSelectedPlatform('snap')}
                >
                    <Text style={[
                        styles.segmentText,
                        selectedPlatform === 'snap' && styles.activeSegmentText
                    ]}>Snapchat</Text>
                </TouchableOpacity>
            </View>

            {/* Content Grid */}
            {filteredContent.length > 0 ? (
                <FlatList
                    data={filteredContent}
                    renderItem={renderContentItem}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={3}
                    scrollEnabled={false}
                    contentContainerStyle={styles.gridContainer}
                />
            ) : (
                <Text style={styles.emptyText}>No content added yet</Text>
            )}
        </ScrollView>
    );
};

export default Profiles;