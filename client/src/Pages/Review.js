import React, { useState } from 'react';

const ReviewList = ({ reviews }) => {
  const [editingReviewId, setEditingReviewId] = useState(null); // Track which review is being edited
  const [updatedComment, setUpdatedComment] = useState('');
  const [updatedRating, setUpdatedRating] = useState('');

  const handleEdit = (review) => {
    setEditingReviewId(review.id);  // Set the review being edited
    setUpdatedComment(review.comment);  // Pre-fill the form with the current comment
    setUpdatedRating(review.rating);  // Pre-fill the form with the current rating
  };

  const handleCancel = () => {
    setEditingReviewId(null); // Cancel the edit mode
  };

  const handleSave = async (reviewId) => {
    const updatedReview = {
      comment: updatedComment,
      rating: updatedRating,
    };

    try {
      const response = await fetch(`http://127.0.0.1:5555/reviews/${reviewId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedReview),
      });

      if (!response.ok) {
        throw new Error('Error updating the review');
      }

      const data = await response.json();
      console.log('Updated review:', data);

      // Update the reviews list locally after the patch request succeeds
      // For simplicity, reload the page or update state directly here (you can implement better state handling if needed)

      setEditingReviewId(null); // Exit the edit mode
      window.location.reload();  // Reload to reflect changes (optional: can manage state to avoid reload)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (!reviews || reviews.length === 0) {
    return <p>No reviews available for this product.</p>;
  }

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            {editingReviewId === review.id ? (
              // Edit Mode
              <div>
                <textarea
                  value={updatedComment}
                  onChange={(e) => setUpdatedComment(e.target.value)}
                />
                <input
                  type="number"
                  value={updatedRating}
                  min="1"
                  max="5"
                  onChange={(e) => setUpdatedRating(e.target.value)}
                />
                <button onClick={() => handleSave(review.id)}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
              </div>
            ) : (
              // Display Mode
              <div>
                <strong>{review.user.username}</strong>: {review.comment} (Rating: {review.rating})
                <button onClick={() => handleEdit(review)}>Edit</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
