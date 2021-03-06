/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
// Query how this is done here re: prop types as not namned function
/* eslint-disable react/display-name */
import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import Modal from "./Modal";

const limitedString = (string, limit) => `${string.substring(0, limit)}`;

export default (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const selectionArray = props.selections;
  const options = [];

  // eslint-disable-next-line react/destructuring-assignment
  selectionArray.map((selection) =>
    options.push({
      option: selection.title
        ? limitedString(selection.title, 15)
        : limitedString(selection.name, 15),
    })
  );

  const [mustSpin, setMustSpin] = useState(false);
  const [programmeNumber, setProgrammeNumber] = useState(0);
  const [visibility, setVisibility] = useState(false);

  const handleSpinClick = () => {
    setVisibility(false);
    const newProgrammeNumber = Math.floor(Math.random() * options.length);
    setProgrammeNumber(newProgrammeNumber);
    setMustSpin(true);
  };

  return (
    <>
      <div className="wheel">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={programmeNumber}
          data={options}
          onStopSpinning={() => {
            setMustSpin(false);
            setVisibility(true);
          }}
          backgroundColors={["#1D1D1D"]}
          textColors={["#a5d6a7", "#ef9e9a"]}
          outerBorderColor="#4CAF50"
          innerBorderColor="#FFD700"
          innerBorderWidth="2"
          outerBorderWidth="2"
          radiusLineColor="#f44336"
          radiusLineWidth="0.5"
          textDistance="60"
          innerRadius="5"
        />
      </div>
      <button className="spin-button" type="button" onClick={handleSpinClick}>
        SPIN
      </button>
      {/* This should really be conditionally rendered here */}
      <Modal
        programmeNumber={options[programmeNumber].option}
        image={props.selections[programmeNumber].poster_path}
        visibility={visibility}
        name={
          props.selections[programmeNumber].title
            ? props.selections[programmeNumber].title
            : props.selections[programmeNumber].name
        }
      />
    </>
  );
};
