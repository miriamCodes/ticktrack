// render list of all categories  with  buttons to delete category
// render input field  to create new category

// category logic: create  new category,  delete category

// to App.js: update category list

//------

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { TextField } from "@mui/material";

function Category() {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <div className="category">
      <h2>what thoughtspace do you want to focus on?</h2>
      <div className="category-list-deletable">
        <Stack direction="column" spacing={4}>
          <Chip
            className="chip"
            sx={{ height: 45 }}
            label="research"
            color="secondary"
            onClick={handleClick}
            onDelete={handleDelete}
          />
          <Chip
            className="chip"
            sx={{ height: 45 }}
            label="execution"
            color="secondary"
            onClick={handleClick}
            onDelete={handleDelete}
          />
          <Chip
            className="chip"
            sx={{ height: 45 }}
            label="improvement"
            color="secondary"
            onClick={handleClick}
            onDelete={handleDelete}
          />
          <Chip
            className="chip"
            sx={{ height: 45 }}
            label="break"
            color="secondary"
            onClick={handleClick}
            onDelete={handleDelete}
          />
        </Stack>
      </div>
      <div className="input-add-category">
        <h3>the thoughtspace is better described by</h3>
        <TextField
          id="outlined-basic"
          label="add category"
          variant="outlined"
          color="signalcolor"
        />
      </div>
    </div>
  );
}
export default Category;
