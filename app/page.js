import Header from '@/components/header'
import Banner from '@/components/banner'
import ProductFeed from '@/components/productFeed'

// const poppins = Poppins({ weight: '400', subsets: ['latin']  })
// const anton = Anton({ weight: '400', subsets: ['latin']  })
async function getProducts(){
  const product = await fetch('https://fakestoreapi.com/products') // #0002
            .then(res=>res.json())
  return product;
}

export default async  function Home() {
  const products = await getProducts() //#0003
  return (
    <>
    {/* Header */}
   <Header/>
    {/* Main */}
    <main className='max-w-screen-2xl mx-auto'>
     {/* Banner */}
     <Banner/>
     {/* Product */}
     <ProductFeed products={products}/>
    </main>
    {/* footer */}
    </>
  )
};




