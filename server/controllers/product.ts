import { ApiError } from "../error/apiError";

const { Product } = require("../models/models");
const { Brand } = require("../models/models");
const { Type } = require("../models/models");
const uuid = require("uuid");
const path = require("path");

class ProductController {
  async create(req, res, next) {
    try {
      const { name, price, volume, typeId, brandId } = req.body;
      const { img } = req.files;
      const fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const existingBrand = await Brand.findByPk(brandId);
      const existingType = await Brand.findByPk(typeId);

      if (!existingBrand && !existingType) {
        return next(ApiError.badRequest("Выбранные бренд и тип не существуют" ));
      }

      if (!existingBrand) {
        return next(ApiError.badRequest("Выбранный бренд не существует" ));
      }
      if (!existingType) {
        return next(ApiError.badRequest("Выбранный тип не существует" ));
      }

      const product = await Product.create({
        name,
        price,
        volume,
        typeId,
        brandId,
        img: fileName,
      });
      return res.json({ product });
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res) {
    const products = await Product.findAll();
    return res.json(products);
  }

  async getOne(req, res) {}
}

module.exports = new ProductController();
