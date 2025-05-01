import { Stack, useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function NotFoundScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ title: 'Page Not Found' }} />
      <View className="flex-1 justify-center items-center p-5 bg-gray-100">
        <Text className="text-2xl font-bold mb-2 text-gray-800">
          404 - Page Not Found
        </Text>
        <Text className="text-base text-center mb-5 text-gray-600">
          Oops! The page you are looking for does not exist.
        </Text>
        <Button
          title="Go Back Home"
          onPress={() => router.push('/')}
          color="#007BFF"
        />
      </View>
    </>
  );
}
