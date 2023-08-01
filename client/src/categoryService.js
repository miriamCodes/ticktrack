// service methods to make api calls

const API_BASE_URL = "http://localhost:3001";

export const getAllCategories = async () => {
  const response = await fetch(`${API_BASE_URL}/category`);
  return await response.json();
};

export const addCategory = async (categoryName) => {
  const response = await fetch(`${API_BASE_URL}/category`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: categoryName }),
  });
  return await response.json();
};

export const deleteCategory = async (categoryName) => {
  const response = await fetch(`${API_BASE_URL}/category`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: categoryName }),
  });
  return await response.json();
};
