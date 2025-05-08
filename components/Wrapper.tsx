import React, { ReactNode } from 'react';
import { ScrollView, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

export const Wrapper = ({ children }: { children: ReactNode }) => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}
        className="flex-1 bg-[#F3F3F3]"
      >
        <View>{children}</View>
      </View>
    </ScrollView>
  );
};

export const WrapperContainer = ({ children }: { children: ReactNode }) => {
  return (
    <SafeAreaProvider>
      <Wrapper>{children}</Wrapper>
    </SafeAreaProvider>
  );
};
