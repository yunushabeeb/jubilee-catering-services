import { clsx } from 'clsx';
import React from 'react';
import { View } from 'react-native';
import QuickButtons from './QuickButtons';
import ScreenTitle from './ScreenTitle';
import Search from './Search';

const HomeHeader = ({ home, title }: { home?: boolean; title?: string }) => {
  return (
    <View>
      <View
        className={clsx('flex-row items-center gap-4', title ? 'mb-6' : '')}
      >
        {/* Show screen title if not on home screen */}
        {title && <ScreenTitle title="Menu" />}

        {/* Show search bar if on home screen  */}
        {home && <Search />}

        {/* Quick buttons */}
        <QuickButtons />
      </View>

      {/* Full search on all screen except home */}
      {!home && <Search />}
    </View>
  );
};

export default HomeHeader;
