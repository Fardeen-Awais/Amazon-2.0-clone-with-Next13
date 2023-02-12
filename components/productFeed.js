import React from 'react'
import { faker } from '@faker-js/faker';


function ProductFeed() {
  let products = [] // Empty array

  for (let i = 0; i < 10; i++) {
    let name  = faker.commerce.productName()
    products.push(name) //* By using for loop we can push multiple products to the array and then further past this array
  }
  console.log(products)

  return (
    <div>
      {products.map((product)=>(
        <div>
         <p>{product}</p>
          <img src="https://source.unsplash.com/160x160/?ecommerce" alt=""/>
         </div>
      ))}
    </div>
  )
}

export default ProductFeed