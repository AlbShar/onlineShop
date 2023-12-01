import { ApiError } from "../error/apiError";
const { Basket, Product, BasketProduct } = require("../models/models");

import type { Request, Response, NextFunction } from "express";
interface MulterRequest extends Request {
  files: any;
  user: {
    id: number;
    email: string;
    role: string;
  };
}

class BasketController {
  async delete(req: MulterRequest, res: Response, next: NextFunction) {
    try {
      const { id } = req.query;

      const basketProducts = await BasketProduct.destroy({
        where: {
          productId: id
        },
      });
      if (!basketProducts) {
        return next(ApiError.badRequest(`Неверный ID товара`));
      }

      return res.status(200).json({
        message: "Product has deleted",
      });

    } catch (error) {
      next(ApiError.internal(error.message));

    }
    
  }

  async add(req: MulterRequest, res: Response, next: NextFunction) {
    try {
      const { id } = req.body;
      const { id: userId } = req.user;
      const product = await Product.findByPk(id);
      if (!product) {
        return next(ApiError.badRequest(`Product with id ${id} not found`));
      }
      let basket = await Basket.findOne({ where: { userId } });

      if (!basket) {
        // Если корзины пользователя нет, создаем новую
        basket = await Basket.create({ userId });
      }

      // Добавляем товар в корзину
      const basketProduct = await BasketProduct.create({
        basketId: basket.id,
        productId: product.id,
      });

      return res.json({
        message: "Product added to basket successfully",
        basketProduct,
      });

    } catch (error) {
       next(ApiError.internal(error.message));
    }
  }

  async getAll(req: MulterRequest, res: Response, next: NextFunction) {
    const basketProducts = await BasketProduct.findAndCountAll();
    res.json({basketProducts})
  }
}

module.exports = new BasketController();
