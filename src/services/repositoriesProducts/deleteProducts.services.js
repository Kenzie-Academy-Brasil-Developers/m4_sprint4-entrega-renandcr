import database from "../../database/index";

const deleteProductsServices = async ({ id }) => {
  try {
    const res = await database.query(
      "DELETE FROM products WHERE id = $1 RETURNING *",
      [id]
    );

    if (!res.rows[0]) {
      throw new Error("Product not found");
    }

    return {
      message: "Product deleted",
      product: res.rows[0],
    };
  } catch (err) {
    throw new Error(err);
  }
};

export default deleteProductsServices;
