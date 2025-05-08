import { handleAddToCart, handleRemoveFromCart } from '@/lib/cart';
import { useCartStore } from '@/store/cart'; // Importing the cart store for state management
import Ionicons from '@expo/vector-icons/Ionicons'; // Importing Ionicons for icons
import { Link } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native'; // Importing React Native components

// MenuItem component to display individual menu items and handle cart interactions
function MenuItem({ each }: { each: Item }) {
  const cart = useCartStore((state) => state.cart); // Accessing the cart state from the store

  return (
    <View className="border-b border-[#EBEBEB] py-1.5 flex-row justify-between items-center">
      {/* Displaying the item's name and price */}
      <Link href={`/items/details/${each.name}`}>
        <View>
          <Text className="text-sm text-[#121212]">{each.name}</Text>
          <Text className="text-[12px] text-tertiary">{each.price}</Text>
        </View>
      </Link>

      {/* Displaying the add or remove button based on whether the item is in the cart */}
      <View className="rounded-full bg-secondary w-7 h-7 justify-center items-center">
        {cart.find((e) => e.name === each.name) === undefined ? (
          // If the item is not in the cart, show the add button
          <Pressable onPress={() => handleAddToCart(each)}>
            <Ionicons name="add-outline" size={20} color="#DE3905" />
          </Pressable>
        ) : (
          // If the item is in the cart, show the remove button
          <Pressable
            onPress={() =>
              handleRemoveFromCart({
                id: each.id,
                name: each.name,
              })
            }
          >
            <Ionicons name="remove-outline" size={20} color="#DE3905" />
          </Pressable>
        )}
      </View>
    </View>
  );
}

export default MenuItem; // Exporting the MenuItem component
