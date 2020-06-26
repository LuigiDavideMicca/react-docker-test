import React from "react";

const Form = ({
  plant,
  tyres,
  onPlantChange,
  onTyreChange,
  onFormSubmitTyresPlant,
}) => {
  return (
    <form className="my-5">
      <div className="form-group">
        <label>Plant</label>
        <input
          onChange={onPlantChange}
          value={plant}
          type="text"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Number of tyres</label>
        <input
          onChange={onTyreChange}
          value={tyres}
          type="number"
          className="form-control"
        />
      </div>
    </form>
  );
};
export default Form;
