"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  MinusIcon,
  Pencil1Icon,
  PlusIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { Input } from "./ui/input";
import useCart from "@/zustand/cart";
import useAddItem from "@/zustand/newItem";

export default function CartSlider() {
  const showCart = useCart((state) => state.showCart);
  const setShowAddItem = useAddItem((state) => state.setShowAddItem);
  const [tempCart, setTempCart] = useState([
    {
      item: "Fruits and Vegetables",
      itemList: [
        { item: "Avacado", quantity: 1 },
        { item: "Pre-cooked corn 450kg", quantity: 1 },
      ],
    },
    {
      item: "Meat and Fish",
      itemList: [
        { item: "Chicken 1kg", quantity: 1 },
        { item: "Chicken leg box", quantity: 1 },
        { item: "Salmon 1kg", quantity: 1 },
        { item: "Salmon 1kg", quantity: 1 },
        { item: "Salmon 1kg", quantity: 1 },
        { item: "Salmon 1kg", quantity: 1 },
        { item: "Pork fillet 450g", quantity: 1 },
      ],
    },
  ]);
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
          <Button
            className="bg-white text-black rounded-xl hover:text-white"
            onClick={() => setShowAddItem()}
          >
            Add Item
          </Button>
        </div>
      </div>

      <div className="flex justify-between items-center text-2xl font-bold mt-8 md:mt-11 mb-10 pl-6 pr-3 md:pl-12 md:pr-8">
        <h1>Shopping list</h1>
        <Pencil1Icon className="w-6 h-6" />
      </div>

      <div className="scrollArea flex flex-col py-4 space-y-14 h-full overflow-y-scroll pl-6 pr-3 md:pl-12 md:pr-8">
        {tempCart.map(({ item, itemList }, i) => (
          <div key={i}>
            <h1 className="text-sm font-medium text-[#828282]">{item}</h1>
            <div className="space-y-4">
              {itemList.map(({ item, quantity }, index) => (
                <div key={index} className="flex items-center justify-between">
                  <h1 className="text-sm md:text-lg font-medium">{item}</h1>
                  <div className="group/cart text-xs">
                    <p className="block group-hover/cart:hidden rounded-3xl border-2 border-[#F9A109] px-5 py-2 text-[#F9A109] font-bold min-w-[4.25rem]">
                      {quantity} pcs
                    </p>
                    <div className="hidden items-center group-hover/cart:flex bg-white rounded-xl font-bold min-w-[5.25rem]">
                      <div className="flex self-stretch items-center justify-center bg-[#F9A10A] rounded-xl w-9">
                        <TrashIcon className="h-4 w-4 cursor-pointer text-white my-auto" />
                      </div>
                      <MinusIcon
                        className="h-6 w-6 cursor-pointer text-[#F9A109] pr-1"
                        onClick={() =>
                          setTempCart((prev) => {
                            prev[i].itemList[index].quantity--;
                            return [...prev];
                          })
                        }
                      />
                      <p className="rounded-3xl border-2 border-[#F9A109] px-5 py-2 text-[#F9A109] whitespace-nowrap">
                        {quantity} pcs
                      </p>
                      <PlusIcon
                        className="h-6 w-6 cursor-pointer text-[#F9A109] pl-1"
                        onClick={() =>
                          setTempCart((prev) => {
                            prev[i].itemList[index].quantity++;
                            return [...prev];
                          })
                        }
                      />
                    </div>
                  </div>
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
