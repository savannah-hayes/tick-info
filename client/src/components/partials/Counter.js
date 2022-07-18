import React, { useState, useEffect } from "react";

import checkBrowser from "../../actions/checkBrowser";

import {
  CountDown,
  Heading,
  CountdownContainer,
  CountdownWrapper,
  Time,
  Interval
} from "../../styled-components/vaccineCardStyles";

const Counter = ({ year, month, day, hour, minute, second, dosesArray }) => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1024);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <CountDown addTop={dosesArray.length > 0}>
      {dosesArray.length > 0 && checkBrowser !== "Safari" && isDesktop
        ?
        <Heading>Take your next dose in...</Heading>
        :
        <Heading>Take your next dose on...</Heading>
      }
      {dosesArray.length > 0 && checkBrowser !== "Safari" && isDesktop
        ?
        <CountdownContainer>
          {year > 0
            ?
            <CountdownWrapper>
              <Time>{year < 10 ? `0${year}` : year}</Time>
              <Interval>{year === 1 ? "Year" : "Years"}</Interval>
            </CountdownWrapper>
            :
            null
          }
          {month > 0
            ?
            <CountdownWrapper>
              <Time>{month < 10 ? `0${month}` : month}</Time>
              <Interval>{month === 1 ? "Month" : "Months"}</Interval>
            </CountdownWrapper>
            :
            null
          }
          {day > 0
            ?
            <CountdownWrapper>
              <Time>{day < 10 ? `0${day}` : day}</Time>
              <Interval>{day === 1 ? "Day" : "Days"}</Interval>
            </CountdownWrapper>
            :
            <CountdownWrapper>
              <Time>00</Time>
              <Interval>Days</Interval>
            </CountdownWrapper>
          }
          {hour > 0
            ?
            <CountdownWrapper>
              <Time>{hour < 10 ? `0${hour}` : hour}</Time>
              <Interval>{hour === 1 ? "Hour" : "Hours"}</Interval>
            </CountdownWrapper>
            :

            <CountdownWrapper>
              <Time>00</Time>
              <Interval>Hours</Interval>
            </CountdownWrapper>
          }
          {year && month
            ?
            null
            :
            <>
              {minute > 0
                ?
                <CountdownWrapper>
                  <Time>{minute < 10 ? `0${minute}` : minute}</Time>
                  <Interval>{minute === 1 ? "Min" : "Mins"}</Interval>
                </CountdownWrapper>
                :
                <CountdownWrapper>
                  <Time>00</Time>
                  <Interval>Mins</Interval>
                </CountdownWrapper>
              }
            </>
          }
          {month
            ?
            null
            :
            <>
              {second > 0
                ?
                <CountdownWrapper>
                  <Time>{second < 10 ? `0${second}` : second}</Time>
                  <Interval>Secs</Interval>
                </CountdownWrapper>
                :
                <CountdownWrapper>
                  <Time>00</Time>
                  <Interval>Secs</Interval>
                </CountdownWrapper>
              }
            </>
          }
        </CountdownContainer>
        :
        <p>{dosesArray[dosesArray.length - 1]?.nextDose}</p>
      }
    </CountDown>
  )
}

export default Counter;