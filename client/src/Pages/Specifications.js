import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import Footer from "./Footer";
import ReviewList from "./Review";

function Specifications() {
  const [profile, setProfile] = useState({});
  const params = useParams();
  const profileId = params.id;
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    fetch(`http://127.0.0.1:5555/products/${profileId}`)
      .then((r) => r.json())
      .then((data) => setProfile(data))
      .catch((error) => console.error(error));
  }, [profileId]);

  const handleReviewAdded = (newReview) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      reviews: [...prevProfile.reviews, newReview],
    }));
  };

  if (!profile.name) {
    return <h1>Loading...</h1>;
  }

  return (
    <div style={{ backgroundColor: "#f8f9fa", padding: "20px" }}>
      {/* Back Arrow */}
      <div onClick={() => navigate("/discover")} style={styles.backArrow}>
        ← Back to Discover
      </div>

      <div className="specifications-container" style={styles.container}>
        <div className="card m-2" key={profile.id} style={styles.card}>
          <img
            src={profile.image}
            style={{ width: "200px", height: "200px" }}
            className="card-img-center"
            alt={profile.name}
          />
          <div className="card-body">
            <h5 className="card-title">
              <strong>Name</strong>: {profile.name}
            </h5>
            <p className="card-text">
              <strong>Processor</strong>: {profile.processor}
            </p>
            <p className="card-text">
              <strong>Price</strong>: {profile.price}
            </p>
          </div>
        </div>

        {/* ReviewList Component */}
        <ReviewList reviews={profile.reviews} />
      </div>
      
      <Footer />
    </div>
  );
}

const styles = {
  backArrow: {
    cursor: "pointer",
    color: "#007bff",
    fontSize: "16px",
    marginBottom: "10px",
    display: "inline-block",
  },
  container: {
    display: "flex",
    gap: "20px",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  card: {
    width: "18rem",
    flex: "1",
  },
};

export default Specifications;
