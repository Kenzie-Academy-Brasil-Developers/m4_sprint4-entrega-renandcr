import database from "../../database/index";
import { v4 as uuid } from "uuid";

const storeProductsServices = async ({ name, price, category_id }) => {
  const id = uuid();
  try {
    const res = await database.query(
      "INSERT INTO products(id, name, price, category_id) VALUES($1, $2, $3, $4) RETURNING *",
      [id, name, price, category_id]
    );

    return {
      message: "Product created",
      product: res.rows[0],
    };
  } catch (err) {
    throw new Error(err);
  }
};

export default storeProductsServices;
