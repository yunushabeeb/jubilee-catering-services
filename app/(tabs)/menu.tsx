import HomeHeader from '@/components/HomeHeader';
import MenuFilters from '@/components/MenuFilters';
import MenuItem from '@/components/MenuItem';
import MenuTogglers from '@/components/MenuTogglers';
import Wrapper from '@/components/Wrapper';
import { useEffect, useState } from 'react';
import { Dimensions, View } from 'react-native';

// Menu items data for drinks and foods
const menuItems = {
  drinks: [
    {
      id: 1,
      uri: 'https://example.com/zobo.jpg',
      name: 'Zobo',
      price: 500,
      category: 'Traditional',
    },
    {
      id: 2,
      uri: 'https://example.com/kunu.jpg',
      name: 'Kunu',
      price: 400,
      category: 'Traditional',
    },
    {
      id: 3,
      uri: 'https://example.com/palmwine.jpg',
      name: 'Palm Wine',
      price: 300,
      category: 'Traditional',
    },
    {
      id: 4,
      uri: 'https://example.com/fayrouz.jpg',
      name: 'Fayrouz',
      price: 250,
      category: 'Soft Drink',
    },
    {
      id: 5,
      uri: 'https://example.com/maltina.jpg',
      name: 'Maltina',
      price: 200,
      category: 'Soft Drink',
    },
    {
      id: 6,
      uri: 'https://example.com/chapman.jpg',
      name: 'Chapman',
      price: 600,
      category: 'Cocktail',
    },
    {
      id: 7,
      uri: 'https://example.com/orangejuice.jpg',
      name: 'Orange Juice',
      price: 350,
      category: 'Juice',
    },
    {
      id: 8,
      uri: 'https://example.com/gingerbeer.jpg',
      name: 'Ginger Beer',
      price: 450,
      category: 'Traditional',
    },
    {
      id: 9,
      uri: 'https://example.com/pepsi.jpg',
      name: 'Pepsi',
      price: 150,
      category: 'Soft Drink',
    },
    {
      id: 10,
      uri: 'https://example.com/cocacola.jpg',
      name: 'Coca-Cola',
      price: 150,
      category: 'Soft Drink',
    },
    {
      id: 11,
      uri: 'https://example.com/espresso.jpg',
      name: 'Espresso',
      price: 300,
      category: 'Coffee',
    },
    {
      id: 12,
      uri: 'https://example.com/latte.jpg',
      name: 'Latte',
      price: 350,
      category: 'Coffee',
    },
    {
      id: 13,
      uri: 'https://example.com/green-tea.jpg',
      name: 'Green Tea',
      price: 250,
      category: 'Tea',
    },
    {
      id: 14,
      uri: 'https://example.com/black-tea.jpg',
      name: 'Black Tea',
      price: 200,
      category: 'Tea',
    },
    {
      id: 15,
      uri: 'https://example.com/smoothie.jpg',
      name: 'Smoothie',
      price: 500,
      category: 'Smoothie',
    },
    {
      id: 16,
      uri: 'https://example.com/milkshake.jpg',
      name: 'Milkshake',
      price: 450,
      category: 'Milkshake',
    },
    {
      id: 17,
      uri: 'https://example.com/energy-drink.jpg',
      name: 'Energy Drink',
      price: 400,
      category: 'Energy Drink',
    },
    {
      id: 18,
      uri: 'https://example.com/sparkling-water.jpg',
      name: 'Sparkling Water',
      price: 300,
      category: 'Water',
    },
    {
      id: 19,
      uri: 'https://example.com/still-water.jpg',
      name: 'Still Water',
      price: 200,
      category: 'Water',
    },
    {
      id: 20,
      uri: 'https://example.com/matcha.jpg',
      name: 'Matcha Latte',
      price: 400,
      category: 'Tea',
    },
    {
      id: 21,
      uri: 'https://example.com/cappuccino.jpg',
      name: 'Cappuccino',
      price: 350,
      category: 'Coffee',
    },
    {
      id: 22,
      uri: 'https://example.com/iced-tea.jpg',
      name: 'Iced Tea',
      price: 300,
      category: 'Tea',
    },
    {
      id: 23,
      uri: 'https://example.com/mango-juice.jpg',
      name: 'Mango Juice',
      price: 350,
      category: 'Juice',
    },
    {
      id: 24,
      uri: 'https://example.com/pineapple-juice.jpg',
      name: 'Pineapple Juice',
      price: 350,
      category: 'Juice',
    },
    {
      id: 25,
      uri: 'https://example.com/americano.jpg',
      name: 'Americano',
      price: 300,
      category: 'Coffee',
    },
    {
      id: 26,
      uri: 'https://example.com/banana-smoothie.jpg',
      name: 'Banana Smoothie',
      price: 600,
      category: 'Smoothie',
    },
    {
      id: 27,
      uri: 'https://example.com/orijin.jpg',
      name: 'Orijin',
      price: 500,
      category: 'Traditional',
    },
  ],
  foods: [
    {
      id: 1,
      uri: 'https://example.com/jollof-rice.jpg',
      name: 'Jollof Rice',
      price: 1000,
      category: 'Main Course',
    },
    {
      id: 2,
      uri: 'https://example.com/fried-rice.jpg',
      name: 'Fried Rice',
      price: 1200,
      category: 'Main Course',
    },
    {
      id: 3,
      uri: 'https://example.com/egusi-soup.jpg',
      name: 'Egusi Soup',
      price: 1500,
      category: 'Soup',
    },
    {
      id: 4,
      uri: 'https://example.com/vegetable-soup.jpg',
      name: 'Vegetable Soup',
      price: 1400,
      category: 'Soup',
    },
    {
      id: 5,
      uri: 'https://example.com/pepper-soup.jpg',
      name: 'Pepper Soup',
      price: 800,
      category: 'Appetizer',
    },
    {
      id: 6,
      uri: 'https://example.com/suya.jpg',
      name: 'Suya',
      price: 500,
      category: 'Snack',
    },
    {
      id: 7,
      uri: 'https://example.com/moimoi.jpg',
      name: 'Moi Moi',
      price: 300,
      category: 'Side Dish',
    },
    {
      id: 8,
      uri: 'https://example.com/akara.jpg',
      name: 'Akara',
      price: 200,
      category: 'Snack',
    },
    {
      id: 9,
      uri: 'https://example.com/pounded-yam.jpg',
      name: 'Pounded Yam',
      price: 500,
      category: 'Side Dish',
    },
    {
      id: 10,
      uri: 'https://example.com/eba.jpg',
      name: 'Eba',
      price: 400,
      category: 'Side Dish',
    },
    {
      id: 11,
      uri: 'https://example.com/amala.jpg',
      name: 'Amala',
      price: 450,
      category: 'Side Dish',
    },
    {
      id: 12,
      uri: 'https://example.com/plantain.jpg',
      name: 'Fried Plantain',
      price: 300,
      category: 'Side Dish',
    },
    {
      id: 13,
      uri: 'https://example.com/chicken.jpg',
      name: 'Grilled Chicken',
      price: 1000,
      category: 'Protein',
    },
    {
      id: 14,
      uri: 'https://example.com/beef.jpg',
      name: 'Beef',
      price: 800,
      category: 'Protein',
    },
    {
      id: 15,
      uri: 'https://example.com/fish.jpg',
      name: 'Grilled Fish',
      price: 1200,
      category: 'Protein',
    },
    {
      id: 16,
      uri: 'https://example.com/salad.jpg',
      name: 'Salad',
      price: 600,
      category: 'Side Dish',
    },
    {
      id: 17,
      uri: 'https://example.com/bread.jpg',
      name: 'Bread',
      price: 200,
      category: 'Snack',
    },
    {
      id: 18,
      uri: 'https://example.com/yam.jpg',
      name: 'Boiled Yam',
      price: 400,
      category: 'Side Dish',
    },
    {
      id: 19,
      uri: 'https://example.com/porridge.jpg',
      name: 'Yam Porridge',
      price: 700,
      category: 'Main Course',
    },
    {
      id: 20,
      uri: 'https://example.com/spaghetti.jpg',
      name: 'Spaghetti',
      price: 900,
      category: 'Main Course',
    },
    {
      id: 21,
      uri: 'https://example.com/beans.jpg',
      name: 'Beans',
      price: 500,
      category: 'Main Course',
    },
    {
      id: 22,
      uri: 'https://example.com/okra-soup.jpg',
      name: 'Okra Soup',
      price: 1300,
      category: 'Soup',
    },
    {
      id: 23,
      uri: 'https://example.com/peppered-snail.jpg',
      name: 'Peppered Snail',
      price: 2000,
      category: 'Appetizer',
    },
    {
      id: 24,
      uri: 'https://example.com/peppered-chicken.jpg',
      name: 'Peppered Chicken',
      price: 1500,
      category: 'Protein',
    },
    {
      id: 25,
      uri: 'https://example.com/peppered-fish.jpg',
      name: 'Peppered Fish',
      price: 1800,
      category: 'Protein',
    },
    {
      id: 26,
      uri: 'https://example.com/amala.jpg',
      name: 'Amala with Ewedu and Gbegiri',
      price: 1200,
      category: 'Main Course',
    },
    {
      id: 27,
      uri: 'https://example.com/egusi.jpg',
      name: 'Pounded Yam and Egusi Soup',
      price: 1500,
      category: 'Main Course',
    },
    {
      id: 28,
      uri: 'https://example.com/pepper-soup.jpg',
      name: 'Catfish Pepper Soup',
      price: 1800,
      category: 'Soup',
    },
    {
      id: 29,
      uri: 'https://example.com/gizdodo.jpg',
      name: 'Gizdodo',
      price: 1000,
      category: 'Side Dish',
    },
    {
      id: 30,
      uri: 'https://example.com/jollof.jpg',
      name: 'Jollof Rice with Chicken',
      price: 1500,
      category: 'Main Course',
    },
    {
      id: 31,
      uri: 'https://example.com/okro.jpg',
      name: 'Okro Soup with Semo',
      price: 1300,
      category: 'Soup',
    },
    {
      id: 32,
      uri: 'https://example.com/burger.jpg',
      name: 'Beef Burger',
      price: 1600,
      category: 'Snack',
    },
    {
      id: 33,
      uri: 'https://example.com/egg-roll.jpg',
      name: 'Egg Roll',
      price: 400,
      category: 'Snack',
    },
  ],
};

export default function Menu() {
  // State to track the selected menu (drinks or foods)
  const [selectedMenu, setSelectedMenu] =
    useState<keyof typeof menuItems>('drinks');

  // State to track the selected category within the selected menu
  const [selectedCategory, setSelectedCategory] = useState(
    menuItems[selectedMenu][0].category, // Default to the first category of the selected menu
  );

  // Function to handle menu toggling between 'drinks' and 'foods'
  const handleMenuChange = (menuText: 'drinks' | 'foods') => {
    setSelectedMenu(menuText);
  };

  // Update the selected category whenever the selected menu changes
  useEffect(() => {
    setSelectedCategory(menuItems[selectedMenu][0].category);
  }, [selectedMenu]);

  // Calculate the height for the menu container dynamically
  const height = Dimensions.get('window').height - 210;

  return (
    <Wrapper>
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
          menuItems={menuItems}
          selectedMenu={selectedMenu}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Display Menu Items for the Selected Category */}
        <View>
          {menuItems[selectedMenu]
            .filter((item) => item.category === selectedCategory)
            // Filter items by selected category
            .map((each) => (
              <MenuItem key={each.id} each={each} /> // Render each menu item
            ))}
        </View>
      </View>
    </Wrapper>
  );
}
