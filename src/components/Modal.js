/* eslint-disable react/prop-types */
import React, { useEffect } from "react";

// Proptypes ?
// Move this conditional rendering up one level to Component Render

function Modal(props) {
  const { visibility, programmeNumber, image, name } = props;

  useEffect(() => {
    // Is there a better way in react of not using querySelector?
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

    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    });
  });

  return (
    <div>
      <div className={visibility ? "modal-outer open" : "modal-outer"}>
        <div className={visibility ? "modal-inner open" : "modal-inner"}>
          <h2>YOU HAVE SELECTED</h2>
          <img
            width="400"
            height="400"
            src={`https:image.tmdb.org/t/p/w185_and_h278_bestv2/${image}`}
            alt={programmeNumber}
          />
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
