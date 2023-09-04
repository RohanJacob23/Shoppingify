import React from "react";
import { ProgressYellow } from "@/components/ui/progressYellow";
import { ProgressBlue } from "@/components/ui/progressBlue";

export default function page() {
  return (
    <section className="px-3 md:px-20 py-9 w-screen max-w-5xl md:mr-96">
      <div className="flex font-medium w-full space-x-16">
        {/* left section */}
        <div className="w-full">
          <h1 className="text-lg md:text-2xl mb-10">Top Items</h1>
          <div className="space-y-7">
            <div>
              <div className="flex justify-between text-sm">
                <p>Banana</p>
                <p>12%</p>
              </div>
              <ProgressYellow className="bg-[#E0E0E0]" value={12} />
            </div>
            <div>
              <div className="flex justify-between text-sm">
                <p>Rice</p>
                <p>10%</p>
              </div>
              <ProgressYellow className="bg-[#E0E0E0]" value={10} />
            </div>
            <div>
              <div className="flex justify-between text-sm">
                <p>Chicken</p>
                <p>8%</p>
              </div>
              <ProgressYellow className="bg-[#E0E0E0]" value={8} />
            </div>
          </div>
        </div>

        {/* right section */}
        <div className="w-full">
          <h1 className="text-lg md:text-2xl mb-10">Top Categories</h1>
          <div className="space-y-7">
            <div>
              <div className="flex justify-between text-sm">
                <p>Fruit and Vegetables</p>
                <p>23%</p>
              </div>
              <ProgressBlue className="bg-[#E0E0E0]" value={23} />
            </div>
            <div>
              <div className="flex justify-between text-sm">
                <p>Meat and fish</p>
                <p>14%</p>
              </div>
              <ProgressBlue className="bg-[#E0E0E0]" value={14} />
            </div>
            <div>
              <div className="flex justify-between text-sm">
                <p>Pets</p>
                <p>11%</p>
              </div>
              <ProgressBlue className="bg-[#E0E0E0]" value={11} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
