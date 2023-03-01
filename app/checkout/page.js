import React from "react";
import Image from "next/image";

function checkout() {
  return (
    <main className="lg:flex max-w-screen-2xl mx-auto ">
      {/* left: */}
      <div className="flex-grow m-5 shadow-sm">
        <Image src="https://links.papareact.com/ikj" alt="Banner" width={500} height={500} />
        <div className="flex flex-col space-y-2 p-5">
          <h2>Your Shopping Basket</h2>
        </div>
      </div>
      {/* Right:  */}
    </main>
  );
}
export default checkout;
