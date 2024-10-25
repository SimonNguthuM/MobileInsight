import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import ReviewList from "./Review";


function Specifications() {
  const [profile, setProfile] = useState({});
  const params = useParams();
  const profileId = params.id;

  // useEffect(() => {
  //   fetch(`http://127.0.0.1:5555/products/${profileId}`)
  //     .then((r) => r.json())
  //     .then((data) => setProfile(data))
  //     .catch((error) => console.error(error));
  // }, [profileId]);

  // Function to handle adding new reviews
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
    <div style={{ backgroundColor: "#f8f9fa" }}>
      <a type="button" href="/" className="btn  btn-lg">
        MobileInsight
      </a>

      <div className="card m-2" key={profile.id} style={{ width: 18 + "rem" }}>
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

      {/* Display the reviews */}
      <ReviewList reviews={profile.reviews} />
      <Footer />
    </div>
  );
}

export default Specifications;
