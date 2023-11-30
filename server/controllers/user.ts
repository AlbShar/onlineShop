import { ApiError } from "../error/apiError";
import { generateJWT } from "../helpers/generateJWT";

const { User, Basket } = require("../models/models");
const bscrypt = require("bcrypt");

import type { Request, Response, NextFunction } from "express";


class UserController {
  async registration(req: Request, res: Response) {
    const { email, password, role } = req.body;

    const candidate = await User.findOne({ where: { email } });

    if (candidate) {
      return ApiError.badRequest("Такая почта уже существует");
    }
    const hash = await bscrypt.hash(password, 5);
    const user = await User.create({ email, password: hash });
    const basket = await Basket.create({ userId: user.Id });
    const token = generateJWT({userId: user.id, email, role});

    return res.json({ token });
  }

  async login(req: Request, res: Response, next: NextFunction) {
    const {email, password} = req.body;
    const user = await User.findOne({where: {email}});

    if (!user) {
        return next(ApiError.internal("Пользователь с таким именем не найден"))
    }
    const comparePassword = bscrypt.compareSync(password, user.password);

    if (!comparePassword) {
        return next(ApiError.internal("Wrong password"))
    }
    const token = generateJWT({ userId: user.id, email, role: user.role });

    return res.json({ token });


  }

  async checkAuth(req: Request, res: Response) {
    res.json({message: "Вы авторизованы"});
  }
}

module.exports = new UserController();
