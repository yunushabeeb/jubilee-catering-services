import clsx from 'clsx'; // Utility for conditionally joining class names
import React, { ReactNode } from 'react';
import { Pressable, Text, View } from 'react-native';

// Button component: A reusable button with conditional styling based on the `active` prop
const Button = ({
  children, // The content inside the button
  active, // Determines the button's active state
  onPress, // Function to handle button press
}: {
  children: ReactNode;
  active: boolean;
  variant?: string; // Optional prop for future styling variants
  onPress?: () => void;
}) => {
  return (
    <Pressable
      onPress={onPress} // Trigger the onPress function when the button is pressed
      className={clsx(
        'rounded-[20px] justify-center w-36 py-3', // Base styles
        active ? 'bg-primary' : 'bg-secondary', // Conditional styles based on `active`
      )}
    >
      <Text
        className={clsx('mx-auto', active ? 'text-white' : 'text-tertiary')}
      >
        {children} {/* Render the button's content */}
      </Text>
    </Pressable>
  );
};

// MenuTogglers component: A toggle switch for selecting between "foods" and "drinks"
const MenuTogglers = ({
  selectedMenu, // Currently selected menu ('foods' or 'drinks')
  handleMenuChange, // Function to handle menu change
}: {
  selectedMenu: 'food' | 'drink';
  handleMenuChange: (menu: 'food' | 'drink') => void;
}) => {
  return (
    <View className="flex-row gap-2.5 mx-auto">
      {/* Container for the buttons */}
      <Button
        variant="secondary" // Optional variant prop
        active={selectedMenu === 'food'} // Check if 'foods' is the selected menu
        onPress={() => handleMenuChange('food')} // Change menu to 'foods' on press
      >
        Foods {/* Label for the 'foods' button */}
      </Button>
      <Button
        active={selectedMenu === 'drink'} // Check if 'drinks' is the selected menu
        onPress={() => handleMenuChange('drink')} // Change menu to 'drinks' on press
      >
        Drinks {/* Label for the 'drinks' button */}
      </Button>
    </View>
  );
};

export default MenuTogglers; // Export the MenuTogglers component as default
