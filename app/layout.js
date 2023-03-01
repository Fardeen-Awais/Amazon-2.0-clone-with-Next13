import Providers from "./providers"
import './globals.css';
import Store from "./provider";

export default function RootLayout({ children }) { // #0008
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>

        <Store>
          {children}
        </Store>
        
        </Providers>
        </body>
    </html>
  )
}
