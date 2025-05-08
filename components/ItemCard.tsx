import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

const ItemCard = ({ uri, name, price, id }: Item) => {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/items/details/${name}`); // Navigate to the details screen with the item's ID
  };

  return (
    <Pressable onPress={handlePress}>
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
        <Text className="text-[10px] text-[#808080]">#{price}</Text>
      </View>
    </Pressable>
  );
};

export default ItemCard;
