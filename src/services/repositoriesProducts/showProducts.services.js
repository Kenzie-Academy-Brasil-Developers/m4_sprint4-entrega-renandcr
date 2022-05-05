import database from "../../database/index";

const showProductsServices = async ({ id }) => {
  try {
    const res = await database.query("SELECT * FROM products WHERE id = $1", [
      id,
    ]);

    if (!res.rows[0]) {
      throw new Error("Product not found");
    }

    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default showProductsServices;
