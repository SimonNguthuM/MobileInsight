import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function PhoneCard({ pageOne, search }) {
  return (
    <div className="container py-4">
      <div className="d-flex flex-wrap justify-content-center">
        {pageOne
        .filter((product)=>{
          return search === "" ? product : product.name.includes(search);
        })
        
        .map((product) => (
          <div
            className="card m-2 shadow-sm"
            key={product.id}
            style={{
              width: "12rem", // Reduced width for smaller cards
              borderRadius: "10px",
              transition: "transform 0.3s",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "160px", // Adjusted height to keep proportions
                overflow: "hidden",
              }}
            >
              <img
                src={product.image}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain", // Ensures the entire image fits without distortion
                  objectPosition: "center",
                }}
                className="card-img-top"
                alt={product.name}
              />
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">
                <Link
                  to={`/specs/${product.id}`}
                  className="text-decoration-none text-dark"
                  style={{ fontWeight: "bold" }}
                >
                  {product.name}
                </Link>
              </h5>
            </div>
            <div className="card-footer bg-white border-0 text-center">
              <Link
                to={`/specs/${product.id}`}
                className="btn btn-primary btn-sm"
              >
                View Specs
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhoneCard;
