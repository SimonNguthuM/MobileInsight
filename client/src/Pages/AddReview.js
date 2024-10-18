import React, { useState } from 'react';

const AddReviewForm = ({ productId, onReviewAdded }) => {
  const [user_id, setUserId]=useState('')
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newReview = {
      user_id:parseInt(user_id),
      comment,
      rating: parseInt(rating),
      product_id: productId, 
    };

    try {
      const response = await fetch('http://127.0.0.1:5555/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newReview),
      });

      if (!response.ok) {
        throw new Error('Failed to add review');
      }

      const data = await response.json();
      console.log('New review added:', data);

      // Call the callback to update the review list with the new review
      onReviewAdded(data);

      // Clear form inputs
      setComment('');
      setRating('');
      setError(null);
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to add review. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Your Review</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label>userId:</label>
        <textarea
          value={user_id}
          onChange={(e) => setUserId(e.target.value)}
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
    </form>
  );
};

export default AddReviewForm;
