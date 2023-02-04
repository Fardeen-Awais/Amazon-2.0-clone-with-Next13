import Header from '@/components/header'
import Banner from '@/components/banner'


// const poppins = Poppins({ weight: '400', subsets: ['latin']  })
// const anton = Anton({ weight: '400', subsets: ['latin']  })

export default function Home() {
  return (
    <>
    {/* Header */}
   <Header/>

    {/* Main */}
    <main className='max-w-screen-2xl mx-auto'>
     {/* Banner */}
     <Banner/>
     {/* Product */}

    </main>
    
    {/* footer */}
    </>
  )
}