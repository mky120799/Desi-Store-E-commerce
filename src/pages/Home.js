import React from 'react'
import NavBar from '../features/navbar/NavBar'
import ProductList from '../features/product-list/PoductList'

const Home = () => {
  return (
    <>
    <NavBar>
        <ProductList></ProductList>
    </NavBar>
    
    </>
  )
}

export default Home