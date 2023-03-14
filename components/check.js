import React from 'react'
import Image from "next/image";
import { useSelector } from 'react-redux'
import { selectItems } from '@/slices/basketSlice'

function Check() {
    const items = useSelector(selectItems);
  return (
    <div>
         <div className="lg:flex max-w-screen-2xl mx-auto ">
      {/* left: */}
      <div className="flex-grow m-5 shadow-sm">
        <Image src="https://links.papareact.com/ikj" alt="Banner" width={500} height={500} />
        <div className="flex flex-col space-y-2 p-5">
          <h2>Your Shopping Basket</h2>
          <p>
            {items.length == 0 ? "Your Amazon Basket is Empty": "Shopping Basket"}
        </p>
        </div>
      </div>{/* Right:  */}
    </div>
    </div>
  )
}

export default Check