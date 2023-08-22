import CartSlider from "@/components/CartSlider";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { MagnifyingGlassIcon, PlusIcon } from "@radix-ui/react-icons";

export default function Home() {
  const tempItems = [
    {
      item: "Fruits and Vegetables",
      itemList: [
        { item: "Avacado" },
        { item: "Banana" },
        { item: "Bunch of carrots" },
        { item: "Pre-cooked corn 450kg" },
        { item: "Watermelon" },
        { item: "Mandarin Nadorcott" },
        { item: "Piele De Sapo Melon" },
      ],
    },
    {
      item: "Meat and Fish",
      itemList: [
        { item: "Chicken 1kg" },
        { item: "Chicken leg box" },
        { item: "Salmon 1kg" },
        { item: "Pork fillet 450g" },
      ],
    },
    {
      item: "Beverages",
      itemList: [
        { item: "Avacado" },
        { item: "Banana" },
        { item: "Bunch of carrots" },
        { item: "Pre-cooked corn 450kg" },
        { item: "Watermelon" },
        { item: "Mandarin Nadorcott" },
        { item: "Piele De Sapo Melon" },
      ],
    },
  ];
  return (
    <section className="py-9 w-screen md:mr-96">
      {/* main section */}
      <div className="px-3 md:px-20">
        {/* uppser section */}
        <div className="hidden md:flex items-start space-x-14">
          <h1 className="text-3xl font-medium text-[#34333A] w-[28rem]">
            <span className="font-bold text-[#F9A109]">Shoppingify </span>
            allows you take your shopping list wherever you go
          </h1>

          <div className="relative">
            <Input
              type="text"
              placeholder="Search item"
              className="bg-white w-[17.25rem] h-12 rounded-xl pl-14"
            />
            <MagnifyingGlassIcon className="absolute top-1/2 -translate-y-1/2 left-3 w-7 h-7" />
          </div>
        </div>

        {/* items section */}
        <div className="font-medium">
          {tempItems.map((item, index) => (
            <div key={index}>
              <h1 className="text-lg mt-7 mb-5 md:mb-4 md:mt-14">
                {item.item}
              </h1>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 text-sm md:text-base gap-x-2 gap-y-6 md:gap-x-5 md:gap-y-12">
                {/* items list in small cards */}
                {item.itemList.map((list, index) => (
                  <div
                    key={index}
                    className="smallCards h-fit flex items-center justify-between bg-white rounded-xl w-32 md:w-44 p-4 space-x-1.5"
                  >
                    <p className="break-words">{list.item}</p>
                    <PlusIcon className="shrink-0 w-5 h-5 opacity-30 hover:cursor-pointer hover:opacity-100" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
