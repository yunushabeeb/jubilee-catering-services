import { Image } from 'expo-image';
import React from 'react';
import { Text, View } from 'react-native';

const ItemCard = ({
  uri,
  name,
  price,
}: {
  uri: any;
  name: string;
  price: string;
}) => {
  return (
    <View>
      <View>
        <Image
          source={uri}
          alt={name}
          style={{
            width: 150,
            height: 100,
            borderRadius: 4,
          }}
        />
      </View>
      <View className="mt-2">
        <Text className="text-[10px] text-[#121212]">{name}</Text>
        <Text className="text-[10px] text-[#808080]">{price}</Text>
      </View>
    </View>
  );
};

export default ItemCard;
