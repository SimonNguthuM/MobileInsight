// Home.js
import React, { useEffect, useState } from "react";
import PhoneCard from "./PhoneCard";
import Navbar from "./Navbar";
import Header from "./Header";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import UserList from "./userList";
import AddReviewForm from "./AddReview";

function Home() {
  const [pageOne, setPageOne] = useState([]);
  const [userList, setUserList] = useState([]);
  const [newReview, setNewReview] = useState({});

  useEffect(() => {
    fetch("http://127.0.0.1:5555/products")
      .then((r) => r.json())
      .then((products) => setPageOne(products));
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/users")
      .then((r) => r.json())
      .then((users) => setUserList(users));
  }, []);

  const handleReviewAdded = (oneReview) => {
    setNewReview((prevState) => {
      const updatedReviews = prevState.reviews
        ? [...prevState.reviews, oneReview]
        : [oneReview];
      return { ...prevState, reviews: updatedReviews };
    });
  };

  return (
    <div style={{ backgroundColor: "#f8f9fa" }}>
      <Header />
      <h3 className="p-3">SMART PHONES</h3>
      <PhoneCard pageOne={pageOne} />
      <p className="p-2">
        Would you like to add a device?
        <Link to={"/newphone"}>
          <em>click here</em>
        </Link>
      </p>
      <p><strong>Our Best Customers</strong></p>
      <UserList userList={userList} />
      <AddReviewForm onReviewAdded={handleReviewAdded} />
      <Footer />
    </div>
  );
}

export default Home;
