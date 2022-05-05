import deleteCategoriesServices from "../services/repositoriesCategories/deleteCategories.services";
import showAllCategoriesServices from "../services/repositoriesCategories/showAllCategories.services";
import showCategoriesServices from "../services/repositoriesCategories/showCategories.services";
import storeCategoriesServices from "../services/repositoriesCategories/storeCategories.services";
import updateCategoriesServices from "../services/repositoriesCategories/updateCategories.services";

export class RepositoriesCategoriesController {
  async store(req, res) {
    const { name } = req.body;

    try {
      const category = await storeCategoriesServices({ name });

      return res.status(201).json(category);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  async showAll(req, res) {
    try {
      const categories = await showAllCategoriesServices();

      return res.status(200).json(categories);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  async show(req, res) {
    const { id } = req.params;
    try {
      const category = await showCategoriesServices({ id });
      return res.status(200).json(category);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
  async update(req, res) {
    const { name } = req.body;
    const { id } = req.params;
    try {
      const category = await updateCategoriesServices({ name, id });
      return res.status(200).json(category);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      const message = await deleteCategoriesServices({ id });
      return res.status(200).json(message);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
}
