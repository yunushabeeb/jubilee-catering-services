import HomeHeader from '@/components/HomeHeader';
import HomeHero from '@/components/HomeHero';
import ItemContainer from '@/components/ItemContainer';
import Wrapper from '@/components/Wrapper';
import { View } from 'react-native';

export default function Index() {
  // Sample popular foods
  const foods = [
    {
      uri: require('../../assets/images/foods/rice.png'),
      name: 'Rice',
      price: '#545.00',
    },
    {
      uri: require('../../assets/images/foods/spaghetti.png'),
      name: 'Spaghetti',
      price: '#785.00',
    },
  ];

  // Sample popular drinks
  const drinks = [
    {
      uri: require('../../assets/images/drinks/orange-juice.png'),
      name: 'Rice',
      price: '#545.00',
    },
    {
      uri: require('../../assets/images/drinks/fruit-juice.png'),
      name: 'Spaghetti',
      price: '#785.00',
    },
  ];

  return (
    <Wrapper>
      <View className="px-6 py-8">
        <HomeHeader home />
        <View className="mt-8">
          <View className="mb-6">
            <HomeHero uri={require('../../assets/images/hero.png')} />
          </View>
          <View className="gap-6">
            {/* List of popular foods */}
            <ItemContainer title="Most Popular Food" data={foods} />

            {/* List of popular drinks */}
            <ItemContainer title="Most Popular Drink" data={drinks} />

            {/* Banner */}
            <HomeHero uri={require('../../assets/images/banner.png')} />
          </View>
        </View>
      </View>
    </Wrapper>
  );
}
