import { useState, useEffect } from "react";
import "./App.css";
import { Wheel } from "./components/Wheel";
import classNames from "classnames";
import BgImage from "./assets/bg.jpg";
import spinSound from "./assets/spin_sound.mp3";
import noMoreBets from "./assets/No_more_bets.mp3";
import placeYourBets from "./assets/place-your-bets.mp3";

import W0 from "./assets/winnings/0.mp3";
import W1 from "./assets/winnings/1.mp3";
import W2 from "./assets/winnings/2.mp3";
import W3 from "./assets/winnings/3.mp3";
import W4 from "./assets/winnings/4.mp3";
import W5 from "./assets/winnings/5.mp3";
import W6 from "./assets/winnings/6.mp3";
import W7 from "./assets/winnings/7.mp3";
import W8 from "./assets/winnings/8.mp3";
import W9 from "./assets/winnings/9.mp3";
import W10 from "./assets/winnings/10.mp3";
import W11 from "./assets/winnings/11.mp3";
import W12 from "./assets/winnings/12.mp3";
import W13 from "./assets/winnings/13.mp3";
import W14 from "./assets/winnings/14.mp3";
import W15 from "./assets/winnings/15.mp3";
import W16 from "./assets/winnings/16.mp3";
import W17 from "./assets/winnings/17.mp3";
import W18 from "./assets/winnings/18.mp3";
import W19 from "./assets/winnings/19.mp3";
import W20 from "./assets/winnings/20.mp3";
import W21 from "./assets/winnings/21.mp3";
import W22 from "./assets/winnings/22.mp3";
import W23 from "./assets/winnings/23.mp3";
import W24 from "./assets/winnings/24.mp3";
import W26 from "./assets/winnings/26.mp3";
import W27 from "./assets/winnings/27.mp3";
import W28 from "./assets/winnings/28.mp3";
import W29 from "./assets/winnings/29.mp3";
import W30 from "./assets/winnings/30.mp3";
import W31 from "./assets/winnings/31.mp3";
import W32 from "./assets/winnings/32.mp3";
import W33 from "./assets/winnings/33.mp3";
import W34 from "./assets/winnings/34.mp3";
import W35 from "./assets/winnings/35.mp3";
import W36 from "./assets/winnings/36.mp3";
import W37 from "./assets/winnings/37.mp3";

import useSound from "use-sound";

const backgroundColors = ["#000000", "#FF0000"];
const textColors = ["#ffffff"];
const outerBorderColor = "#C5B358";
const outerBorderWidth = 6;
const innerBorderColor = "#C5B358";
const innerBorderWidth = 8;
const innerRadius = 77;
const radiusLineColor = "#eeeeee";
const radiusLineWidth = 1;
const fontSize = 20;
const textDistance = 89;
const spinDuration = 1.3;

const data = [
  { option: "7", style: { backgroundColor: "#FF0000" }, sound: W7 },
  { option: "34", style: { backgroundColor: "#000000" }, sound: W34 },
  { option: "16", style: { backgroundColor: "#FF0000" }, sound: W16 },
  { option: "11", style: { backgroundColor: "#000000" }, sound: W11 },
  { option: "18", style: { backgroundColor: "#FF0000" }, sound: W18 },
  { option: "22", style: { backgroundColor: "#000000" }, sound: W22 },
  { option: "12", style: { backgroundColor: "#FF0000" }, sound: W12 },
  { option: "36", style: { backgroundColor: "#000000" }, sound: W36 },
  { option: "31", style: { backgroundColor: "#FF0000" }, sound: W31 },
  { option: "27", style: { backgroundColor: "#000000" }, sound: W27 },
  { option: "12", style: { backgroundColor: "#FF0000" }, sound: W12 },
  { option: "30", style: { backgroundColor: "#000000" }, sound: W30 },
  { option: "28", style: { backgroundColor: "#FF0000" }, sound: W28 },
  { option: "8", style: { backgroundColor: "#000000" }, sound: W8 },
  { option: "23", style: { backgroundColor: "#FF0000" }, sound: W23 },
  { option: "10", style: { backgroundColor: "#000000" }, sound: W10 },
  { option: "5", style: { backgroundColor: "#FF0000" }, sound: W5 },
  { option: "24", style: { backgroundColor: "#000000" }, sound: W24 },
  { option: "1", style: { backgroundColor: "#FF0000" }, sound: W1 },
  { option: "20", style: { backgroundColor: "#000000" }, sound: W20 },
  { option: "9", style: { backgroundColor: "#FF0000" }, sound: W9 },
  { option: "13", style: { backgroundColor: "#000000" }, sound: W13 },
  { option: "14", style: { backgroundColor: "#FF0000" }, sound: W14 },
  { option: "29", style: { backgroundColor: "#000000" }, sound: W29 },
  { option: "26", style: { backgroundColor: "#FF0000" }, sound: W26 },
  { option: "0", style: { backgroundColor: "green" }, sound: W0 },
  { option: "35", style: { backgroundColor: "#FF0000" }, sound: W35 },
  { option: "32", style: { backgroundColor: "#000000" }, sound: W32 },
  { option: "3", style: { backgroundColor: "#FF0000" }, sound: W3 },
  { option: "15", style: { backgroundColor: "#000000" }, sound: W15 },
  { option: "19", style: { backgroundColor: "#FF0000" }, sound: W19 },
  { option: "4", style: { backgroundColor: "#000000" }, sound: W4 },
  { option: "21", style: { backgroundColor: "#FF0000" }, sound: W21 },
  { option: "2", style: { backgroundColor: "#000000" }, sound: W2 },
  { option: "37", style: { backgroundColor: "#FF0000" }, sound: W37 },
  { option: "17", style: { backgroundColor: "#000000" }, sound: W17 },
  { option: "33", style: { backgroundColor: "#FF0000" }, sound: W33 },
  { option: "6", style: { backgroundColor: "#000000" }, sound: W6 },
];

function App() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [winningNumbers, setWinningNumbers] = useState([]);
  const [playSpinSound] = useSound(spinSound, {
    playbackRate: 12 / (11 * spinDuration),
    volume: 1.2,
  });
  const [playNoMoreBets] = useSound(noMoreBets, { volume: 1.5 });
  const [warningPlayed, setWarningPlayed] = useState(false);

  const handleSpinClick = () => {
    if (!warningPlayed) {
      let audio = new Audio(placeYourBets);
      audio.play();
      setWarningPlayed(true);
      return;
    }
    playSpinSound();
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
    setWarningPlayed(false);
  };

  useEffect(() => {
    if (mustSpin) {
      setTimeout(function () {
        playNoMoreBets();
      }, 5000);
    }
  }, [mustSpin]);

  useEffect(() => {
    if (winningNumbers.length > 0) {
      localStorage.setItem("winningNumbers", JSON.stringify(winningNumbers));
    }
  }, [winningNumbers]);

  useEffect(() => {
    const winningNumbers = JSON.parse(localStorage.getItem("winningNumbers"));
    if (winningNumbers) {
      setWinningNumbers(winningNumbers);
    }
  }, []);

  const hotNumbers = () => {
    let numbers = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0,
      12: 0,
      13: 0,
      14: 0,
      15: 0,
      16: 0,
      17: 0,
      18: 0,
      19: 0,
      20: 0,
      21: 0,
      22: 0,
      23: 0,
      24: 0,
      26: 0,
      27: 0,
      28: 0,
      29: 0,
      30: 0,
      31: 0,
      32: 0,
      33: 0,
      34: 0,
      35: 0,
      36: 0,
      37: 0,
    };
    winningNumbers.forEach((number) => {
      let nr = number.option;
      numbers[nr] += 1;
    });
    const newMap = Object.entries(numbers);
    const sortedMap = newMap.sort((item1, item2) => item2[1] - item1[1]);
    const top5Map = sortedMap.slice(0, 5);
    return top5Map;
  };

  const coldNumbers = () => {
    let numbers = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0,
      12: 0,
      13: 0,
      14: 0,
      15: 0,
      16: 0,
      17: 0,
      18: 0,
      19: 0,
      20: 0,
      21: 0,
      22: 0,
      23: 0,
      24: 0,
      26: 0,
      27: 0,
      28: 0,
      29: 0,
      30: 0,
      31: 0,
      32: 0,
      33: 0,
      34: 0,
      35: 0,
      36: 0,
      37: 0,
    };
    winningNumbers.forEach((number) => {
      let nr = number.option;
      numbers[nr] += 1;
    });
    const newMap = Object.entries(numbers);
    const sortedMap = newMap.sort((item1, item2) => item2[1] - item1[1]);
    const top5Map = sortedMap.slice(-5);
    return top5Map;
  };

  const getBorderColor = (number) => {
    let result;
    data.forEach((nr) => {
      if (parseInt(nr.option) === parseInt(number)) {
        result = nr.style.backgroundColor;
      }
    });
    return result;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundImage: `url(${BgImage})`,
      }}
      className="App h-full"
    >
      <div
        className={classNames("absolute left-4 top-4 h-10 w-10  rounded-full", {
          "bg-green-400": warningPlayed,
          "bg-red-400": !warningPlayed,
        })}
      ></div>
      <div className="App flex justify-center space-x-16 mb-0">
        <div className="flex relative">
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            backgroundColors={backgroundColors}
            textColors={textColors}
            fontSize={fontSize}
            outerBorderColor={outerBorderColor}
            outerBorderWidth={outerBorderWidth}
            innerRadius={innerRadius}
            innerBorderColor={innerBorderColor}
            innerBorderWidth={innerBorderWidth}
            radiusLineColor={radiusLineColor}
            radiusLineWidth={radiusLineWidth}
            spinDuration={spinDuration}
            perpendicularText={true}
            textDistance={textDistance}
            onStopSpinning={() => {
              setMustSpin(false);
              let audio = new Audio(data[prizeNumber].sound);
              audio.play();
              let newWinningNumbers = [...winningNumbers];
              if (newWinningNumbers.length > 500) {
                newWinningNumbers.shift();
              }
              newWinningNumbers.push(data[prizeNumber]);
              setWinningNumbers(newWinningNumbers);
            }}
          />
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <button
              className="bg-transparent rounded-full bg-[#C5B358] text-2xl font-bold text-white"
              style={{
                height: "250px",
                width: "250px",
              }}
              onClick={handleSpinClick}
            >
              SPIN THE LUCKY WHEEL
            </button>
          </div>
        </div>
        <div
          className="flex flex-col p-4 bg-gray-600 h-56"
          style={{ backgroundColor: "rgba(52, 52, 52, 0.3)" }}
        >
          <div className="text-white font-bold opacity-100 mb-1">
            Hot Numbers
          </div>
          <div className="flex space-x-1 border-b pb-4">
            {hotNumbers().map((number) => {
              return (
                <div className="relative mb-6">
                  <div
                    className={classNames(
                      "flex items-center justify-center text-white rounded-full border-2 w-7 h-7",
                      {
                        "border-red-400":
                          getBorderColor(number[0]) === "#FF0000",
                        "border-green-400":
                          getBorderColor(number[0]) === "green",
                      }
                    )}
                  >
                    {number[0]}
                  </div>
                  <div className="flex items-center justify-center text-white ">
                    <div className="rounded-lg border-r border-b border-l w-6 h-6 absolute top-6 pt-1 text-xs">
                      {number[1]}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-white font-bold opacity-100 mb-1 pt-4">
            Cold Numbers
          </div>
          <div className="flex space-x-1">
            {[...coldNumbers()].reverse().map((number) => {
              return (
                <div className="relative mb-6">
                  <div
                    className={classNames(
                      "flex items-center justify-center text-white rounded-full border-2 w-7 h-7",
                      {
                        "border-red-400":
                          getBorderColor(number[0]) === "#FF0000",
                        "border-green-400":
                          getBorderColor(number[0]) === "green",
                      }
                    )}
                  >
                    {number[0]}
                  </div>
                  <div className="flex items-center justify-center text-white ">
                    <div className="rounded-lg border-r border-b border-l w-6 h-6 absolute top-6 pt-1 text-xs">
                      {number[1]}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div
        onClick={() => {
          let audio = new Audio(placeYourBets);
          audio.play();
        }}
        className="h-20 w-full bg-transparent"
      ></div>

      <div
        style={{ display: "flex" }}
        className="h-14 border-8 border-gray-600 rounded-lg mx-16 space-x-0.5 overflow-x-hidden"
      >
        <>
          {winningNumbers.length > 0 && (
            <div className="border-r-8 border-l-4 border-t-4 border-b-4 border-gray-600 ">
              <div
                className={classNames(
                  "flex justify-center items-center h-full w-7 leading-3 shadow-lg"
                )}
                style={{
                  backgroundColor: [...winningNumbers].reverse()[0].style
                    .backgroundColor,
                }}
              >
                <Number number={[...winningNumbers].reverse()[0]} />
              </div>
            </div>
          )}
          {[...winningNumbers]
            .reverse()
            .slice(1)
            .map((number, i) => {
              return (
                <div
                  className={classNames("flex", {
                    "items-end": number.style.backgroundColor === "#000000",
                    "items-start": number.style.backgroundColor === "#FF0000",
                    "items-center": number.style.backgroundColor === "green",
                  })}
                >
                  <div
                    className={classNames(
                      "flex justify-center items-center my-0.5 h-7 w-7 leading-3 rounded-md shadow-lg"
                    )}
                    style={{
                      backgroundColor: number.style.backgroundColor,
                    }}
                  >
                    <Number number={number} />
                  </div>
                  {i + 2 !== 0 && (i + 2) % 10 === 0 && (
                    <div className="bg-black h-10 text-gray-600 flex items-center px-1 ml-0.5">
                      <div className="-rotate-90 text-center font-bold">
                        {i + 2}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
        </>
      </div>
    </div>
  );
}

export default App;

const Number = ({ number }) => {
  return (
    <div
      style={{
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      {number.option}
    </div>
  );
};
