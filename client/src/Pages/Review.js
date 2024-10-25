import React, { useState } from 'react';

const ReviewList = ({ reviews, username }) => {
  const [editingReviewId, setEditingReviewId] = useState(null);
  const [updatedComment, setUpdatedComment] = useState('');
  const [updatedRating, setUpdatedRating] = useState('');

  const handleEdit = (review) => {
    setEditingReviewId(review.id);
    setUpdatedComment(review.comment);
    setUpdatedRating(review.rating); 
  };

  const handleCancel = () => {
    setEditingReviewId(null);
    setUpdatedComment('');
    setUpdatedRating('');
  };

  const handleSave = async (reviewId) => {
    const updatedReview = {
      comment: updatedComment,
      rating: parseInt(updatedRating, 10), 
    };

    try {
      const response = await fetch(`http://127.0.0.1:5555/reviews/${reviewId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedReview),
      });

      if (!response.ok) throw new Error('Error updating the review');

      setEditingReviewId(null);
      window.location.reload(); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async (reviewId) => {
    try {
      const response = await fetch(`http://127.0.0.1:5555/reviews/${reviewId}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Error deleting the review');

      window.location.reload();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (!reviews || reviews.length === 0) {
    return <p>No reviews available for this product.</p>;
  }

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id} style={reviewStyle}>
            {editingReviewId === review.id ? (
              <div>
                <textarea
                  value={updatedComment}
                  onChange={(e) => setUpdatedComment(e.target.value)}
                  style={{ width: '100%', marginBottom: '10px' }}
                />
                <input
                  type="number"
                  value={updatedRating}
                  min="1"
                  max="5"
                  onChange={(e) => setUpdatedRating(e.target.value)}
                  style={{ width: '100%', marginBottom: '10px' }}
                />
                <button onClick={() => handleSave(review.id)} style={buttonStyle}>Save</button>
                <button onClick={handleCancel} style={cancelButtonStyle}>Cancel</button>
              </div>
            ) : (
              <div>
                <strong>{review.user.username}</strong>: {review.comment} (Rating: {review.rating})
                {username === review.user.username && (
                  <>
                    <button onClick={() => handleEdit(review)} style={buttonStyle}>Edit</button>
                    <button onClick={() => handleDelete(review.id)} style={cancelButtonStyle}>Delete</button>
                  </>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const containerStyle = {
  padding: '20px',
  backgroundColor: '#f8f9fa',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '600px',
  margin: '0 auto',
};

const titleStyle = {
  textAlign: 'center',
  color: '#007BFF',
  marginBottom: '20px',
};

const reviewStyle = {
  border: '1px solid #ccc',
  borderRadius: '4px',
  padding: '10px',
  marginBottom: '10px',
  backgroundColor: '#fff',
};

const buttonStyle = {
  margin: '5px',
  padding: '5px 10px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#007BFF',
  color: '#fff',
  cursor: 'pointer',
};

const cancelButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#dc3545',
};

export default ReviewList;
