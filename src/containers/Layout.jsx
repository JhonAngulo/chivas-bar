import Link from 'next/link'

const Layout = ({ children }) => {
  return (
    <>
      <header className='header'>
        <div>
          logo
        </div>

        <nav className='header_nav'>
        <ul className='header_nav--list'>
          <li className='header_nav--item'>
            <Link href="/">
              <a>Inicio</a>
            </Link>
          </li>
          <li className='header_nav--item'>
            <Link href="/conocenos">
              <a>Conocenos</a>
            </Link>
          </li>
          <li className='header_nav--item'>
            <Link href="/horarios">
              <a>Horarios</a>
            </Link>
          </li>
          <li className='header_nav--item'>
            <Link href="/productos">
              <a>Productos</a>
            </Link>
          </li>
        </ul>
        </nav>

      </header>
      {children}
      <footer >
        Chiva's Bar todos los derechos reservados
      </footer>
    </>
  )
}

export default Layout
