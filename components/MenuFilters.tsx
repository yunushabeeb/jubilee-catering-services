import clsx from 'clsx'; // Utility for conditionally joining classNames
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

// Define the props for the MenuFilters component
interface MenuFiltersProps {
  store: Item[]; // Menu items categorized as 'drink' or 'food'
  selectedMenu: 'drink' | 'food'; // Currently selected menu type
  selectedCategory: string; // Currently selected category
  setSelectedCategory: (category: string) => void; // Function to update the selected category
}

const MenuFilters = ({
  store,
  selectedMenu,
  selectedCategory,
  setSelectedCategory,
}: MenuFiltersProps) => {
  // Function to handle category selection
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <View className="flex-row gap-1.5 my-6">
      {/* Horizontal scrollable list of categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Extract unique categories from the selected menu and map over them */}
        {[
          ...new Set(
            store
              .filter((item) => item.department === selectedMenu)
              .map((each) => each.category),
          ),
        ].map((category, index) => (
          <Pressable
            key={index} // Use index as key since categories are unique
            onPress={() => handleCategoryChange(category)} // Handle category selection
          >
            <Text
              className={clsx(
                'px-4 py-2 text-[10px] rounded-full', // Base styles for the category button
                category === selectedCategory
                  ? 'text-[#121212] font-medium' // Styles for the selected category
                  : 'text-tertiary', // Styles for unselected categories
              )}
            >
              {category} {/* Display the category name */}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default MenuFilters; // Export the component for use in other parts of the application
