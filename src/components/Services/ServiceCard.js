import React from "react";

const ServiceCard = ({ title, img, text }) => {
  return (
    <div className="card bg-base-100 shadow-xl border">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{text}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
