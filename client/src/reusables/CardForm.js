import React from "react";

import plus from "../assets/add.png"

import {
  FormContainer,
  FormWrapper,
  Select,
  DateInput,
  BatchInput,
  AddIcon
} from "styled-components/reusablesStyles";

const CardForm = (props) => {
  const { dose, date, batchNumber, setDose, setDate, setBatchNumber, handleForm, dosesArray } = props;

  const currentDose = dosesArray.map(dose => dose.dose);
  const trackDose = ((dose) => currentDose.includes(dose));

  const trackedDoseOne = trackDose("Dose 1");
  const trackedDoseTwo = trackDose("Dose 1") && !trackDose("Dose 2") ? false : true;
  const trackedDoseThree = trackDose("Dose 1") && trackDose("Dose 2") && !trackDose("Dose 3") ? false : true;
  const trackedDoseFour = trackDose("Dose 1") && trackDose("Dose 2") && trackDose("Dose 3") && !trackDose("Dose 4") ? false : true;

  const options = {
    "Choose dose...": null,
    "Dose 1": trackedDoseOne,
    "Dose 2": trackedDoseTwo,
    "Dose 3": trackedDoseThree,
    "Dose 4": trackedDoseFour
  };

  const setMinimumDate = () => {
    let minimumDate = ""
    const today = new Date();

    const intervalsAgo = (interval) => today.setDate(today.getDate() - interval);
    const minimumDateBasedOnDose = (interval) => new Date(interval).toISOString().split('T')[0]

    switch (dose) {
      case "Dose 1":
        minimumDate = minimumDateBasedOnDose(intervalsAgo(30));
        break;
      case "Dose 2":
        minimumDate = minimumDateBasedOnDose(intervalsAgo(30));
        break;
      case "Dose 3":
        minimumDate = minimumDateBasedOnDose(intervalsAgo(152));
        break;
      case "Dose 4":
        minimumDate = minimumDateBasedOnDose(intervalsAgo(1095));
        break;
      default:
        break;
    };

    return minimumDate;
  };

  return (
    <FormContainer>
      <FormWrapper>
      <div>
      <Select value={dose} onChange={(event) => setDose(event.target.value)}>
        {Object.keys(options).map((dose) => {
          return <option key={dose} value={dose} disabled={options[dose]}>{dose}</option>
        })}
      </Select>
      </div>
      <div>
      <DateInput
        type="date"
        value={date}
        min={setMinimumDate()}
        onChange={((event) => setDate(event.target.value))} />
      </div>
      <div>
      <BatchInput
        type="text"
        value={batchNumber}
        placeholder="Optional..."
        onChange={(event) => setBatchNumber(event.target.value)} />
      </div>
      <div></div>
      </FormWrapper>
      <div>
      <AddIcon role="button" onClick={handleForm} type="submit" src={plus}></AddIcon>
      </div>
    </FormContainer>
  );
};

export default CardForm;