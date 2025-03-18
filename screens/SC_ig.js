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

    const posts = [
        { id: 1, imageUrl: 'https://via.placeholder.com/150.png?text=Post1' },
        { id: 2, imageUrl: 'https://via.placeholder.com/150.png?text=Post2' },
        { id: 3, imageUrl: 'https://via.placeholder.com/150.png?text=Post3' },
    ];

    const handlePostSelect = (postId) => {
        setSelectedPost(postId === selectedPost ? null : postId);
    };

    const handleFinalizeSubmission = () => {
        // Logic to submit the selected post to the competition
        console.log(`Submitted post ${selectedPost} to competition ${competitionId}`);
        navigation.goBack();
    };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ alignItems: 'center', padding: 20 }}>
                {posts.map((post) => (
                    <TouchableOpacity
                        key={post.id}
                        onPress={() => handlePostSelect(post.id)}
                        style={{
                            margin: 10,
                            borderWidth: selectedPost === post.id ? 2 : 0,
                            borderColor: 'purple',
                        }}
                    >
                        <Image source={{ uri: post.imageUrl }} style={{ width: 150, height: 150 }} />
                    </TouchableOpacity>
                ))}
            </ScrollView>
            {selectedPost && (
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={handleFinalizeSubmission}
                >
                    <Text style={styles.submitButtonText}>Finalize Submission</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default SC_ig;