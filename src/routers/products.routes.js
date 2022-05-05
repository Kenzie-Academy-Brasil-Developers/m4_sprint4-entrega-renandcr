import { Router } from "express";
import { RepositoriesProductsController } from "../controllers/repositoriesProducts.controller";

const routerProducts = Router();

const repositoriesProductsController = new RepositoriesProductsController();

routerProducts.post("", repositoriesProductsController.store);
routerProducts.get("", repositoriesProductsController.showAll);
routerProducts.get("/:id", repositoriesProductsController.show);
routerProducts.patch("/:id", repositoriesProductsController.update);
routerProducts.delete("/:id", repositoriesProductsController.delete);
routerProducts.get(
  "/category/:category_id",
  repositoriesProductsController.showCategory_id
);

export default routerProducts;
