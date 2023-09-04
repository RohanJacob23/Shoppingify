import React from "react";

export default function page() {
  return (
    <section className="px-3 md:px-20 py-9 w-screen max-w-5xl md:mr-96">
      <h1 className="text-xl md:text-3xl font-bold">Shopping history</h1>

      <div className="space-y-7 font-medium mt-10">
        <p className="text-xs mb-4">August 2020</p>
        <div className="smallCards flex py-5 px-6 bg-white rounded-xl">
          <h1 className="text-base">Grocery List</h1>
        </div>
        <div className="smallCards flex py-5 px-6 bg-white rounded-xl">
          <h1 className="text-base">Eero&apos;s farewell party</h1>
        </div>
      </div>

      <div className="space-y-7 font-medium mt-10">
        <p className="text-xs mb-4">July 2020</p>
        <div className="smallCards flex py-5 px-6 bg-white rounded-xl">
          <h1 className="text-base">Grocery List</h1>
        </div>
        <div className="smallCards flex py-5 px-6 bg-white rounded-xl">
          <h1 className="text-base">Grocery List</h1>
        </div>
        <div className="smallCards flex py-5 px-6 bg-white rounded-xl">
          <h1 className="text-base">Grocery List</h1>
        </div>
      </div>
    </section>
  );
}
