import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Navigation } from '../src/app/components/Navigation'
import { Footer } from '../src/app/components/Footer'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'], 
  display: 'swap', 
  variable: '--font-poppins' 
})

export const metadata: Metadata = {
  title: 'Apropos Drive',
  description: 'Eco-friendly EV solutions company',
  keywords: ['EV', 'Electric Vehicles', 'Electric Bikes', 'Eco Vehicles'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} bg-[#F8FAFB]`}>
        <Navigation />
        {children}

        <Footer />
      </body>
    </html>
  )
}
