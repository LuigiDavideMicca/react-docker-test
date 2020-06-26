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
      {plant}
      {tyres}
    </div>
  );
};

export default Header;
