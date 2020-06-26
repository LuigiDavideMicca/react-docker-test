import React from "react";

const Header = ({ plant, tyres }) => {
  if (!plant && !tyres) {
    return (
      <h5 className="my-5">
        Insert the Plant of destination and the number of tyres you wish to
        order
      </h5>
    );
  }
  return (
    <div className="my-5">
      <div className="card w-50 mx-auto">
        <div className="card-header">Your Order Details</div>
        <div className="card-body">
          <h5 className="card-title">Confirm Your Order Blow:</h5>
          <p className="card-text">
            You Ordered n.{tyres} tyres for your plant {plant}
          </p>
          <button className="btn btn-primary">CONFIRM YOUR ORDER</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
