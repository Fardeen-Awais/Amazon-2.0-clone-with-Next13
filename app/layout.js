import Providers from "./providers"
import './globals.css';

export default function RootLayout({ children }) { // #0008
  return (
    <html lang="en">
      <head />
      <body><Providers>{children}</Providers></body>
    </html>
  )
}
