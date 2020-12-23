import Categories from '../components/Categories/Categories'
import Products from '../components/Products/Products'
import { useState } from 'react'

export default function index({products}) {

  const [filteredproducts , setfilteredproducts] = useState(products)

  const [activcat , setactivcat] = useState('')

  const currentCategory = (item) => {
        setfilteredproducts(products.filter(el => el.category.includes(item)))
        setactivcat(item);
  }



  return (
    <div className='container border text-light p-3'>
        <div className="row">
          <div className="col-lg-4">
            <Categories
            activcat={activcat}
            currentCategory={currentCategory}
            category={products}/>
          </div>
          <div className="col-lg-8">
            <Products
            activcat={activcat}
            filteredproducts={filteredproducts}/>
          </div>
        </div>
    </div>
  )
}


export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/product')
  const data = await res.json()

  return {
    props: { products: data.data }
  }
}



