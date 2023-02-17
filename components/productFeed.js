"use client";
import React from "react";
import Product from "./product";

function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52">{/* Applying Grid #0006 */}

      {/* First 4 products */}
      {products.slice(0, 4).map(
        // Slice it while mapping #0004
        ({ id, title, rating, description, price, category, image }) => (
          <Product
            key={id} //* key is required
            id={id}
            title={title}
            rating={rating}
            description={description}
            price={price}
            category={category}
            image={image}
          />
        )
      )}
      {/* Banner Image */}
      <img
        className="md:col-span-full"
        src="https://links.papareact.com/dyz"
        alt="cover"
      />

      {/* Single Product */}
      <div className="md:col-span-2">
        {products.slice(4, 5).map(
          // Slice it while mapping #0004
          ({ id, title, rating, description, price, category, image }) => (
            <Product
              key={id} //* key is required
              id={id}
              title={title}
              rating={rating}
              description={description}
              price={price}
              category={category}
              image={image}
            />
          )
        )}
      </div>

      {/* All the remaining products */}
      
      {products.slice(5, products.length).map(
        // Slice it while mapping
        ({ id, title, rating, description, price, category, image }) => (
          <Product
            key={id} //* key is required
            id={id}
            title={title}
            rating={rating}
            description={description}
            price={price}
            category={category}
            image={image}
          />
        )
      )}
    </div>
  );
}

export default ProductFeed;
