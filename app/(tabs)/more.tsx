import { WrapperContainer } from '@/components/Wrapper';
import { Text, View } from 'react-native';

export default function More() {
  return (
    <WrapperContainer>
      <View className="px-6 py-8">
        <Text className="font-bold">More</Text>
      </View>
    </WrapperContainer>
  );
}
