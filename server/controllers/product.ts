import { ApiError } from "../error/apiError";
const { Product, Brand, ProductInfo, Type, BasketProduct } = require("../models/models");
const uuid = require("uuid");
const path = require("path");
const { Basket } = require("../models/models");

import type { Request, Response, NextFunction } from "express";
import type { Product } from "../types/types";

interface MulterRequest extends Request {
  files: any;
  user: {
    id: number;
    email: string;
    role: string;
  };
}

class ProductController {
  async create(req: MulterRequest, res: Response, next: NextFunction) {
    try {
      let { name, price, volume, typeId, brandId, info } = req.body;
      const { img } = req.files;
      const fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const existingBrand = await Brand.findByPk(brandId);
      const existingType = await Type.findByPk(typeId);
      const product = await Product.create({
        name,
        price,
        volume,
        typeId,
        brandId,
        img: fileName,
      });

      if (info) {
        info = JSON.parse(info);
        console.log("info:", info); // Добавьте эту строку
        info.forEach((i) => {
          console.log("product.id:", product.id); // Добавьте эту строку
          ProductInfo.create({
            productId: product.id,
            title: i.title,
            description: i.description,
          });
        });
      }

      if (!existingBrand && !existingType) {
        return next(ApiError.badRequest("Выбранные бренд и тип не существуют"));
      }

      if (!existingBrand) {
        return next(ApiError.badRequest("Выбранный бренд не существует"));
      }
      if (!existingType) {
        return next(ApiError.badRequest("Выбранный тип не существует"));
      }

      return res.json({ product });
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req: Request, res: Response) {
    let { brandId, typeId, limit = 10, page = 1 } = req.query;
    let products: Product[];

    let offset = (page as number) * (limit as number) - (limit as number);

    if (!brandId && !typeId) {
      products = await Product.findAndCountAll({ limit, offset });
    }

    if (!brandId && typeId) {
      products = await Product.findAndCountAll({
        where: { typeId },
        limit,
        offset,
      });
    }

    if (!typeId && brandId) {
      products = await Product.findAndCountAll({
        where: { brandId },
        limit,
        offset,
      });
    }

    if (brandId && typeId) {
      products = await Product.findAndCountAll({
        where: { brandId, typeId },
        limit,
        offset,
      });
    }
    return res.json(products);
  }

  async getOne(req: Request, res: Response) {
    const { id } = req.params;
    const product = await Product.findOne({
      where: { id },
      include: [{ model: ProductInfo, as: "info" }],
    });
    return res.json(product);
  }

 
}

module.exports = new ProductController();
