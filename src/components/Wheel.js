/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import Modal from "./Modal";

export default (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const testArray = props.selections;
  const options = [];

  // eslint-disable-next-line react/destructuring-assignment
  testArray.map(
    (selection) =>
      options.push({
        option: selection.title ? selection.title : selection.name,
      }),
    console.log(options),
    console.log(testArray)
  );

  // const options = [
  //   // eslint-disable-next-line react/destructuring-assignment
  //   { option: "Proframme 0" },
  //   { option: "Programme 1" },
  //   { option: "Programme 2" },
  //   { option: "Programme 3" },
  //   { option: "Programme 4" },
  //   { option: "Programme 5" },
  // ];

  const [mustSpin, setMustSpin] = useState(false);
  const [programmeNumber, setProgrammeNumber] = useState(0);
  const [visibility, setVisibility] = useState(false);

  const handleSpinClick = () => {
    setVisibility(false);
    const newProgrammeNumber = Math.floor(Math.random() * options.length);
    setProgrammeNumber(newProgrammeNumber);
    setMustSpin(true);
    console.log(props.selections[0].original_title);
  };

  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={programmeNumber}
        data={options}
        onStopSpinning={() => {
          setMustSpin(false);
          setVisibility(true);
        }}
        backgroundColors={["#a5d6a7", "#ef9e9a"]}
        textColors={["#121212"]}
      />
      <button type="button" onClick={handleSpinClick}>
        SPIN
      </button>
      {/* This should really be conditionally rendered here */}
      <Modal
        programmeNumber={options[programmeNumber].option}
        visibility={visibility}
      />
    </>
  );
};
