import SmallCards from "@/components/SmallCards";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { tempItems } from "@/temp";

export default function Home() {
  return (
    <section className="py-9 w-screen max-w-5xl md:mr-96">
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
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 text-sm md:text-base gap-x-2 gap-y-6 md:gap-x-5 md:gap-y-12 w-fit">
                {/* items list in small cards */}
                {item.itemList.map((list, index) => (
                  <SmallCards key={index} item={list} category={item.item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
