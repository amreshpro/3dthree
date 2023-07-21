import { Providers } from '@/redux/Providers'
import './globals.css'
import Navbar from './pages/Navbar'




export const metadata = {
  title: 'amreshpro',
  description: 'A 3d portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

<head>
         
          <link rel="shortcut icon" href="/favicon.png" />
        </head>

      <body>

     <Providers>
      <Navbar/>
        {children}
      </Providers>   
     
     
      </body>
    </html>
  )
}
