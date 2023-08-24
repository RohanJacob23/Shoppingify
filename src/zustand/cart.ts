import { create } from "zustand";

interface cartState {
  showCart: boolean;
  setShowCart: () => void;
}

const useCart = create<cartState>()((set) => ({
  showCart: false,
  setShowCart: () => set((state) => ({ showCart: !state.showCart })),
}));

export default useCart;
