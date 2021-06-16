/* eslint-disable react/prop-types */
import React, { useEffect } from "react";

// Proptypes ?
// Move this conditional rendering up one level to Component Render

function Modal(props) {
  const { visibility, programmeNumber } = props;

  // Is there a better way in react of not using querySelector?
  // Investigate use ref

  useEffect(() => {
    const modalOuter = document.querySelector(".modal-outer");

    function closeModal() {
      modalOuter.classList.remove("open");
    }

    modalOuter.addEventListener("click", function (event) {
      // the ! changes this to a boolean , if it finds the .modal-inner it will be false
      const isOutside = !event.target.closest(".modal-inner");
      if (isOutside) {
        closeModal();
      }
    });
  });

  return (
    <div>
      <div className={visibility ? "modal-outer open" : "modal-outer"}>
        <div className={visibility ? "modal-inner open" : "modal-inner"}>
          <p>You have selected!!</p>
          <img
            width="600"
            height="600"
            // src={imgSrc.replace("200", "600")}
            alt={programmeNumber}
          />
          <p>{programmeNumber}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
