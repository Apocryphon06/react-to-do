import React, { useState } from "react";
import "/Users/hrithik/Desktop/react_playground/context-react/context-reactv1/src/bootstrap.min.css";
function Child(props) {
  const [name, setName] = useState([]);
  const getName = (e) => {
    setName(e.target.value);
  };

  const parentCallBackFunction = () => {
    // console.log("sending data from child component to parent App component");
    props.parentCallBack(name);
  };

  return (
    <div className="container w-50">
      <br></br>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter name"
          onChange={getName}
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <button
            onClick={parentCallBackFunction}
            className="btn btn-danger"
            type="button"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Child;
