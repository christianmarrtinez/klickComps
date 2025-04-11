import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, FlatList, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../styles/styles';
import mockData from '../mockData';

// Import your local images directly
const localImages = {
  content1: require('../assets/images/content1.png'),
  content2: require('../assets/images/content2.png'),
  content3: require('../assets/images/content3.png'),
};

const AC_fin = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { accountId, social, accountUsername } = route.params;
    const [selectedPost, setSelectedPost] = useState(null);

    const profileId = global.currentProfile.id;
    const linkedAccount = mockData.linked_accounts.find(
        (account) => account.id === accountId
    );

    const posts = mockData.content.filter(
        (item) => item.profile_id === profileId && item.linked_account_id === linkedAccount.id
    );

    const handlePostSelect = (postId) => {
        const selectedPostData = posts.find(post => post.id === postId);
        console.log('Selected post:', {
            postId,
            previewPic: selectedPostData.preview_pic,
            views: selectedPostData.views
        });
        setSelectedPost(postId === selectedPost ? null : postId);
    };

    const handleAddToProfile = () => {
        if (!selectedPost) return;
    
        const selectedPostData = posts.find(post => post.id === selectedPost);
        if (!selectedPostData) return;
    
        // Check if the user has already added this content to their profile
        const existingContent = mockData.profile_content.find(
            (content) => 
                content.profile_id === profileId && 
                content.content_id === selectedPost
        );
    
        if (existingContent) {
            Alert.alert(
                "Content Already Added",
                "This content is already part of your profile."
            );
            return;
        }
    
        // Add new content to profile
        const newContentId = mockData.profile_content.length 
            ? Math.max(...mockData.profile_content.map(content => content.id)) + 1 
            : 1;
    
        const newProfileContent = {
            id: newContentId,
            profile_id: profileId,
            linked_account_id: linkedAccount.id,
            content_id: selectedPost,
            created_at: new Date().toISOString(),
            active: 1
        };
    
        // Add to mockData
        mockData.profile_content.push(newProfileContent);
    
        console.log('Added to profile:', newProfileContent);
        Alert.alert(
            "Content Added",
            "The selected content has been added to your profile."
        );
        navigation.goBack();
    };
    
    const getImageSource = (previewPic) => {
        if (typeof previewPic === 'number') return previewPic;
        if (typeof previewPic === 'string' && previewPic.startsWith('http')) {
            return { uri: previewPic };
        }
        if (typeof previewPic === 'string') {
            const imageKey = previewPic.replace('./assets/images/', '').replace('.png', '');
            return localImages[imageKey] || localImages.placeholder;
        }
        return localImages.placeholder;
    };

    const renderItem = ({ item }) => {
        const imageSource = getImageSource(item.preview_pic);
        
        return (
            <TouchableOpacity
                key={item.id}
                onPress={() => handlePostSelect(item.id)}
                style={[
                    styles.postContainer,
                    selectedPost === item.id && styles.selectedPost
                ]}
            >
                <Image 
                    source={imageSource}
                    style={styles.postImage}
                    onError={(e) => console.log('Failed to load image:', e.nativeEvent.error)}
                    resizeMode="cover"
                />
                <View style={styles.postOverlay}>
                    <Text style={styles.postViews}>{item.views} views</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ padding: 10 }}>
                <View style={styles.linkedAccountRow}>
                    <Image source={linkedAccount.profile_pic} style={styles.linkedAccountImage} />
                    <Text style={styles.linkedAccountUsername}>{accountUsername}</Text>
                </View>

                <FlatList
                    data={posts}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={3}
                    contentContainerStyle={styles.gridContainer}
                    scrollEnabled={false}
                />
            </ScrollView>
            
            {selectedPost && (
                <TouchableOpacity style={styles.submitButton} onPress={handleAddToProfile}>
                    <Text style={styles.submitButtonText}>Add Content to Profile</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default AC_fin;