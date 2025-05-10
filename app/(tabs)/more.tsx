import { Wrapper } from '@/components/Wrapper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';
import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Dimensions, Pressable, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function More() {
  const height = Dimensions.get('window').height - 220;
  const [darkMode, setDarkMode] = useState(false);
  const [notification, setNotification] = useState(false);

  return (
    <SafeAreaProvider>
      <Wrapper>
        <View>
          <View className="relative">
            <View className="relative">
              <View className="relative h-[200px]">
                <View className="absolute right-32 bottom-16">
                  <Image
                    source={require('../../assets/images/settings-1.png')}
                    alt="Settings"
                    style={{
                      width: 92,
                      height: 92,
                      borderRadius: 4,
                      objectFit: 'cover',
                    }}
                  />
                </View>
                <View className="absolute right-8 top-4">
                  <Image
                    source={require('../../assets/images/settings-2.png')}
                    alt="Settings"
                    style={{
                      width: 92,
                      height: 92,
                      borderRadius: 4,
                      objectFit: 'cover',
                    }}
                  />
                </View>
              </View>
              <View className="absolute top-0 flex-row items-center justify-between w-full px-6 py-2">
                <Pressable onPress={() => router.back()}>
                  <Ionicons name="arrow-back-outline" size={24} color="red" />
                </Pressable>
                <View></View>
              </View>
            </View>
            <View
              className={`px-6 py-8 bg-[#F8F8F8] rounded-t-[20px]  -mt-8 w-full`}
              style={{
                minHeight: height, // Set minimum height dynamically
              }}
            >
              <View>
                <Text className="text-center text-2xl font-medium">More</Text>

                <View className="mt-6 gap-4">
                  <Link href="/profile">
                    <View className="flex-row justify-between items-stretch w-full">
                      <Text className="text-lg">Profile</Text>
                      <Ionicons
                        name="chevron-forward-outline"
                        size={24}
                        color="#808080"
                      />
                    </View>
                  </Link>

                  <Pressable
                    onPress={() => setDarkMode((prev) => !prev)}
                    className="flex-row justify-between items-stretch w-full"
                  >
                    <Text className="text-lg">Dark mode</Text>
                    <View>
                      <Ionicons
                        name={darkMode ? 'toggle-sharp' : 'toggle-outline'}
                        size={24}
                        color="#808080"
                      />
                    </View>
                  </Pressable>
                  <Pressable
                    onPress={() => setNotification((prev) => !prev)}
                    className="flex-row justify-between items-stretch w-full"
                  >
                    <Text className="text-lg">Push notification</Text>
                    <View>
                      <Ionicons
                        name={notification ? 'toggle-sharp' : 'toggle-outline'}
                        size={24}
                        color="#808080"
                      />
                    </View>
                  </Pressable>

                  <Link href="/profile">
                    <View className="flex-row justify-between items-stretch w-full">
                      <Text className="text-lg">Help</Text>
                      <Ionicons
                        name="chevron-forward-outline"
                        size={24}
                        color="#808080"
                      />
                    </View>
                  </Link>
                  <Link href="/feedback">
                    <View className="flex-row justify-between items-stretch w-full">
                      <Text className="text-lg text-[#2A7DD2]">
                        Send us Feedback
                      </Text>
                    </View>
                  </Link>
                  <Link href="/profile">
                    <View className="flex-row justify-between items-stretch w-full">
                      <Text className="text-lg">Show More</Text>
                      <Ionicons
                        name="chevron-forward-outline"
                        size={24}
                        color="#808080"
                      />
                    </View>
                  </Link>

                  <Pressable className="flex-row items-center gap-2 mx-auto mt-12">
                    <Text className="text-[#C50D11] text-lg">Log out</Text>
                    <Ionicons
                      name="log-out-outline"
                      size={24}
                      color="#C50D11"
                    />
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Wrapper>
    </SafeAreaProvider>
  );
}
