import React from "react";

const Form = ({
  plant,
  tyres,
  onPlantChange,
  onTyreChange,
  onFormSubmitTyresPlant,
}) => {
  return (
    <form onSubmit={onFormSubmitTyresPlant} className="my-5">
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
      <button type="submit" className="btn btn-primary my-3 p-3">
        Submit
      </button>
    </form>
  );
};
export default Form;
