import Store from "@/app/provider"
import Providers from "@/app/providers"
import '../app/globals.css'
import Header from "@/components/header"

function MyApp({ Component, pageProps }) {
  return (
    <>
     <Providers><Store><Header/><Component {...pageProps}/></Store></Providers>  
    </>
  )
}

export default MyApp