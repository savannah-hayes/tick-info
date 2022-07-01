import React from "react";

import styled from "styled-components";
import { devices } from "../styled-components/globalStyles";

const CardForm = (props) => {
  const { dose, date, batchNumber, setDose, setDate, setBatchNumber, handleForm, dosesArray } = props;

  const currentDose = dosesArray.map(dose => dose.dose);

  const trackedDoseOne = currentDose.includes("Dose 1");
  const trackedDoseTwo = currentDose.includes("Dose 2");
  const trackedDoseThree = currentDose.includes("Dose 3");
  const trackedDoseFour = currentDose.includes("Dose 4");

  const setMinDate = () => {
    let minDate = ""
    const today = new Date();

    switch (dose) {
      case "Dose 1": 
      case "Dose 2":
        const thirtyDaysAgo = today.setDate(today.getDate() - 30);
        minDate = new Date(thirtyDaysAgo).toISOString().split('T')[0]
        break;
      case "Dose 3":
        const fiveMonthsAgo = today.setDate(today.getDate() - 152);
        minDate = new Date(fiveMonthsAgo).toISOString().split('T')[0]
        break;
      case "Dose 4":
        const threeYearsAgo = today.setDate(today.getDate() - 1095);
        minDate = new Date(threeYearsAgo).toISOString().split('T')[0]
        break;
      default:
        break;
    };
    
    return minDate;
  };

  return (
    <Form onSubmit={handleForm}>
      <Select value={dose} onChange={(event) => setDose(event.target.value)}>
        <option>Choose dose...</option>
        <option
          value="Dose 1"
          disabled={trackedDoseOne}>
            Dose 1
        </option>
        <option
          value="Dose 2" 
          disabled={trackedDoseOne && !trackedDoseTwo ? false : true}>
            Dose 2
        </option>
        <option 
          value="Dose 3" 
          disabled={trackedDoseOne && trackedDoseTwo && !trackedDoseThree ? false : true}>
            Dose 3
        </option>
        <option 
          value="Dose 4" 
          disabled={trackedDoseOne && trackedDoseTwo && trackedDoseThree && !trackedDoseFour ? false : true}>
            Dose 4
        </option>
      </Select>
      <DateInput
        type="date"
        value={date}
        min={setMinDate()}
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

const Inputs = styled.input`
  margin: 5px;
  font-family: 'Source Serif Pro';

  @media ${devices.desktop}{
    &:hover {
      cursor: pointer;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Select = styled.select`
  margin: 5px;
  font-family: 'Source Serif Pro';

  @media ${devices.desktop}{
    &:hover {
      cursor: pointer;
    }
  }
`;

const DateInput = styled(Inputs)`
`;

const BatchInput = styled(Inputs)`
`;

const Button = styled.button`
  font-family: 'Source Serif Pro';
  margin: 5px;
  background-color: lightblue;
  color: #175C4C;
  border: 1px solid #175C4C;
  padding: 5px;
  border-radius: 2px;
  font-weight: 700;

  @media ${devices.desktop}{
    &:hover {
      cursor: pointer;
      background-color: #8ec2d1;
    }
  }
`;