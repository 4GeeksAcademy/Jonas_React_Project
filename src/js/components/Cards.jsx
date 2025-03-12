import React from "react";

const Cards = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center g-1">
        {/* Card 1 */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
          <div className="card" style={{ minHeight: "25rem", maxWidth: "100%" }}>
            {/* Card Image */}
            <img
              src="https://via.placeholder.com/500x325"
              className="card-img-top"
              alt="Card image"
              style={{
                height: "auto",
                objectFit: "cover",
                width: "100%",
              }}
            />
            <div className="card-body">
              {/* Card Title */}
              <h5 className="card-title">Card 1</h5>
              {/* Card Description */}
              <p className="card-text">
                This is a short description of the card. It has around 15-16 words.
              </p>
            </div>
            {/* Button */}
            <div className="card-footer text-center">
              <a href="#" className="btn btn-primary" style={{ padding: "10px 20px" }}>
                Find Out More!
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
          <div className="card" style={{ minHeight: "25rem", maxWidth: "100%" }}>
            {/* Card Image */}
            <img
              src="https://via.placeholder.com/500x325"
              className="card-img-top"
              alt="Card image"
              style={{
                height: "auto",
                objectFit: "cover",
                width: "100%",
              }}
            />
            <div className="card-body">
              {/* Card Title */}
              <h5 className="card-title">Card 2</h5>
              {/* Card Description */}
              <p className="card-text">
                This is a short description of the card. It has around 15-16 words.
              </p>
            </div>
            {/* Button */}
            <div className="card-footer text-center">
              <a href="#" className="btn btn-primary" style={{ padding: "10px 20px" }}>
                Find Out More!
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
          <div className="card" style={{ minHeight: "25rem", maxWidth: "100%" }}>
            {/* Card Image */}
            <img
              src="https://via.placeholder.com/500x325"
              className="card-img-top"
              alt="Card image"
              style={{
                height: "auto",
                objectFit: "cover",
                width: "100%",
              }}
            />
            <div className="card-body">
              {/* Card Title */}
              <h5 className="card-title">Card 3</h5>
              {/* Card Description */}
              <p className="card-text">
                This is a short description of the card. It has around 15-16 words.
              </p>
            </div>
            {/* Button */}
            <div className="card-footer text-center">
              <a href="#" className="btn btn-primary" style={{ padding: "10px 20px" }}>
                Find Out More!
              </a>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2">
          <div className="card" style={{ minHeight: "25rem", maxWidth: "100%" }}>
            {/* Card Image */}
            <img
              src="https://via.placeholder.com/500x325"
              className="card-img-top"
              alt="Card image"
              style={{
                height: "auto",
                objectFit: "cover",
                width: "100%",
              }}
            />
            <div className="card-body">
              {/* Card Title */}
              <h5 className="card-title">Card 4</h5>
              {/* Card Description */}
              <p className="card-text">
                This is a short description of the card. It has around 15-16 words.
              </p>
            </div>
            {/* Button */}
            <div className="card-footer text-center">
              <a href="#" className="btn btn-primary" style={{ padding: "10px 20px" }}>
                Find Out More!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
