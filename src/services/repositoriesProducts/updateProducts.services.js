import database from "../../database/index";

const updateProductsServices = async ({ id, name, price, category_id }) => {
  try {
    const data = await database.query("SELECT * FROM products WHERE id = $1", [
      id,
    ]);

    const { name: dataName, price: dataPrice } = data.rows[0];

    const res = await database.query(
      "UPDATE products SET name = $2, price = $3, category_id = $4 WHERE id = $1 RETURNING *",
      [id, name || dataName, price || dataPrice, category_id]
    );

    if (!res.rows[0]) {
      throw new Error("Product not found");
    }

    return {
      message: "Product updated",
      product: res.rows[0],
    };
  } catch (err) {
    throw new Error(err);
  }
};

export default updateProductsServices;
