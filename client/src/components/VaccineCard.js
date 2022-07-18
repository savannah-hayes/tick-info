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
              <UserName>{lastName}</UserName>
              <hr />
              <NameLabel>Last Name</NameLabel>
            </UserDetailsWrapper>
            <UserDetailsWrapper>
              <UserName>{firstName}</UserName>
              <hr />
              <NameLabel>First Name</NameLabel>
            </UserDetailsWrapper>
          </UserDetailsContainer>
          {errorMessage && <p>{errorMessage}</p>}
          <TableWrapper>
            <TableItem label>Dose</TableItem>
            <TableItem label>Date</TableItem>
            <TableItem label>Batch Number</TableItem>
            <TableItem label>Next Dose</TableItem>
          </TableWrapper>
          {dosesArray[0]?.dose === "Dose 1"
            ?
            <TableContainer>
              <TableWrapper key={dosesArray[0]?._id}>
                <TableItem>{dosesArray[0]?.dose}</TableItem>
                <TableItem>{dosesArray[0]?.date}</TableItem>
              <TableItem>{dosesArray[0]?.batchNumber}</TableItem>
                <TableItem>{dosesArray[0]?.nextDose}</TableItem>
              </TableWrapper>
              <IconWrapper data-hover={"Remove Dose 1"} onClick={() => {
                handleDoseDelete(dosesArray[1], dosesArray, setDosesArray, setTrackDose, setErrorMessage)
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

          {dosesArray[1]?.dose === "Dose 2"
            ?
            <TableContainer>
              <TableWrapper key={dosesArray[1]?._id}>
                <TableItem>{dosesArray[1]?.dose}</TableItem>
                <TableItem>{dosesArray[1]?.date}</TableItem>
              <TableItem >{dosesArray[1]?.batchNumber}</TableItem>
                <TableItem>{dosesArray[1]?.nextDose}</TableItem>
              </TableWrapper>
              <IconWrapper data-hover={"Remove Dose 2"} onClick={() => {
                handleDoseDelete(dosesArray[1], dosesArray, setDosesArray, setTrackDose, setErrorMessage)
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
          {dosesArray[2]?.dose === "Dose 3"
            ?
            <TableContainer>
              <TableWrapper key={dosesArray[2]?._id}>
                <TableItem>{dosesArray[2]?.dose}</TableItem>
                <TableItem>{dosesArray[2]?.date}</TableItem>
              <TableItem >{dosesArray[2]?.batchNumber}</TableItem>
                <TableItem>{dosesArray[2]?.nextDose}</TableItem>
              </TableWrapper>
              <IconWrapper data-hover={"Remove Dose 3"} onClick={() => {
                handleDoseDelete(dosesArray[1], dosesArray, setDosesArray, setTrackDose, setErrorMessage)
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
          {dosesArray[3]?.dose === "Dose 4"
            ?
            <TableContainer>
              <TableWrapper key={dosesArray[3]?._id}>
                <TableItem>{dosesArray[3]?.dose}</TableItem>
                <TableItem>{dosesArray[3]?.date}</TableItem>
              <TableItem >{dosesArray[3]?.batchNumber}</TableItem>
                <TableItem>{dosesArray[3]?.nextDose}</TableItem>
              </TableWrapper>
              <IconWrapper data-hover={"Remove Dose 4"} onClick={() => {
                handleDoseDelete(dosesArray[1], dosesArray, setDosesArray, setTrackDose, setErrorMessage)
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
        </CardWrapper>
      </CardContainer>
    </>
};

export default VaccineCard;

// import React, { useState, useEffect } from "react";

// import { addDose, handleDoseDelete, startCounter } from "../actions/cardActions";

// import CardForm from "../reusables/CardForm";
// import Header from "../reusables/Header";
// import waste from "../assets/waste.png";
// import Counter from "../components/partials/Counter"

// import { Spinner } from "../styled-components/mainStyles";
// import {
//   SubHeading,
//   CardContainer,
//   CardWrapper,
//   CardHeader,
//   UserDetailsContainer,
//   UserDetailsWrapper,
//   UserName,
//   NameLabel,
//   Table,
//   Label,
//   IconWrapper,
//   TrashIcon,
//   p,
//   DoseContainer,
// } from "../styled-components/vaccineCardStyles";

// const VaccineCard = ({ dosesArray, setDosesArray, setTrackDose }) => {
//   const [dose, setDose] = useState("");
//   const [date, setDate] = useState("");
//   const [batchNumber, setBatchNumber] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [countDownYear, setCountDownYear] = useState(null);
//   const [countDownMonth, setCountDownMonth] = useState(null);
//   const [countDownDay, setCountDownDay] = useState(null);
//   const [countDownHour, setCountDownHour] = useState(null);
//   const [countDownMinute, setCountDownMinute] = useState(null);
//   const [countDownSecond, setCountDownSecond] = useState(null);

//   const lastDoseIndex = dosesArray?.length - 1;
//   const latestDoseDate = dosesArray[lastDoseIndex]?.date;

//   const firstName = JSON.parse(localStorage.getItem("user"))?.firstName;
//   const lastName = JSON.parse(localStorage.getItem("user"))?.lastName;

//   const onDoseSubmit = (event) => {
//     event.preventDefault();

//     if (dose !== "" && date !== "") {
//       addDose(dose, date, batchNumber, setDose, setDate, setBatchNumber, setErrorMessage, setTrackDose, setLoading);
//       setErrorMessage("");
//     } else {
//       setErrorMessage("Dose and date is required");
//     }
//   };


//   useEffect(() => {
//     const interval = setInterval(() => {
//       startCounter(
//         setCountDownYear,
//         setCountDownMonth,
//         setCountDownDay,
//         setCountDownHour,
//         setCountDownMinute,
//         setCountDownSecond,
//         dosesArray,
//         latestDoseDate
//       )
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [lastDoseIndex, latestDoseDate, dosesArray]);

//   return loading
//     ? <Spinner></Spinner>
//     : <>
//       <Header />
//       <CardContainer>
//         <Counter
//           year={countDownYear}
//           month={countDownMonth}
//           day={countDownDay}
//           hour={countDownHour}
//           minute={countDownMinute}
//           second={countDownSecond}
//           dosesArray={dosesArray}
//         />
//         <SubHeading>Add Dose</SubHeading>
//         <CardForm
//           dose={dose}
//           date={date}
//           batchNumber={batchNumber}
//           setDose={setDose}
//           setDate={setDate}
//           setBatchNumber={setBatchNumber}
//           handleForm={onDoseSubmit}
//           dosesArray={dosesArray}
//         />
//         {errorMessage && <p>{errorMessage}</p>}
//         <CardWrapper>
//           <CardHeader>Vaccination Record Card</CardHeader>
//           <UserDetailsContainer>
//             <UserDetailsWrapper>
//               <UserName>{lastName}</UserName>
//               <hr />
//               <NameLabel>Last Name</NameLabel>
//             </UserDetailsWrapper>
//             <UserDetailsWrapper>
//               <UserName>{firstName}</UserName>
//               <hr />
//               <NameLabel>First Name</NameLabel>
//             </UserDetailsWrapper>
//           </UserDetailsContainer>
//           <Table>
//             <tbody>
//               <Label>
//                 <p>Vaccine</p>
//                 <p>Date</p>
//                 <p hide>
//                   Name/ Manufacturer
//                   <br />
//                   Lot Number
//                 </p>
//                 <th>Next Dose</th>
//               </Label>
//               {dosesArray?.map((dose) => {
//                 return <DoseContainer key={dose._id}>
//                   <p>{dose.dose}</p>
//                   <p>{dose.date}</p>
//                   <p hide>{dose?.batchNumber}</p>
//                   <th>{dose.nextDose}</th>
//                   <IconWrapper data-hover={`Remove ${dose.dose}`} onClick={() => {
//                     handleDoseDelete(dose, dosesArray, setDosesArray, setTrackDose, setErrorMessage)
//                   }}><TrashIcon src={waste}></TrashIcon></IconWrapper>
//                 </DoseContainer>
//               })}
//             </tbody>
//           </Table>
//         </CardWrapper>
//       </CardContainer>
//     </>
// };

// export default VaccineCard;