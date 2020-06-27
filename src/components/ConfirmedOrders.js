import React from 'react';

const ConfirmedOrders = ({ tyres, plant }) => {
   if (tyres && plant) {
      return (
         <div className="my-5 confirmed-order">
            <p className="h3 my-5">Order Confirmed!</p>
            <p className="h5">Order Details:</p>
            <button type="button" className="h4 btn btn-primary my-5 w-75">
               <b>PLANT: {plant}</b> <span> </span>
               <span className="badge badge-light">
                  <i> TYRES: {tyres}</i>
               </span>
            </button>
         </div>
      );
   }
   return <div></div>;
};

export default ConfirmedOrders;
