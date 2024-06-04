// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Loader from './components/Loader/Loader';
import React, { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const CreateListing = lazy(() => import("./pages/CreateListing/CreateListing"));
const ListingDetails = lazy(() => import("./pages/ListingDetails/ListingDetails"));
const TripList = lazy(() => import("./pages/TripList/TripList"));
const WishList = lazy(() => import("./pages/WishList/WishList"));
const PropertyList = lazy(() => import("./pages/PropertyList/PropertyList"));
const ReservationList = lazy(() => import("./pages/ReservationList/ReservationList"));
const CategoryPage = lazy(() => import("./pages/CategoryPage/CategoryPage"));
const SearchPage = lazy(() => import("./pages/SearchPage/SearchPage"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create-listing" element={<CreateListing />} />
            <Route path="/properties/:listingId" element={<ListingDetails />} />
            <Route
              path="/properties/category/:category"
              element={<CategoryPage />}
            />
            <Route path="/properties/search/:search" element={<SearchPage />} />
            <Route path="/:userId/trips" element={<TripList />} />
            <Route path="/:userId/wishList" element={<WishList />} />
            <Route path="/:userId/properties" element={<PropertyList />} />
            <Route path="/:userId/reservations" element={<ReservationList />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;