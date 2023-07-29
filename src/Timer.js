// render timer
// render  start/resume, pause, reset  buttons
// render input field for task category
// render input field for duration

// timer logic: start,  pause, resume, reset, end  timer
// to App.js: update the interval history data

import React, { useState, useEffect } from "react";
import { Button, Input } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
``;
function Timer() {
  // store timer value aka duration
  const [timeLeft, setTimeLeft] = useState(1500);
  // store timer status aka running, paused
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerPaused, setTimerPaused] = useState(false);
  // store selected duration
  const [selectedMinutes, setSelectedMinutes] = useState(25); // 25 min as  default

  // update state
  const startTimer = () => {
    if (!timerRunning) {
      setTimerRunning(true);
      setTimerPaused(false);
    } else {
      // resume timer after pause
      setTimerRunning(true);
      setTimerPaused(false);
    }
  };

  const pauseTimer = () => {
    setTimerRunning(false);
    setTimerPaused(true);
  };

  const resetTimer = () => {
    setTimeLeft(selectedMinutes * 60); // Reset to 25 minutes
    setTimerRunning(false);
    setTimerPaused(false);
  };

  useEffect(() => {
    setTimeLeft(selectedMinutes * 60);
  }, [selectedMinutes]);

  // set up the interval and clear when timer is paused/refreshed
  useEffect(() => {
    let interval;

    if (timerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      console.log("tick");
    }

    if (!timerRunning || timeLeft === 0) {
      clearInterval(interval);
    }

    if (timeLeft === 0) {
      // Timer completed
      console.log("time for a break!");
    }

    return () => {
      clearInterval(interval);
    };
  }, [timerRunning, timeLeft]);

  // helper function to format time in MM:SS
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div className="timer-container">
      <div className="timer">
        <div className="timer-count">{formatTime(timeLeft)}</div>
        <div className="timer-settings">
          <div className="input-container-minutes">
            <p className="spending-label">spending </p>
            {/* <input type="number" className="input-minutes" /> */}
            <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
              <InputLabel id="input-minutes">minutes</InputLabel>
              <Select
                className="select-minutes"
                label="Minutes"
                value={selectedMinutes}
                onChange={(event) => setSelectedMinutes(event.target.value)}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={15}>15</MenuItem>
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={30}>30</MenuItem>
                <MenuItem value={45}>45</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={60}>60</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="input-container-category">
            <p className="on-label">on</p>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
              <InputLabel id="select-category-label">category</InputLabel>
              <Select
                className="select-category"
                // value={category}
                // onChange={handleChange}
                label="Category"
              >
                <MenuItem value="break">break</MenuItem>
                <MenuItem value="research">research</MenuItem>
                <MenuItem value="execution">execution</MenuItem>
                <MenuItem value="improvement">improvement</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <div className="button-container">
        {/* <ButtonGroup variant="text" aria-label="text button group"> */}
        <Button
          variant="outlined"
          className="start-button"
          onClick={startTimer}
          disabled={timerRunning}
          disabled={(timerRunning && !timerPaused) || timeLeft === 0} // Disable if the timer is completed or paused
        >
          {timerRunning && !timerPaused ? "Resume" : "Start"}
        </Button>

        <Button
          variant="outlined"
          className="pause-button"
          onClick={pauseTimer}
        >
          Pause
        </Button>
        <Button
          variant="outlined"
          className="reset-button"
          onClick={resetTimer}
        >
          Reset
        </Button>
        {/* </ButtonGroup> */}
      </div>
    </div>
  );
}

export default Timer;
