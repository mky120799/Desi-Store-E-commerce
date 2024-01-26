import React from 'react'
import { Link } from "react-router-dom";
import NavBar from '../features/navbar/Navbar'
import ProductList from '../features/product/components/PoductList'

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