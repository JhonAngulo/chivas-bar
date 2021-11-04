import Head from 'next/head'
import productsBeers from "../data/productsBeers.json"
import productsLiqueurs from "../data/productsLiqueurs.json"
import productsDrinks from "../data/productsDrinks.json"

export default function Home() {
  return (
    <>
      <Head>
        <title>Chiva's Bar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='products_container'>
        <div>
          <h2 className='products_container--header'>Cervezas</h2>
          {
            productsBeers.map( product => (
              <>
                <div className='products_container--body'>
                  <p className='product--item product--item-name'>{product.productName}</p>
                  <p className='product--item product--item-price'>{`$ ${product.price.toLocaleString()}`}</p>        
                </div>
                <div className='product--divider'></div>
              </>
            ))
          }
        </div>
        <div>
          <h2 className='products_container--header'>Licores</h2>
          {
            productsLiqueurs.map( product => (
              <>
                <div className='products_container--body'>
                  <p className='product--item product--item-name'>{product.productName}</p>
                  <p className='product--item product--item-price'>{`$ ${product.price.toLocaleString()}`}</p>        
                </div>
               <div className='product--divider'></div>
              </>
            ))
          }
        </div>
        <div>
          <h2 className='products_container--header'>Bebidas</h2>
          {
            productsDrinks.map( product => (
              <>
                <div className='products_container--body'>
                  <p className='product--item product--item-name'>{product.productName}</p>
                  <p className='product--item product--item-price'>{`$ ${product.price.toLocaleString()}`}</p>        
                </div>
               <div className='product--divider'></div>
              </>
            ))
          }
        </div>
      
      </div>
    </>
  )
}
