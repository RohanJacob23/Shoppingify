"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { Input } from "./ui/input";
import useCart from "@/zustand/cart";

export default function CartSlider() {
  const showCart = useCart((state) => state.showCart);
  const tempCart = [
    {
      item: "Fruits and Vegetables",
      itemList: [{ item: "Avacado" }, { item: "Pre-cooked corn 450kg" }],
    },
    {
      item: "Meat and Fish",
      itemList: [
        { item: "Chicken 1kg" },
        { item: "Chicken leg box" },
        { item: "Salmon 1kg" },
        { item: "Salmon 1kg" },
        { item: "Salmon 1kg" },
        { item: "Salmon 1kg" },
        { item: "Pork fillet 450g" },
      ],
    },
  ];
  return (
    <section
      className={`fixed right-0 top-0 flex flex-col bg-[#FFF0DE] h-screen w-64 md:w-96 pt-6 md:pt-11 ${
        showCart ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-500 ease-in-out`}
    >
      <div className="flex justify-around bg-[#80485B] rounded-3xl text-white px-3 py-5 w-64 md:w-80 h-32 mx-4 md:m-auto self-center">
        <Image
          src="/icons/source.svg"
          width={100}
          height={100}
          alt="vector-icon"
          className="-translate-y-10 w-32 h-32"
        />
        <div className="flex flex-col h-fit space-y-3.5">
          <p className="w-40 font-bold text-base">
            Didn&apos;t find what you need?
          </p>
          <Button className="bg-white text-black rounded-xl hover:text-white">
            Add Item
          </Button>
        </div>
      </div>

      <div className="flex justify-between items-center text-2xl font-bold mt-8 md:mt-11 mb-10 pl-6 pr-3 md:pl-12 md:pr-8">
        <h1>Shopping list</h1>
        <Pencil1Icon className="w-6 h-6" />
      </div>

      <div className="scrollArea flex flex-col py-4 space-y-14 h-full overflow-y-scroll pl-6 pr-3 md:pl-12 md:pr-8">
        {tempCart.map(({ item, itemList }, index) => (
          <div key={index}>
            <h1 className="text-sm font-medium text-[#828282]">{item}</h1>
            <div className="space-y-4">
              {itemList.map(({ item }, index) => (
                <div key={index} className="flex items-center justify-between">
                  <h1 className="text-sm md:text-lg font-medium">{item}</h1>
                  <p className="rounded-3xl border-2 border-[#F9A109] px-5 py-2 text-[#F9A109] font-bold">
                    3 pcs
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* bottom section */}
      <div className="flex h-32 w-full bg-white items-center p-5 md:px-10 md:py-9">
        <Input
          type="text"
          placeholder="Enter a name"
          className="border-[#F9A109] border-r-0 h-16 focus-visible:outline-none focus-visible:ring-0"
        />
        <Button className="bg-[#F9A109] text-white h-16 -ml-2 px-6 py-4">
          Save
        </Button>
      </div>
    </section>
  );
}
