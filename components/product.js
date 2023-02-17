import React from "react";
import Image from "next/legacy/image";

function Product({ id, title, rating, description, price, category, image }) {
  return (
    <article className="relative flex flex-col m-5 bg-white p-10">
      <p className="absolute top-2 right-2 text-sm text-gray-500">{category}</p>
      <div className="flex justify-center items-center">
        <Image src={image} alt={title} width={200} height={200} />
      </div>
      <section>
        <h2>{title}</h2>
        <p className="text-xs font-normal py-2">Rating: {rating.rate}/5</p>
        <p className="my-4 text-sm max-h-16 overflow-hidden">{description}</p>
        <p className="mb-2 absolute right-3 bottom-1">{price} PKR</p>
        <button className="text-xl text-gray-800 font-semibold hover:text-amazon_blue absolute bottom-4">
          Add to Cart
        </button>
      </section>
    </article>
  );
}

export default Product;
