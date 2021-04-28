/* eslint-disable react/prop-types */
import React from "react";

// Proptypes ?
// Move this conditional rendering up one level to Component Render

function Modal(props) {
  const { visibility, programmeNumber } = props;

  return (
    <div>
      <h1>{visibility ? `You have selected ${programmeNumber}` : null}</h1>
    </div>
  );
}

export default Modal;