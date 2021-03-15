/* eslint-disable react/display-name */
import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import Modal from "./Modal";

const options = [
  { option: "Programme 0" },
  { option: "Programme 1" },
  { option: "Programme 2" },
  { option: "Programme 3" },
  { option: "Programme 4" },
  { option: "Programme 5" },
];

export default () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [programmeNumber, setProgrammeNumber] = useState(0);
  const [visibility, setVisibility] = useState(false);

  const handleSpinClick = () => {
    const newProgrammeNumber = Math.floor(Math.random() * options.length);
    setProgrammeNumber(newProgrammeNumber);
    setMustSpin(true);
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
      <Modal programmeNumber={programmeNumber} visibility={visibility} />
    </>
  );
};
