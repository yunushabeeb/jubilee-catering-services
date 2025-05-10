import { Wrapper } from '@/components/Wrapper';
import { users } from '@/constants/data';
import clsx from 'clsx';
import { Dimensions, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function History() {
  const height = Dimensions.get('window').height - 220;

  return (
    <SafeAreaProvider>
      <Wrapper>
        <View>
          <View className="relative">
            <View className="relative">
              <View className="relative h-[150px]"></View>
              <View className="absolute top-0 flex-row items-center justify-center w-full h-full px-6 py-2">
                <View>
                  <Text className="font-medium text-[#181818] text-2xl">
                    History
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                minHeight: height, // Set minimum height dynamically
              }}
              className="bg-[#F8F8F8]"
            >
              <View className={`px-6 pb-2 rounded-t-[20px] w-full`}>
                <View>
                  <View className="mt-6 gap-3">
                    {users[0].orderHistory.map((history, index) => (
                      <View
                        key={history.orderId}
                        className={clsx(
                          'border-b pb-3',
                          index === users[0].orderHistory.length - 1
                            ? 'border-[#DE390580]'
                            : 'border-gray-200',
                        )}
                      >
                        <View className="flex-row items-center justify-between">
                          <Text className="text-sm font-medium">
                            Date: {history.date}
                          </Text>
                          <View className="flex-row items-center gap-1">
                            <Text className="text-[#DE3905] text-sm">
                              Receipt₦:
                            </Text>
                            <Text className="text-tertiary text-sm">
                              {history.orderId}
                            </Text>
                          </View>
                        </View>

                        <View className="flex-row items-center justify-between mt-3 flex-1">
                          <Text className="text-lg">Ordered items</Text>
                          <Text className="text-lg">Pcs</Text>
                          <Text className="text-lg">Price</Text>
                        </View>
                        <View>
                          {history.items.map((item) => (
                            <View
                              key={item.name}
                              className="flex-row items-center justify-between flex-1"
                            >
                              <Text className="text-tertiary w-28">
                                {item.name}
                              </Text>
                              <Text className="text-tertiary">
                                {item.quantity}
                              </Text>
                              <Text className="text-tertiary">
                                ₦{item.price}
                              </Text>
                            </View>
                          ))}
                        </View>
                      </View>
                    ))}
                  </View>
                </View>
              </View>
              <View className="flex-row items-center justify-between border-b border-[#DE390580] px-6 pb-2">
                <Text className="text-[#121212] font-medium text-base">
                  Total amount
                </Text>
                <Text className="text-[#121212] font-medium text-base">
                  ₦{' '}
                  {users[0].orderHistory
                    .map((e) => e.totalPrice)
                    .reduce((a, b) => a + b, 0)}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Wrapper>
    </SafeAreaProvider>
  );
}
