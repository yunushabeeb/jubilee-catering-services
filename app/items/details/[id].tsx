import { Wrapper } from '@/components/Wrapper';
import { store } from '@/constants/data';
import { handleAddToCart, handleRemoveFromCart } from '@/lib/cart';
import { useCartStore } from '@/store/cart';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';
import { Redirect, router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, Pressable, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const ItemDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useLocalSearchParams();
  const cart = useCartStore((state) => state.cart);
  const cartCount = cart.length;

  // Fetch the specific item from store by name
  const item = store.find((each) => each.name === id);

  // Return back to home screen if item with such name does not exist
  if (item === undefined) {
    return <Redirect href="/(tabs)" />;
  }

  const height = Dimensions.get('window').height - 210;

  return (
    <SafeAreaProvider>
      <Wrapper>
        <View>
          <View className="relative">
            <View className="relative">
              <Image
                source={item.uri}
                alt={item.name}
                style={{
                  width: '100%',
                  height: 250,
                  borderRadius: 4,
                  objectFit: 'cover',
                }}
              />
              <View className="absolute top-0 flex-row items-center justify-between w-full px-6 py-2">
                <Pressable onPress={() => router.back()}>
                  <Ionicons name="arrow-back-outline" size={24} color="red" />
                </Pressable>
                <View>
                  <Pressable onPress={() => router.push('/cart')}>
                    <Ionicons name="cart-outline" size={24} color="red" />
                    {/* Display a badge with the cart count if the cart is not empty */}
                    {cartCount > 0 && (
                      <View className="p-[0.5px] bg-red-500 text-white rounded-full justify-center items-center w-4 h-4 absolute top-0 right-0 -translate-1/2">
                        <Text className="text-white text-[9px]">
                          {cartCount}
                        </Text>
                        {/* Display the cart count */}
                      </View>
                    )}
                  </Pressable>
                </View>
              </View>
            </View>
            <View
              className={`px-6 py-8 bg-[#F8F8F8] rounded-t-[20px]  -mt-8 w-full`}
              style={{
                minHeight: height, // Set minimum height dynamically
              }}
            >
              {/* Item name */}
              <View className="flex-row items-center justify-between">
                <Text
                  className="font-bold text-2xl text-[#121212]
              "
                >
                  {item.name}
                </Text>
                <Ionicons name="heart-outline" size={24} color="#D83535" />
              </View>

              {/* Ingredients Info */}
              <View className="mt-5">
                <Text className="text-sm text-[#121212]">Ingredients</Text>
                <Text className="text-tertiary text-[12px]">
                  Coco powerder, ground coffee, milk
                </Text>
              </View>

              {/* Quantity Selection */}
              <View className="mt-5 text-base text-[#121212] flex-row items-center gap-2">
                <Text>Quantity:</Text>
                <Pressable
                  onPress={() =>
                    quantity > 1 && setQuantity((prev) => prev - 1)
                  }
                >
                  <Ionicons name="remove-outline" size={16} color="#D83535" />
                </Pressable>

                <Text className="">{quantity}</Text>
                <Pressable onPress={() => setQuantity((prev) => prev + 1)}>
                  <Ionicons name="add-outline" size={16} color="#D83535" />
                </Pressable>
              </View>

              {/* Price Calculation */}
              <View className="mt-5 text-[#121212] flex-row items-center gap-2">
                <Text className="font-medium text-lg">Price:</Text>
                <Text className="text-lg">
                  # {(item.price * quantity).toFixed(2)}
                </Text>
              </View>

              {/* Add to cart functionalities */}
              {cart.find((cartItem) => cartItem.name === item.name) ? (
                <Pressable
                  className="flex-row items-center justify-center gap-3 bg-[#DE3905] text-[#F3F3F3] py-3 rounded-lg mt-5"
                  onPress={() =>
                    handleRemoveFromCart({ id: item.id, name: item.name })
                  }
                >
                  <Text className="text-base text-[#F3F3F3]">
                    Remove from cart
                  </Text>
                  <Ionicons name="cart-outline" size={24} color="#F3F3F3" />
                </Pressable>
              ) : (
                <Pressable
                  className="flex-row items-center justify-center gap-3 bg-[#DE3905] text-[#F3F3F3] py-3 rounded-lg mt-5"
                  onPress={() => handleAddToCart(item as Item)}
                >
                  <Text className="text-base text-[#F3F3F3]">Add to cart</Text>
                  <Ionicons name="cart-outline" size={24} color="#F3F3F3" />
                </Pressable>
              )}

              {/* Reviews */}
              <View className="mt-7">
                <Text className="text-black text-base font-medium">
                  Reviews
                </Text>

                <View className="gap-3 mt-3">
                  {item.reviewers.map((reviewer) => (
                    <View
                      key={reviewer.id}
                      className="flex-row items-center gap-2 border-b border-gray-200 pb-2"
                    >
                      <Image
                        source={reviewer.uri}
                        alt={item.name}
                        style={{
                          width: 60,
                          height: 60,
                          borderRadius: 100,
                          objectFit: 'cover',
                        }}
                      />

                      <View className="flex-1">
                        <View className="flex-row items-center justify-between gap-1">
                          <Text className="text-sm font-medium">
                            Femi Mayowa
                          </Text>
                          <View className="flex-row items-center gap-1">
                            <Text className="text-tertiary">4.5</Text>
                            <Ionicons name="star" size={12} color="#808080" />
                          </View>
                        </View>
                        <Text className="text-tertiary text-sm">
                          Really good food
                        </Text>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>
        </View>
      </Wrapper>
    </SafeAreaProvider>
  );
};

export default ItemDetails;
