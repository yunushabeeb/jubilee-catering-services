import Ionicons from '@expo/vector-icons/Ionicons';
import clsx from 'clsx';
import React from 'react';
import { TextInput, View } from 'react-native';

export default function Search() {
  return (
    <View className={clsx('flex-1 relative')}>
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
  );
}
