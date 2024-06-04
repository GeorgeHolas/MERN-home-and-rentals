// Listings.jsx
import { useEffect, useState, useCallback } from "react";
import { categories } from "../../data";
import ListingCard from "../ListingCard/ListingCard";
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { setListings } from "../../redux/state";
import "./Listings.scss";

const Listings = () => {
  const dispatch = useDispatch();
  const [loading, setIsLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const listings = useSelector((state) => state.listings);

  const getFeedListings = useCallback(async () => {
    try {
      const response = await fetch(
        selectedCategory !== "All"
          ? `http://localhost:3001/properties?category=${selectedCategory}`
          : "http://localhost:3001/properties",
        {
          method: "GET",
        }
      );
  
      const data = await response.json();
      dispatch(setListings({ listings: data }));
      setIsLoading(false);
    } catch (err) {
      console.log("Fetch listings failed", err.message);
    }
  }, [selectedCategory, dispatch]);
  
  useEffect(() => {
    getFeedListings();
  }, [getFeedListings]);

  return (
    <>
      <div className="category-list">
        {categories?.map((category, index) => (
          <div
            className={`category ${
              category.label === selectedCategory ? "selected" : ""
            }`}
            key={index}
            onClick={() => setSelectedCategory(category.label)}
          >
            <div className="category_icon">{category.icon}</div>
            <p>{category.label}</p>
          </div>
        ))}
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="listings">
          {listings.map(
            (
              {
                _id,
                creator,
                listingPhotoPaths,
                city,
                province,
                country,
                category,
                type,
                price,
                booking = false,
              },
              index
            ) => (
              <ListingCard
                key={index}
                listingId={_id}
                creator={creator}
                listingPhotoPaths={listingPhotoPaths}
                city={city}
                province={province}
                country={country}
                category={category}
                type={type}
                price={price}
                booking={booking}
              />
            )
          )}
        </div>
      )}
    </>
  );
};

export default Listings;
