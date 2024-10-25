import React, { useState } from 'react';

const ReviewList = ({ reviews }) => {
  const [editingReviewId, setEditingReviewId] = useState(null); // Track which review is being edited
  const [updatedComment, setUpdatedComment] = useState('');
  const [updatedRating, setUpdatedRating] = useState();

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

      setEditingReviewId(null); // Exit the edit mode
      window.location.reload();  // Reload to reflect changes (optional: can manage state to avoid reload)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async (reviewId) => {
    try {
      const response = await fetch(`http://127.0.0.1:5555/reviews/${reviewId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Error deleting the review');
      }

      console.log('Deleted review:', reviewId);
      window.location.reload(); // Reload to reflect changes
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (!reviews || reviews.length === 0) {
    return <p>No reviews available for this product.</p>;
  }

  const containerStyle = {
    padding: '20px', // Padding around the list
    backgroundColor: '#f8f9fa', // Light background
    borderRadius: '8px', // Rounded corners
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
    maxWidth: '600px', // Maximum width of the review list
    margin: '0 auto', // Center the list
  };

  const titleStyle = {
    textAlign: 'center', // Center title
    color: '#007BFF', // Blue title
    marginBottom: '20px', // Space below title
  };

  const reviewStyle = {
    border: '1px solid #ccc', // Border for each review
    borderRadius: '4px', // Rounded corners for reviews
    padding: '10px', // Padding inside each review
    marginBottom: '10px', // Space between reviews
    backgroundColor: '#fff', // White background for reviews
  };

  const buttonStyle = {
    margin: '5px', // Space around buttons
    padding: '5px 10px', // Padding for buttons
    borderRadius: '4px', // Rounded corners for buttons
    border: 'none', // No border
    backgroundColor: '#007BFF', // Blue background for buttons
    color: '#fff', // White text for buttons
    cursor: 'pointer', // Pointer cursor for buttons
  };

  const cancelButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#dc3545', // Red background for cancel button
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id} style={reviewStyle}>
            {editingReviewId === review.id ? (
              // Edit Mode
              <div>
                <textarea
                  value={updatedComment}
                  onChange={(e) => setUpdatedComment(e.target.value)}
                  style={{ width: '100%', marginBottom: '10px' }} // Full width textarea
                />
                <input
                  type="number"
                  value={updatedRating}
                  min="1"
                  max="5"
                  onChange={(e) => setUpdatedRating(e.target.value)}
                  style={{ width: '100%', marginBottom: '10px' }} // Full width input
                />
                <button onClick={() => handleSave(review.id)} style={buttonStyle}>Save</button>
                <button onClick={handleCancel} style={cancelButtonStyle}>Cancel</button>
              </div>
            ) : (
              // Display Mode
              <div>
                <strong>{review.user.username}</strong>: {review.comment} (Rating: {review.rating})
                <button onClick={() => handleEdit(review)} style={buttonStyle}>Edit</button>
                <button onClick={() => handleDelete(review.id)} style={cancelButtonStyle}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
