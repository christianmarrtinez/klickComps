import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../styles/styles';
import mockData from '../mockData';

// Import your local images directly
const localImages = {
  content1: require('../assets/images/content1.png'),
  content2: require('../assets/images/content2.png'),
  content3: require('../assets/images/content3.png'),
};

const SC_ig = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { competitionId } = route.params;
    const [selectedPost, setSelectedPost] = useState(null);

    const profileId = global.currentProfile.id;
    const linkedAccount = mockData.linked_accounts.find(
        (account) => account.profile_id === profileId && account.social === 'ig'
    );

    const posts = mockData.content.filter(
        (item) => item.profile_id === profileId && item.linked_account_id === linkedAccount.id
    );

    const handlePostSelect = (postId) => {
        const selectedPostData = posts.find(post => post.id === postId);
        console.log('User clicked on post:', {
            postId,
            previewPic: selectedPostData.preview_pic,
            views: selectedPostData.views,
            linkedAccountId: selectedPostData.linked_account_id
        });
        setSelectedPost(postId === selectedPost ? null : postId);
    };

    const handleFinalizeSubmission = () => {
        console.log(`Submitted post ${selectedPost} to competition ${competitionId}`);
        navigation.goBack();
    };

    const getImageSource = (previewPic) => {
        // If it's already a require result (number), return it
        if (typeof previewPic === 'number') return previewPic;
        
        // If it's a URL string, return as URI
        if (typeof previewPic === 'string' && previewPic.startsWith('http')) {
            return { uri: previewPic };
        }
        
        // Handle local image names
        if (typeof previewPic === 'string') {
            const imageKey = previewPic.replace('./assets/images/', '').replace('.png', '');
            return localImages[imageKey] || localImages.placeholder;
        }
        
        // Fallback to placeholder
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
      
                // {item.id}
              
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ padding: 10 }}>
                <View style={styles.linkedAccountRow}>
                    <Image source={linkedAccount.profile_pic} style={styles.linkedAccountImage} />
                    <Text style={styles.linkedAccountUsername}>{linkedAccount.username}</Text>
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
                <TouchableOpacity style={styles.submitButton} onPress={handleFinalizeSubmission}>
                    <Text style={styles.submitButtonText}>Finalize Submission</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default SC_ig;