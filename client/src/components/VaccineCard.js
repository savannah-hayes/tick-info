import React, { useState, useEffect } from "react";

import { addDose, handleDoseDelete, startCounter } from "../actions/cardActions";

import CardForm from "../reusables/CardForm";
import Header from "../reusables/Header";
import waste from "../assets/waste.png";
import Counter from "../components/partials/Counter"

import { Spinner } from "../styled-components/mainStyles";
import {
  CardContainer,
  CardWrapper,
  CardHeader,
  UserDetailsContainer,
  UserDetailsWrapper,
  UserName,
  NameLabel,
  TableContainer,
  TableWrapper,
  TableItem,
  IconWrapper,
  TrashIcon
} from "../styled-components/vaccineCardStyles";

const VaccineCard = ({ dosesArray, setDosesArray, setTrackDose }) => {
  const [dose, setDose] = useState("");
  const [date, setDate] = useState("");
  const [batchNumber, setBatchNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [countDownYear, setCountDownYear] = useState(null);
  const [countDownMonth, setCountDownMonth] = useState(null);
  const [countDownDay, setCountDownDay] = useState(null);
  const [countDownHour, setCountDownHour] = useState(null);
  const [countDownMinute, setCountDownMinute] = useState(null);
  const [countDownSecond, setCountDownSecond] = useState(null);

  const lastDoseIndex = dosesArray?.length - 1;
  const latestDoseDate = dosesArray[lastDoseIndex]?.date;
  const doseIndexes = [0, 1, 2, 3];

  const firstName = JSON.parse(localStorage.getItem("user"))?.firstName;
  const lastName = JSON.parse(localStorage.getItem("user"))?.lastName;

  const onDoseSubmit = () => {
    if (dose !== "" && date !== "") {
      addDose(dose, date, batchNumber, setDose, setDate, setBatchNumber, setErrorMessage, setTrackDose, setLoading);
      setErrorMessage("");
    } else {
      setErrorMessage("Dose and date is required");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      startCounter(
        setCountDownYear,
        setCountDownMonth,
        setCountDownDay,
        setCountDownHour,
        setCountDownMinute,
        setCountDownSecond,
        dosesArray,
        latestDoseDate
      )
    }, 1000);
    return () => clearInterval(interval);
  }, [lastDoseIndex, latestDoseDate, dosesArray]);

  return loading
    ? <Spinner></Spinner>
    : <>
      <Header />
      <CardContainer>
        <Counter
          year={countDownYear}
          month={countDownMonth}
          day={countDownDay}
          hour={countDownHour}
          minute={countDownMinute}
          second={countDownSecond}
          dosesArray={dosesArray}
        />
        <CardWrapper>
          <CardHeader>Vaccination Record Card</CardHeader>
          <UserDetailsContainer>
            <UserDetailsWrapper>
              <UserName>{firstName}</UserName>
              <hr />
              <NameLabel>First Name</NameLabel>
            </UserDetailsWrapper>
            <UserDetailsWrapper>
              <UserName>{lastName}</UserName>
              <hr />
              <NameLabel>Last Name</NameLabel>
            </UserDetailsWrapper>
          </UserDetailsContainer>
          {errorMessage && <p>{errorMessage}</p>}
          <TableWrapper>
            <TableItem label>Dose</TableItem>
            <TableItem label>Date</TableItem>
            <TableItem label>Batch Number</TableItem>
            <TableItem label>Next Dose</TableItem>
          </TableWrapper>
          {doseIndexes.map((doseIndex) => {
            return (
              <>
                {dosesArray[doseIndex]?.dose === `Dose ${doseIndex + 1}`
                  ?
                  <TableContainer>
                    <TableWrapper key={dosesArray[doseIndex]?._id}>
                      <TableItem>{dosesArray[doseIndex]?.dose}</TableItem>
                      <TableItem>{dosesArray[doseIndex]?.date}</TableItem>
                      <TableItem>{dosesArray[doseIndex]?.batchNumber}</TableItem>
                      <TableItem>{dosesArray[doseIndex]?.nextDose}</TableItem>
                    </TableWrapper>
                    <IconWrapper data-hover={`Remove Dose ${doseIndex + 1}`} onClick={() => {
                      handleDoseDelete(dosesArray[doseIndex], dosesArray, setDosesArray, setTrackDose, setErrorMessage)
                    }}><TrashIcon src={waste}></TrashIcon></IconWrapper>
                  </TableContainer>
                  :
                  < CardForm
                    dose={dose}
                    date={date}
                    batchNumber={batchNumber}
                    setDose={setDose}
                    setDate={setDate}
                    setBatchNumber={setBatchNumber}
                    handleForm={onDoseSubmit}
                    dosesArray={dosesArray}
                  />
                }
              </>
            )
          })}
        </CardWrapper>
      </CardContainer>
    </>
};

export default VaccineCard;