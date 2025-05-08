import { useCartStore } from '@/store/cart';

// Function to handle adding an item to the cart
export const handleAddToCart = (newData: Item) => {
  const { addToCart } = useCartStore.getState(); // Accessing the addToCart function from the store
  addToCart(newData); // Adding the item to the cart
};

// Function to handle removing an item from the cart
export const handleRemoveFromCart = ({
  id,
  name,
}: {
  id: number;
  name: string;
}) => {
  const { removeFromCart } = useCartStore.getState(); // Accessing the removeFromCart function from the store
  removeFromCart({ id, name }); // Removing the item from the cart
};
