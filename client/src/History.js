// render list of completed, interrupted and canceled interval history
// start with only completed history!

import { FormControl, MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
// history logic: display by category or day

// interval history data will be stored on the server

function History() {
  return (
    <div>
      <div className="list-error-message">
        <h3>
          oops... you first need to complete an interval to start your
          timetracking!
        </h3>
      </div>
      <div className="input-display">
        <div className="display-as-label">display as</div>
        <div className="display-option-history">
          <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
            <InputLabel id="select-category-label">category/day</InputLabel>
            <Select label="day/category">
              <MenuItem value="category">category</MenuItem>
              <MenuItem value="day">day</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
}

export default History;
