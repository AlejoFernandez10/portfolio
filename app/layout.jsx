import './globals.css'
import Navbar from '../components/Navbar'

import ThemeContext from './context/ThemeContext'
import Footer from '@/components/Footer'
export const metadata = {
  title: 'Alejo Fernandez',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      </head>
      <body >
      
        
        <ThemeContext>

          <Navbar />
          {children}
        
         <Footer />
        </ThemeContext>
        </body>
    </html>
  )
}
