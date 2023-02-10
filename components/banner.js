import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="relative">
      <div className="flex items-center justify-center"> {/* We are making image normal instead of carousel 😗 */}
        <Image 
          src="https://links.papareact.com/gi1"
          alt="Picture of the author"
          width={1000}
          height={600}
        />
      </div>
    </div>
  );
}

export default Banner;
