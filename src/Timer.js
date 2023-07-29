// render timer
// render  start/resume, pause, reset  buttons
// render input field for task category
// render input field for duration

// timer logic: start,  pause, resume, reset, end  timer
// to App.js: update the interval history data

import React from "react";
import { Button, Input } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import ButtonGroup from "@mui/material";

// export default function SelectVariants() {
//   const [age, setAge] = React.useState('');

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

function Timer() {
  return (
    <div className="timer-container">
      <div className="timer">
        <div className="timer-count">25:00</div>
        <div className="timer-settings">
          <div className="input-container-minutes">
            <p className="spending-label">spending </p>
            {/* <input type="number" className="input-minutes" /> */}
            <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
              <InputLabel id="input-minutes">minutes</InputLabel>
              <Select className="select-minutes" label="Minutes">
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
        <Button variant="outlined" className="start-button">
          Start
        </Button>
        <Button variant="outlined" className="pause-button">
          Pause
        </Button>
        <Button variant="outlined" className="reset-button">
          Reset
        </Button>
        {/* </ButtonGroup> */}
      </div>
    </div>
  );
}

export default Timer;
