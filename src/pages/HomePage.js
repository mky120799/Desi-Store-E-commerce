import React from 'react'
import NavBar from '../features/navbar/NavBar'
import ProductList from '../features/product/components/PoductList'

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