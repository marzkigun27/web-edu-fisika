import './globals.css'
import Container from '../components/Container'
import NavBar from '@/components/Navbar'


export const metadata = {
  title: 'Web Edu Fisika',
  description: 'Apa aja deh',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        <Container>
          {children}
        </Container>
      </body>
    </html>
  )
}