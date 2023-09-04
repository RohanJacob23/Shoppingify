"use client";

import useItemSelected from "@/zustand/selectedItem";
import { PlusIcon } from "@radix-ui/react-icons";
import React from "react";

export default function SmallCards({
  item,
  category,
}: {
  item: { name: string; note: string };
  category: string;
}) {
  const [showSelectedItem, setShowSelectedItem, setSelectedItem] =
    useItemSelected((state) => [
      state.showSelectedItem,
      state.setShowSelectedItem,
      state.setSelectedItem,
    ]);

  const handleClick = () => {
    if (!showSelectedItem) setShowSelectedItem();
    setSelectedItem({ ...item, category });
  };

  return (
    <div
      className="smallCards h-fit flex items-center justify-between bg-white rounded-xl w-32 md:w-44 p-4 space-x-1.5 cursor-pointer"
      onClick={handleClick}
    >
      <p className="break-words">{item.name}</p>
      <PlusIcon className="shrink-0 w-5 h-5 opacity-30 hover:cursor-pointer hover:opacity-100" />
    </div>
  );
}
