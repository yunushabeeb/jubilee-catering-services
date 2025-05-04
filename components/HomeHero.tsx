import { Image } from 'expo-image';
import React from 'react';
import { View } from 'react-native';

const HomeHero = ({ uri }: { uri: string }) => {
  return (
    <View>
      <Image
        source={uri}
        alt="Hero"
        style={{
          width: '100%',
          height: 100,
        }}
      />
    </View>
  );
};

export default HomeHero;
