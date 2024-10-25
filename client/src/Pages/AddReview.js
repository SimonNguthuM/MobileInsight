import React, { useState, useEffect } from "react";
import Cookies from "js-cookie"; 

const AddReviewForm = ({ onReviewAdded }) => {
  // State variables for form fields and user data
  const [comment, setComment] = useState(""); // State for the review comment
  const [rating, setRating] = useState(""); // State for the review rating
  const [product_id, setProductId] = useState(""); // State for selected product ID
  const [products, setProducts] = useState([]); // State for product list
  const [user, setUser] = useState(null); // State for logged-in user
  const [error, setError] = useState(null); // State for error messages

  useEffect(() => {
    const fetchUser = async () => {
      const username = Cookies.get("username");
      if (username) {
        try {
          // Fetch user data from the API
          const response = await fetch(`http://127.0.0.1:5555/users`);
          const users = await response.json();
          // Find the logged-in user by username
          const loggedInUser = users.find((u) => u.username === username);
          setUser(loggedInUser); // Set user state
        } catch (error) {
          console.error("Error fetching user data:", error); // Log errors to console
        }
      }
    };

    fetchUser(); 
  }, []); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch product data from the API
        const response = await fetch("http://127.0.0.1:5555/products");
        const productsData = await response.json();
        setProducts(productsData); // Set products state with fetched data
      } catch (error) {
        console.error("Error fetching products:", error); // Log errors to console
      }
    };

    fetchProducts(); 
  }, []); 

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the user is logged in
    if (!user) {
      setError("You must be logged in to submit a review."); // Set error message
      return; // Exit function if user is not logged in
    }

    // Create a new review object
    const newReview = {
      user_id: user.id, // Use logged-in user's ID
      comment, // Review comment from state
      rating: parseInt(rating), // Convert rating to integer
      product_id: parseInt(product_id), // Convert product ID to integer
    };

    try {
      // Send the new review to the API
      const response = await fetch(`http://127.0.0.1:5555/reviews`, {
        method: "POST", // Set HTTP method to POST
        headers: {
          "Content-Type": "application/json", // Set content type to JSON
        },
        body: JSON.stringify(newReview), // Convert review object to JSON string
      });

      // Check if the response is not okay (e.g., error from the server)
      if (!response.ok) {
        throw new Error("Failed to add review");
      }

      const data = await response.json(); 
      console.log("New review added:", data);

      onReviewAdded(data); 

      // Reset form fields and error state
      setComment("");
      setRating("");
      setProductId("");
      setError(null);
    } catch (error) {
      console.error("Error:", error); // Log errors to console
      setError("Failed to add review. Please try again."); // Set error message
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}> 
      <h3 style={styles.title}>Add Your Review</h3> 
      {error && <p style={styles.error}>{error}</p>} 
      {user ? ( // Check if user is logged in
        <>
          <div style={styles.field}> 
            <label style={styles.label}>Product:</label>
            <select
              value={product_id} 
              onChange={(e) => setProductId(e.target.value)} 
              required 
              style={styles.select}
            >
              <option value="" disabled>Select a phone</option> 
              {products.map((product) => ( 
                <option key={product.id} value={product.id}>
                  {product.name} - {product.processor} (${product.price})
                </option>
              ))}
            </select>
          </div>
          <div style={styles.field}> 
            <label style={styles.label}>Comment:</label>
            <textarea
              value={comment} 
              onChange={(e) => setComment(e.target.value)} 
              required 
              style={styles.textarea}
            />
          </div>
          <div style={styles.field}> 
            <label style={styles.label}>Rating:</label>
            <input
              type="number" 
              value={rating}
              onChange={(e) => setRating(e.target.value)} 
              min="1" 
              max="5" 
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>Submit Review</button> 
        </>
      ) : (
        <p>Please <a href="/login" style={styles.link}>log in</a> to add a review.</p>
      )}
    </form>
  );
};

// Styles for the form and its elements
const styles = {
  form: {
    maxWidth: "500px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#f9fbfd",
    border: "1px solid #e0e6ed",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
  },
  title: {
    color: "#0077cc",
    fontSize: "1.5em",
    textAlign: "center",
    marginBottom: "20px",
  },
  error: {
    color: "red",
    textAlign: "center",
  },
  field: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "5px",
  },
  select: {
    width: "100%",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ced4da",
  },
  textarea: {
    width: "100%",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ced4da",
    minHeight: "80px",
  },
  input: {
    width: "100%",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ced4da",
  },
  button: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    backgroundColor: "#0077cc",
    color: "#fff",
    fontSize: "1em",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  link: {
    color: "#0077cc",
    textDecoration: "underline",
  },
};

export default AddReviewForm;
