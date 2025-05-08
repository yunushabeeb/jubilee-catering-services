import { Wrapper } from '@/components/Wrapper';
import { handleRemoveFromCart } from '@/lib/cart';
import { useCartStore } from '@/store/cart';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';
import { Link, router } from 'expo-router';
import React from 'react';
import { Dimensions, Pressable, Text, View } from 'react-native';

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  // const cartCount = cart.length;

  const height = Dimensions.get('window').height - 100;

  return (
    <Wrapper>
      <View className="bg-primary/10 h-32">
        <View className="flex-row items-center justify-between w-full px-6 py-6">
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back-outline" size={24} color="red" />
          </Pressable>
          <View className="flex-row items-center gap-1 mx-auto">
            <View className="relative">
              <Ionicons name="cart-outline" size={24} color="red" />
              {/* Display a badge with the cart count if the cart is not empty */}
              {/* {cartCount > 0 && (
                <View className="p-[0.5px] bg-red-500 text-white rounded-full justify-center items-center w-4 h-4 absolute top-0 right-0 -translate-1/2">
                  <Text className="text-white text-[9px]">{cartCount}</Text>
                </View>
              )} */}
            </View>
            <Text className="text-2xl font-bold">Your Cart</Text>
          </View>
        </View>
      </View>
      <View
        className="px-6 py-8 bg-[#F8F8F8] rounded-t-[20px] w-full"
        style={{
          minHeight: height, // Set minimum height dynamically
        }}
      >
        {cart.length === 0 ? (
          <View className="flex-1 py-20 flex-col items-stretch h-full justify-between">
            <Text className="text-center text-2xl text-tertiary">
              Your cart is empty
            </Text>

            <Pressable>
              <Link href="/(tabs)/menu" className="mx-auto">
                <View className="flex-row mx-auto justify-center items-center gap-1">
                  <Text className="text-[#2A7DD2]">Add Something</Text>
                  <Ionicons
                    name="add-circle-outline"
                    size={24}
                    color="#2A7DD2"
                  />
                </View>
              </Link>
            </Pressable>
          </View>
        ) : (
          <View>
            <View className="flex-row flex-wrap gap-3">
              {cart.map((item) => (
                <View key={item.name}>
                  <View className="relative">
                    <Image
                      source={item.uri}
                      alt={item.name}
                      style={{
                        width: 150,
                        height: 100,
                        borderRadius: 4,
                        objectFit: 'cover',
                      }}
                    />
                    <Pressable
                      className="absolute top-0 right-0 bg-red-500 rounded-full"
                      onPress={() =>
                        handleRemoveFromCart({
                          id: item.id,
                          name: item.name,
                        })
                      }
                    >
                      <Ionicons name="close-outline" size={24} color="white" />
                    </Pressable>
                  </View>
                  <View>
                    <Text className="text-base text-black font-medium">
                      {item.name}
                    </Text>
                    <Text className="text-tertiary text-sm">
                      #{item.price.toFixed(2)}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
            <View className="flex-row items-center justify-between border-t border-primary my-5 py-3 text-[#181818]">
              <Text className="text-lg font-bold">Total:</Text>
              <Text className="text-lg font-bold">
                {cart
                  .map((each) => each.price)
                  .reduce((a, b) => Number(a) + Number(b), 0)}
              </Text>
            </View>

            <Pressable className="text-center rounded-lg bg-red-500 py-3">
              <Text className="mx-auto text-[#F8F8F8] font-medium">Buy</Text>
            </Pressable>
          </View>
        )}
      </View>
    </Wrapper>
  );
};

export default Cart;
