import database from "../../database/index";

const showCategory_idProductsServices = async (category_id) => {
  console.log(category_id);
  try {
    const idData = await database.query(
      "SELECT * FROM categories WHERE id = $1",
      [category_id]
    );
    if (!idData.rows[0]) {
      throw new Error("Id of category not found");
    }
    const res = await database.query(
      "SELECT p.name, p.price, c.name AS category FROM products AS p JOIN categories AS c ON c.id = p.category_id WHERE c.id = $1",
      [category_id]
    );

    return res.rows;
  } catch (err) {
    throw new Error(err);
  }
};

export default showCategory_idProductsServices;
