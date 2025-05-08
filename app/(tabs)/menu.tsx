import HomeHeader from '@/components/HomeHeader';
import MenuFilters from '@/components/MenuFilters';
import MenuItem from '@/components/MenuItem';
import MenuTogglers from '@/components/MenuTogglers';
import { WrapperContainer } from '@/components/Wrapper';
import { store } from '@/constants/data';
import { useEffect, useState } from 'react';
import { Dimensions, View } from 'react-native';

export default function Menu() {
  // State to track the selected menu (drink or food)
  const [selectedMenu, setSelectedMenu] = useState<'drink' | 'food'>('drink');

  // State to track the selected category within the selected menu
  const [selectedCategory, setSelectedCategory] = useState(
    store.filter((item) => item.department === selectedMenu)[0].category, // Default to the first category of the selected menu
  );

  // Function to handle menu toggling between 'drink' and 'food'
  const handleMenuChange = (menuText: 'drink' | 'food') => {
    setSelectedMenu(menuText);
  };

  // Update the selected category whenever the selected menu changes
  useEffect(() => {
    setSelectedCategory(
      store.filter((item) => item.department === selectedMenu)[0].category,
    );
  }, [selectedMenu]);

  // Calculate the height for the menu container dynamically
  const height = Dimensions.get('window').height - 210;

  return (
    <WrapperContainer>
      {/* Header Section */}
      <View className="px-6 py-8">
        <HomeHeader title="Menu" />
      </View>

      {/* Main Content Section */}
      <View
        className="px-6 py-8 bg-[#F8F8F8] rounded-t-[20px]"
        style={{
          minHeight: height, // Set minimum height dynamically
        }}
      >
        {/* Menu Toggler Component */}
        <MenuTogglers
          selectedMenu={selectedMenu}
          handleMenuChange={handleMenuChange}
        />

        {/* Menu Filters Component */}
        <MenuFilters
          store={store as Item[]}
          selectedMenu={selectedMenu}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Display Menu Items for the Selected Category */}
        <View>
          {store
            .filter(
              (item) =>
                item.department === selectedMenu &&
                item.category === selectedCategory,
            )
            // Filter items by selected category
            .map((each) => (
              <MenuItem key={each.id} each={each as Item} /> // Render each menu item
            ))}
        </View>
      </View>
    </WrapperContainer>
  );
}
