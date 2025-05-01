import React, { ReactNode } from 'react';
import { View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

const Wrapper = ({ children }: { children: ReactNode }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
      className="flex-1 bg-white"
    >
      <View>{children}</View>
    </View>
  );
};

export default function App({ children }: { children: ReactNode }) {
  return (
    <SafeAreaProvider>
      <Wrapper>{children}</Wrapper>
    </SafeAreaProvider>
  );
}
