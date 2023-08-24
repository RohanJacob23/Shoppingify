"use client";

import React from "react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge } from "./ui/badge";
import useCart from "@/zustand/cart";

export default function Sidenav() {
  const pathname = usePathname();
  const setShowCart = useCart((state) => state.setShowCart);
  return (
    <section className="relative z-50 flex flex-col justify-between items-center min-w-[3.84rem] md:min-w-[6rem] h-screen bg-white py-11">
      <Image
        src="/logo/logo.svg"
        alt="logo"
        width={50}
        height={50}
        className="w-11 h-11"
        priority={true}
      />

      <div className="flex flex-col items-center gap-16">
        <TooltipProvider delayDuration={300}>
          <div className="relative group">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" asChild>
                  <Link href="/">
                    <Image
                      src="/icons/list.png"
                      alt="list"
                      width={50}
                      height={50}
                      className="w-6 h-6"
                    />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>items</p>
              </TooltipContent>
            </Tooltip>
            <div
              className={`${
                pathname === "/" ? "block" : "hidden"
              } group-hover:block absolute top-1/2 -translate-y-1/2 -left-1/4 -translate-x-full w-1.5 h-11 bg-[#F9A109] rounded-r`}
            ></div>
          </div>
          <div className="relative group">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" asChild>
                  <Link href="/history">
                    <Image
                      src="/icons/reload.png"
                      alt="list"
                      width={50}
                      height={50}
                      className="w-6 h-6"
                    />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>history</p>
              </TooltipContent>
            </Tooltip>
            <div
              className={`${
                pathname.includes("history") ? "block" : "hidden"
              } group-hover:block absolute top-1/2 -translate-y-1/2 -left-1/4 -translate-x-full w-1.5 h-11 bg-[#F9A109] rounded-r`}
            ></div>
          </div>
          <div className="relative group">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" asChild>
                  <Link href="/home">
                    <Image
                      src="/icons/insert_chart.png"
                      alt="list"
                      width={50}
                      height={50}
                      className="w-6 h-6"
                    />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>statistics</p>
              </TooltipContent>
            </Tooltip>
            <div
              className={`${
                pathname.includes("statistics") ? "block" : "hidden"
              } group-hover:block absolute top-1/2 -translate-y-1/2 -left-1/4 -translate-x-full w-1.5 h-11 bg-[#F9A109] rounded-r`}
            ></div>
          </div>
        </TooltipProvider>
      </div>
      <div
        className="relative flex items-center justify-center rounded-full bg-[#F9A109] w-11 h-11 cursor-pointer"
        onClick={() => setShowCart()}
      >
        <Image
          src="/icons/cart.png"
          alt="menu"
          width={50}
          height={50}
          className="w-5 h-5"
        />
        <Badge className="absolute -top-2 -right-2 bg-[#EB5757]">3</Badge>
      </div>
    </section>
  );
}
