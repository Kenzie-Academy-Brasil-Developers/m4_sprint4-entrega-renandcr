import database from "../../database/index";

const updateCategoriesServices = async ({ name, id }) => {
  try {
    const res = await database.query(
      "UPDATE categories SET name = $1 WHERE id = $2 RETURNING *",
      [name, id]
    );

    if (!res.rows[0]) {
      throw new Error("Category not found");
    }
    return {
      message: "Category updated",
      category: res.rows[0],
    };
  } catch (err) {
    throw new Error(err);
  }
};
export default updateCategoriesServices;
