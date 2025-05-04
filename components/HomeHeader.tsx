import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';
import React from 'react';
import { TextInput, View } from 'react-native';

const HomeHeader = () => {
  return (
    <View className="flex-row items-center gap-4">
      <View className="flex-1 relative">
        {/* The search input */}
        <TextInput
          placeholder="Search foods"
          className="bg-white px-6 my-2 rounded-lg border border-[#181818] pl-10 pr-10 text-sm font-rubik"
        />
        {/* The search icon */}
        <Ionicons
          name="search"
          size={16}
          color="#808080"
          className="absolute top-1/2 left-3 -translate-y-1/2"
        />
        {/* The filter icon */}
        <Ionicons
          name="list-outline"
          size={16}
          color="#808080"
          className="absolute top-1/2 right-3 -translate-y-1/2"
        />
      </View>

      {/* Contact icon */}
      <Image
        source={require('../assets/icons/phone.png')}
        alt="Call"
        style={{ width: 24, height: 24 }}
      />

      {/* Cart Icon */}
      <Image
        source={require('../assets/icons/cart.png')}
        alt="Call"
        style={{ width: 24, height: 24 }}
      />
    </View>
  );
};

export default HomeHeader;
