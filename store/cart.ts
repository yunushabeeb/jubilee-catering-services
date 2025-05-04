import { create } from 'zustand'; // Import the `create` function from the Zustand library to create a store.

interface CartState {
  cart: Item[]; // The cart is an array of items.
  addToCart: (newData: Item) => void; // Function to add a new item to the cart.
  removeFromCart: ({ id, name }: { id: number; name: string }) => void; // Function to remove an item from the cart by its id and name.
}

// Zustand store for managing cart state
export const useCartStore = create<CartState>((set) => ({
  cart: [], // Initial state of the cart is an empty array.
  addToCart: (newData) => set((state) => ({ cart: [...state.cart, newData] })), // Adds a new item to the cart by appending it to the existing array.
  removeFromCart: ({ id, name }) =>
    set((state) => ({
      cart: state.cart.filter((each) => each.name !== name), // Removes an item from the cart by filtering out items with the specified name.
    })),
}));
