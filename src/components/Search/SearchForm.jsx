import React from "react";

function SearchForm(props) {
  return (
    <form>
     <div className="form-group">
        <label className="d-flex justify-content-center mt-3" htmlFor="exampleFormControlSelect1">Load employees that are:</label>
        <div className="row">
          <div className="col-sm-4"></div>
          <select className="col-sm-4 form-control mt-3" 
            id="search" 
            onChange={props.handleInputChange}
            value={props.search}
            name="search">
              <option>All</option>
            <option>male</option>
            <option>female</option>
          </select>
          <button onClick={props.handleFormSubmit} className="btn btn-primary d-flex justify-content-center mt-3">
          Search
        </button>
          <div className="col-sm-4"></div>
        </div>
      </div>
   </form>
  );
}

export default SearchForm;
