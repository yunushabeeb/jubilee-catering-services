import React from 'react';
import { Text, View } from 'react-native';
import ItemCard from './ItemCard';

const itemContainer = ({ title, data }: itemContainerProps) => {
  return (
    <View>
      <Text className="text-sm text-[#121212] font-medium mb-5">{title}</Text>

      <View className="flex-row justify-between">
        {data.map((item) => (
          <ItemCard key={item.name} {...item} />
        ))}
      </View>
    </View>
  );
};

export default itemContainer;
