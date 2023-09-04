"use client";

import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import useItemSelected from "@/zustand/selectedItem";
import Image from "next/image";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export default function ItemCart() {
  const [showSelectedItem, setShowSelectedItem, selectedItem] = useItemSelected(
    (state) => [
      state.showSelectedItem,
      state.setShowSelectedItem,
      state.selectedItem,
    ]
  );
  return (
    <section
      className={`scrollArea overflow-y-scroll fixed right-0 top-0 flex flex-col bg-white h-screen w-64 md:w-96 py-6 md:py-11 px-6 md:px-11 ${
        showSelectedItem ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-500 ease-in-out`}
    >
      <div
        className="flex items-center text-[#F9A109] -mt-4 mb-4 md:-mt-8 cursor-pointer"
        onClick={() => setShowSelectedItem()}
      >
        <ArrowLeftIcon className="h-4 w-4 text" />
        <p>back</p>
      </div>
      {/* main section */}
      <div className="flex flex-col font-medium space-y-8">
        <Image
          src="/avacado.jpg"
          width={500}
          height={500}
          alt=""
          className="rounded-3xl w-full"
        />

        <div className="space-y-3">
          <p className="text-[#C1C1C4] text-xs">name</p>
          <h1 className="text-lg">{selectedItem?.name}</h1>
        </div>

        <div className="space-y-3">
          <p className="text-[#C1C1C4] text-xs">category</p>
          <h1 className="text-lg">{selectedItem?.category}</h1>
        </div>

        <div className="space-y-3">
          <p className="text-[#C1C1C4] text-xs">note</p>
          <h1 className="text-lg">{selectedItem?.note}</h1>
        </div>
      </div>

      {/* bottom section */}
      <div className="flex justify-between md:space-x-11 mt-8">
        <Button variant="outline" type="button">
          Delete
        </Button>
        <Button type="submit" className="bg-[#F9A109]">
          Add to list
        </Button>
      </div>
    </section>
  );
}
