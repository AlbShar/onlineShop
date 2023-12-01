const { Product, Rating } = require("../models/models");
import { ApiError } from "../error/apiError";
import type { Request, Response, NextFunction } from "express";

class RatingController {
  async setRating(req: any, res: Response, next: NextFunction) {
    try {
      const { id, rating } = req.body;
      const { id: userId } = req.user;

      const product = await Product.findByPk(id);
      if (!product) {
        return next(ApiError.badRequest("Продукт не найден" ));
      }

      // Создаем запись рейтинга
      const newRating = await Rating.create({
        rating,
        productId: id,
        userId
      });

      return res.status(201).json({
        message: "Рейтинг успешно добавлен",
        rating: newRating,
      });
    } catch (error) {
      console.error("Ошибка при установке рейтинга:", error);
      next(ApiError.internal("Ошибка при установке рейтинга"));
    }
  }

  async getRatings(req: any, res: Response, next: NextFunction) {
    const ratings = await Rating.findAll();
    res.status(200).json(ratings)
  }
}

module.exports = new RatingController(); 
