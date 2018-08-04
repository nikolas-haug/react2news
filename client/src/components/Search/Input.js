import React from "react";

const Input = (props) => {
  return(
    // <div>
    //   <h5>Input</h5>
    //   <input onChange={props.handleInputChange} type="text" className="form-control" value={props.search}></input>
    // </div>

    <div>
      <div className="form-group">
        <label htmlFor="search">Seach Term</label>
        {/* <input type="text" className="form-control" id="search" placeholder="search" /> */}
        <input
            type="text"
            value={props.search}
            className="form-control"
            id="search"
            placeholder="search"
            onChange={props.handleInputChange}
            required
        />
      </div>
      <div className="form-group">
          <label htmlFor="start">Start Date</label>
          {/* <input type="text" className="form-control" id="start" placeholder="start" /> */}
          <input
              type="date"
              value={props.start}
              className="form-control"
              id="start"
              placeholder="start date"
              onChange={props.handleInputChange}
              required
          />
      </div>
      <div className="form-group">
          <label htmlFor="end">End Date</label>
          {/* <input type="text" className="form-control" id="end" placeholder="search" /> */}
          <input
              type="date"
              value={props.end}
              className="form-control"
              id="end"
              placeholder="end date"
              onChange={props.handleInputChange}
              required
          />
      </div>
    </div>
  )
};

export default Input;
