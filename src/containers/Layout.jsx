import Link from 'next/link'
import Image from 'next/image'
import logo_bar from '../assets/images/logo_bar.png'

const Layout = ({ children }) => {

  let year = new Date()
  year = year.getFullYear()
  return (
    <>
      <header className='header'>
        
        <Image src={logo_bar} height='80' width='100' alt='Logo Chivas Bar' className='header_img'/>
        

        <nav className='header_nav'>
        <ul className='header_nav--list'>
          <li>
            <Link href="/">
              <a className='header_nav--item'>Inicio</a>
            </Link>
          </li>
          <li>
            <Link href="/conocenos">
              <a className='header_nav--item'>Conocenos</a>
            </Link>
          </li>
          <li>
            <Link href="/horarios">
              <a className='header_nav--item'>Horarios</a>
            </Link>
          </li>
          <li>
            <Link href="/productos">
              <a className='header_nav--item'>Productos</a>
            </Link>
          </li>
        </ul>
        </nav>

      </header>
        
      <main className='container'>
        {children}
      </main>
      
      <footer className='footer'>
        <p>{`Chiva's Bar - Copyright © ${year}.`}</p>
      </footer>
    </>
  )
}

export default Layout
