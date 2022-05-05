import database from "../../database/index";

const showCategory_idProductsServices = async ({ category_id }) => {
  try {
    const res = await database.query(
      "SELECT p.name, p.price, c.name AS category FROM products AS p JOIN categories AS c ON c.id = p.category_id WHERE c.id = $1",
      [category_id]
    );

    if (!res.rows[0]) {
      throw new Error("Products not found");
    }

    return res.rows;
  } catch (err) {
    throw new Error(err);
  }
};

export default showCategory_idProductsServices;
