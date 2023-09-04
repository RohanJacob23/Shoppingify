import { create } from "zustand";

interface itemSelected {
  selectedItem?: { name: string; category: string; note: string };
  showSelectedItem: boolean;
  setShowSelectedItem: () => void;
  setSelectedItem: (item: {
    name: string;
    category: string;
    note: string;
  }) => void;
}

const useItemSelected = create<itemSelected>()((set) => ({
  selectedItem: undefined,
  showSelectedItem: false,
  setShowSelectedItem: () =>
    set((state) => ({ showSelectedItem: !state.showSelectedItem })),
  setSelectedItem: (item) => set({ selectedItem: item }),
}));

export default useItemSelected;
