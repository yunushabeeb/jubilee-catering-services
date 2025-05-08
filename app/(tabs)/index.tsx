import HomeHeader from '@/components/HomeHeader';
import HomeHero from '@/components/HomeHero';
import ItemContainer from '@/components/ItemContainer';
import { WrapperContainer } from '@/components/Wrapper';
import { store } from '@/constants/data';
import { View } from 'react-native';

export default function Index() {
  return (
    <WrapperContainer>
      <View className="px-6 py-8">
        <HomeHeader home />
        <View className="mt-8">
          <View className="mb-6">
            <HomeHero uri={require('../../assets/images/hero.png')} />
          </View>
          <View className="gap-6">
            {/* List of popular foods */}
            <ItemContainer
              title="Most Popular Food"
              data={
                store
                  .filter((food) => food.department === 'food')
                  .slice(0, 2) as Item[]
              }
            />

            {/* List of popular drinks */}
            <ItemContainer
              title="Most Popular Drink"
              data={
                store
                  .filter((drink) => drink.department === 'drink')
                  .slice(0, 2) as Item[]
              }
            />

            {/* Banner */}
            <HomeHero uri={require('../../assets/images/banner.png')} />
          </View>
        </View>
      </View>
    </WrapperContainer>
  );
}
