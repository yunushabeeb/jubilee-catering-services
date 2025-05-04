import { useCartStore } from '@/store/cart'; // Importing the cart store to access the cart state
import { Image } from 'expo-image'; // Importing the Image component from expo-image
import React from 'react'; // Importing React
import { Text, View } from 'react-native'; // Importing Text and View components from react-native

const QuickButtons = () => {
  // Accessing the cart count from the cart store
  const cartCount = useCartStore((state) => state.cart.length);

  return (
    <>
      {/* Contact icon */}
      <Image
        source={require('../assets/icons/phone.png')} // Path to the phone icon image
        alt="Call" // Accessibility alt text for the image
        style={{ width: 24, height: 24 }} // Styling the image with width and height
      />

      {/* Cart Icon */}
      <View className="relative">
        <Image
          source={require('../assets/icons/cart.png')} // Path to the cart icon image
          alt="Call" // Accessibility alt text for the image
          style={{ width: 24, height: 24 }} // Styling the image with width and height
        />
        {/* Display a badge with the cart count if the cart is not empty */}
        {cartCount > 0 && (
          <View className="p-[0.5px] bg-red-500 text-white rounded-full justify-center items-center w-4 h-4 absolute top-0 right-0 -translate-1/2">
            <Text className="text-white text-[9px]">{cartCount}</Text>{' '}
            {/* Display the cart count */}
          </View>
        )}
      </View>
    </>
  );
};

export default QuickButtons; // Exporting the QuickButtons component as the default export
