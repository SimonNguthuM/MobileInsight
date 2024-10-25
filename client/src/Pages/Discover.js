import React, { useEffect, useState } from "react";
import PhoneCard from "./PhoneCard";
import { Link } from "react-router-dom";
import AddReviewForm from "./AddReview";
import "../styles/discover.css";

function Discover() {
  const [pageOne, setPageOne] = useState([]);
  const [newReview, setNewReview] = useState({});

  useEffect(() => {
    fetch("http://127.0.0.1:5555/products")
      .then((r) => r.json())
      .then((products) => setPageOne(products));
  }, []);

  const handleReviewAdded = (oneReview) => {
    setNewReview((prevState) => ({
      ...prevState,
      reviews: prevState.reviews ? [...prevState.reviews, oneReview] : [oneReview],
    }));
  };

  return (
    <div className="discover-container">

      <section id="About" className="about-section">
      <p> Welcome to <strong>MobileInsight</strong>, your premier platform for insightful reviews on the latest smartphones. 
      We provide expert insights on devices from top brands,
       helping you stay informed about mobile technology. </p>
      </section>
      
      <h3 className="section-title">Explore Smart Phones</h3>
      <div className="phone-cards-container">
        <PhoneCard pageOne={pageOne} />
      </div>
      
      <p className="add-device">
        Would you like to add a device? 
        <Link to={"/newphone"} className="link">
          <em>click here</em>
        </Link>
      </p>
      
      <AddReviewForm onReviewAdded={handleReviewAdded} />
    </div>
  );
}

export default Discover;
