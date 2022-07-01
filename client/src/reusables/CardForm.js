import React from "react";

import {
  Form,
  Select,
  DateInput,
  BatchInput,
  Button
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
    <Form onSubmit={handleForm}>
      <Select value={dose} onChange={(event) => setDose(event.target.value)}>
        {Object.keys(options).map((dose) => {
          return <option key={dose} value={dose} disabled={options[dose]}>{dose}</option>
        })}
      </Select>
      <DateInput
        type="date"
        value={date}
        min={setMinimumDate()}
        onChange={((event) => setDate(event.target.value))} />
      <BatchInput
        type="text"
        value={batchNumber}
        placeholder="Optional batchnumber"
        onChange={(event) => setBatchNumber(event.target.value)} />
      <Button type="submit">Add Dose</Button>
    </Form>
  );
};

export default CardForm;