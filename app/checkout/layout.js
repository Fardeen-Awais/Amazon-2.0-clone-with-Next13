import Providers from "../providers"
import '../globals.css';
import Header from "@/components/header";

export default function RootLayout({ children }) { // #0008
  return (
    <html lang="en">
      <head />
      <body><Providers><Header/>{children}</Providers></body>
    </html>
  )
}
