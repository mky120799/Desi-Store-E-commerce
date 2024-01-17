import React from 'react'
import NavBar from '../features/navbar/NavBar'
import ProductList from '../features/product-list/components/PoductList'

const HomePage = () => {
  return (
    <>
    <NavBar>
        <ProductList></ProductList>
    </NavBar>
    
    </>
  )
}

export default HomePage