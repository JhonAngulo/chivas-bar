import Image from 'next/image'
import pageUnder from '../assets/images/pageUnder.png'

const PageUnderConstruction = () => {
  return (
    <div className='page_under'>
      <figure  className='page_under--img'>
        <Image src={pageUnder} alt="página en construcción" />
      </figure>
      <h2 className='page_under--text'>
        página en construcción
      </h2>
    </div>
  )
}

export default PageUnderConstruction
