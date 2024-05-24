// HomePage.jsx
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Slide from '../../components/Slide/Slide' 
import Categories from '../../components/Categories/Categories'
import Listings from '../../components/Listings/Listings'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Slide />
      <Categories />
      <Listings />
    </>
  )
}

export default HomePage