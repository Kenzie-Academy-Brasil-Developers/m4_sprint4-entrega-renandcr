import { Router } from "express";
import { RepositoriesCategoriesController } from "../controllers/repositoriesCategories";

const routerCategories = Router();

const repositoriesCategoriesController = new RepositoriesCategoriesController();

routerCategories.post("", repositoriesCategoriesController.store);
routerCategories.get("", repositoriesCategoriesController.showAll);
routerCategories.get("/:id", repositoriesCategoriesController.show);
routerCategories.patch("/:id", repositoriesCategoriesController.update);
routerCategories.delete("/:id", repositoriesCategoriesController.delete);

export default routerCategories;
