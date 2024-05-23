// Categories.jsx
import React from 'react'
import { Link } from'react-router-dom'
import { categories } from '../../data'
import './Categories.scss'

const Categories = () => {
    return (
      <div className="categories">
        <h1>Explore Top Categories</h1>
        <p>
        Discover our extensive range of vacation rentals, meticulously curated to cater to every type of traveler. 
        Whether you're seeking a cozy retreat or a luxurious getaway, immerse yourself in the vibrant local culture, 
        indulge in the comforts of a home away from home, and create unforgettable memories in your dream destination. 
        Your perfect vacation rental is just a notch away start your journey with us today!
        </p>
  
        <div className="categories_list">
          {categories?.slice(1, 7).map((category, index) => (
            <Link to={`/properties/category/${category.label}`} key={index}>
              <div className="category" key={index}>
                <img src={category.img} alt={category.label} />
                <div className="overlay"></div>
                <div className="category_text">
                  <div className="category_text_icon">{category.icon}</div>
                  <p>{category.label}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  };
  
  export default Categories;