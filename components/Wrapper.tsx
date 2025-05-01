import React, { ReactNode } from 'react';
import { View } from 'react-native';

const Wrapper = ({ children }: { children: ReactNode }) => {
  return <View className="my-12 mx-3">{children}</View>;
};

export default Wrapper;
