// SC_ig.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../styles/styles';
import mockData from '../mockData';

const SC_ig = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { competitionId } = route.params;
    const [selectedPost, setSelectedPost] = useState(null);

    const profileId = global.currentProfile.id;
    const linkedAccount = mockData.linked_accounts.find(
        (account) => account.profile_id === profileId && account.social === 'snap'
    );

    const posts = mockData.content.filter(
        (item) => item.profile_id === profileId && item.linked_account_id === linkedAccount.id
    );

    const handlePostSelect = (postId) => {
        setSelectedPost(postId === selectedPost ? null : postId);
    };

    const handleFinalizeSubmission = () => {
        console.log(`Submitted post ${selectedPost} to competition ${competitionId}`);
        navigation.goBack();
    };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ alignItems: 'center', padding: 20 }}>
                {/* Linked Account Info */}
                <View style={styles.linkedAccountRow}>
                    <Image source={linkedAccount.profile_pic} style={styles.linkedAccountImage} />
                    <Text style={styles.linkedAccountUsername}>{linkedAccount.username}</Text>
                </View>

                {/* Posts */}
                {posts.map((post) => (
                    <TouchableOpacity
                        key={post.id}
                        onPress={() => handlePostSelect(post.id)}
                        style={styles.postContainer}
                    >
                        <Image source={{ uri: post.preview_pic }} style={styles.postImage} />
                        <View style={styles.postOverlay}>
                            <Text style={styles.postViews}>{post.views} views</Text>
                        </View>
                    </TouchableOpacity>
                ))}
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