import deleteProductsServices from "../services/repositoriesProducts/deleteProducts.services";
import showAllProductsServices from "../services/repositoriesProducts/showAllProducts.services";
import showProductsServices from "../services/repositoriesProducts/showProducts.services";
import storeProductsServices from "../services/repositoriesProducts/storeProducts.services";
import updateProductsServices from "../services/repositoriesProducts/updateProducts.services";
import showCategory_idProductsServices from "../services/repositoriesProducts/showCategory_idProducts.services";
export class RepositoriesProductsController {
  async store(req, res) {
    const { name, price, category_id } = req.body;

    try {
      const product = await storeProductsServices({
        name,
        price,
        category_id,
      });

      return res.status(201).json(product);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  async showAll(req, res) {
    try {
      const products = await showAllProductsServices();
      return res.status(200).json(products);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  async show(req, res) {
    const { id } = req.params;
    try {
      const product = await showProductsServices({ id });
      return res.status(200).json(product);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  async update(req, res) {
    const { name, price, category_id } = req.body;
    const { id } = req.params;
    try {
      const product = await updateProductsServices({
        id,
        name,
        price,
        category_id,
      });

      return res.status(200).json(product);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
  async delete(req, res) {
    const { id } = req.params;
    try {
      const message = await deleteProductsServices({ id });
      return res.status(200).json(message);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  async showCategory_id(req, res) {
    const { category_id } = req.params;
    try {
      const products = await showCategory_idProductsServices(category_id);

      return res.status(200).json(products);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
}
