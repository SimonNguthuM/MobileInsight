// AddReviewForm.js
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const AddReviewForm = ({ onReviewAdded }) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");
  const [product_id, setProductId] = useState("");
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null); // Track logged-in user info

  // Fetch logged-in user's data using the stored cookie
  useEffect(() => {
    const fetchUser = async () => {
      const username = Cookies.get("username");
      if (username) {
        try {
          const response = await fetch(`http://127.0.0.1:5555/users`);
          const users = await response.json();

          const loggedInUser = users.find((u) => u.username === username);
          setUser(loggedInUser);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in to submit a review.");
      return;
    }

    const newReview = {
      user_id: user.id, // Use logged-in user's ID
      comment,
      rating: parseInt(rating),
      product_id: parseInt(product_id),
    };

    try {
      const response = await fetch(`http://127.0.0.1:5555/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      });

      if (!response.ok) {
        throw new Error("Failed to add review");
      }

      const data = await response.json();
      console.log("New review added:", data);

      // Call the callback to update the review list with the new review
      onReviewAdded(data);

      // Clear form inputs
      setComment("");
      setRating("");
      setError(null);
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to add review. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Your Review</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {user ? (
        <>
          <div>
            <label>Product ID:</label>
            <input
              type="number"
              value={product_id}
              onChange={(e) => setProductId(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Comment:</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Rating:</label>
            <input
              type="number"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              min="1"
              max="5"
              required
            />
          </div>
          <button type="submit">Submit Review</button>
        </>
      ) : (
        <p>Please <a href="/login">log in</a> to add a review.</p>
      )}
    </form>
  );
};

export default AddReviewForm;
