import { create } from "zustand";

interface newItemState {
  showAddItem: boolean;
  setShowAddItem: () => void;
}

const useAddItem = create<newItemState>()((set) => ({
  showAddItem: false,
  setShowAddItem: () => set((state) => ({ showAddItem: !state.showAddItem })),
}));

export default useAddItem;
