import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function PhoneCard({ pageOne}) {
  return (
    <div>
      <div
        className="d-flex flex-wrap m-4"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        {pageOne
          // a card for each device
          .map((product) => (
            <div
              className="card m-2"
              key={product.id}
              style={{ width: 18 + "rem" }}
            >
              <p>{product.id}</p>
              <img
                src={product.image}
                style={{ width: "200px", height: "200px" }}
                className="card-img-center"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {/* link to the form to add a new device */}
                  <Link to={`/specs/${product.id}`}>{product.name}</Link>
                </h5>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default PhoneCard;
