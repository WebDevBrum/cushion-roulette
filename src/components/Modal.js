import React, { useEffect } from "react";
import PropTypes from "prop-types";

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

Modal.propTypes = {
  visibility: PropTypes.bool,
  programmeNumber: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
};

export default Modal;
