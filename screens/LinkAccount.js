import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/styles.js';

const platforms = [
  { name: 'Instagram', image: require('../assets/images/instagram.png') },
  { name: 'TikTok', image: require('../assets/images/tiktok.png') },
  { name: 'Snapchat', image: require('../assets/images/snapchat.png') },
];

const LinkAccount = () => {
  const handlePress = (platformName) => {
    console.log(`Linking ${platformName}...`);
    // Trigger platform-specific auth flow here
  };

  return (
    <View style={styles.socialContainer}>
  <View style={styles.iconsWrapper}>
    {platforms.map((platform, index) => (
      <TouchableOpacity
        key={index}
        style={styles.iconCircle}
        onPress={() => handlePress(platform.name)}
      >
        <Image
          source={platform.image}
          style={styles.platformImage}
          resizeMode="contain"
        />
      </TouchableOpacity>
    ))}
  </View>
</View>

  );
};

export default LinkAccount;
