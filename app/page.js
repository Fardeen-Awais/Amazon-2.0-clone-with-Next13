import Header from "@/components/header";
import Banner from "@/components/banner";
import ProductFeed from "@/components/productFeed";

async function getProducts() {
  const product = await fetch("https://fakestoreapi.com/products") // #0002
    .then((res) => res.json());
  return product;
}

export default async function Home() {
  const products = await getProducts(); //#0003
  return (
    <>
      {/* Main */}
      <main className="max-w-screen-2xl mx-auto bg-gray-200">
        {/* Header */}
        <Header />
        {/* Part 01 : Banner */}
        <Banner />
        {/* Part 02 : Product */}
        <ProductFeed products={products} /> 
      </main>
      {/* footer */}
    </>
  );
}
