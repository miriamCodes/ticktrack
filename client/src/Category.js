import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
import {
  getAllCategories,
  addCategory,
  deleteCategory,
} from "./categoryService";

function Category() {
  const defaultCategories = [
    { name: "break" },
    { name: "research" },
    { name: "execution" },
    { name: "improvement" },
  ];

  let [categories, setCategories] = useState([defaultCategories]);
  const [newCategoryName, setNewCategoryName] = useState("");

  useEffect(() => {
    handleGetAllCategories();
  }, [newCategoryName]);

  const handleGetAllCategories = async () => {
    let fetchedCategories = await getAllCategories();
    setCategories(fetchedCategories);
  };

  const handleAddCategory = async () => {
    console.log(newCategoryName, "new category");
    if (newCategoryName.trim() !== "") {
      await addCategory({ name: newCategoryName });
      setNewCategoryName("");
    }
  };

  const handleDeleteCategory = async (categoryName) => {
    console.log(categoryName);
    await deleteCategory(categoryName);
    handleGetAllCategories();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddCategory();
    }
  };

  return (
    <div className="category">
      <h2>what thoughtspace do you want to focus on?</h2>
      <div className="category-list-deletable">
        <Stack direction="column" spacing={4}>
          {categories.map((category) => (
            <Chip
              className="chip"
              key={category.name}
              sx={{ height: 45 }}
              label={category.name}
              color="secondary"
              onDelete={() => handleDeleteCategory(category.name)}
            />
          ))}
        </Stack>
      </div>
      <div className="input-add-category">
        <h3>the thoughtspace is better described by</h3>
        <TextField
          id="outlined-basic"
          label="add category"
          variant="outlined"
          color="signalcolor"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
    </div>
  );
}
export default Category;
