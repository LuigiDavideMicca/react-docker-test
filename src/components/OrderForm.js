import React from 'react';

const OrderForm = ({ plant, tyres, onPlantChange, onTyreChange }) => {
   return (
      <form className="my-5">
         <div className="form-group">
            <label>Plant</label>
            <input
               aria-label="plant-input"
               onChange={onPlantChange}
               value={plant}
               type="text"
               className="form-control"
            />
         </div>
         <div className="form-group">
            <label>Number of tyres</label>
            <input
               aria-label="tyre-input"
               onChange={onTyreChange}
               value={tyres}
               type="number"
               className="form-control"
            />
         </div>
      </form>
   );
};
export default OrderForm;
