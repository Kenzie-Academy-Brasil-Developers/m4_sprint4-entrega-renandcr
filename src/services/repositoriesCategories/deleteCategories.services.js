import database from "../../database/index";

const deleteCategoriesServices = async ({ id }) => {
  try {
    const res = await database.query(
      "DELETE FROM categories WHERE id = $1 RETURNING *",
      [id]
    );

    if (!res.rows[0]) {
      throw new Error("Category not found");
    }
    return { message: "Category deleted", category: res.rows[0] };
  } catch (err) {
    throw new Error(err);
  }
};
export default deleteCategoriesServices;
