import React from 'react';
import { Text } from 'react-native';

const ScreenTitle = ({ title }: { title: string }) => {
  return (
    <>
      <Text className="flex-1 text-center font-medium text-2xl ps-16">
        {title}
      </Text>
    </>
  );
};

export default ScreenTitle;
