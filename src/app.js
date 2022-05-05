import express from "express";
import "dotenv/config";
import routerCategories from "./routers/categories.routes";
import routerProducts from "./routers/products.routes";
import { startDatabase } from "./database";
import "dotenv/config";

const app = express();
app.use(express.json());

const port = 3000;
app.use("/categories", routerCategories);
app.use("/products", routerProducts);

export default app.listen(process.env.PORT || port, () => {
  startDatabase();
  console.log("Server running na porta" + " " + process.env.PORT || port);
});
