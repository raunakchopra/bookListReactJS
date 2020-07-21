import React from "react";

const Input = (props) => {
  return (
    <div className="form-group">
      <label for={props.name}>{props.name}</label>
      <input
        type="text"
        name={props.name}
        className="form-control"
        ref={props.Ref}
      />
    </div>
  );
};

export default Input;
