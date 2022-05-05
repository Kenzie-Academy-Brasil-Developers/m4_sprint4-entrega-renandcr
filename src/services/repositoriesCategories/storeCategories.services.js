import database from "../../database/index";

const storeCategoriesServices = async ({ name }) => {
  try {
    const res = await database.query(
      "INSERT INTO categories(name) VALUES($1) RETURNING *",
      [name]
    );

    return {
      message: "Category created",
      category: res.rows[0],
    };
  } catch (err) {
    throw new Error(err);
  }
};
export default storeCategoriesServices;
