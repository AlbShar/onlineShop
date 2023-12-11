import { ApiError } from "../error/apiError";
import { generateJWT } from "../helpers/generateJWT";

const { User, Basket } = require("../models/models");
const bscrypt = require("bcrypt");

import type { Request, Response, NextFunction } from "express";

interface RequestUser extends Request {
  user: {
    id: number,
    email: string,
    role: string
  }
}

class UserController {
  async registration(req: Request, res: Response) {
    const { email, password, role, username } = req.body;

    const candidate = await User.findOne({ where: { email } });

    if (candidate) {
      return ApiError.badRequest("Такая почта уже существует");
    }
    const hash = await bscrypt.hash(password, 5);
    const user = await User.create({ email, password: hash, username, role });
    const basket = await Basket.create({ userId: user.Id });
    const token = generateJWT({userId: user.id, email, role});

    return res.json({ token });
  }

  async login(req: Request, res: Response, next: NextFunction) {
    const {email, password} = req.body;
    const user = await User.findOne({where: {email}});
    const comparePassword = bscrypt.compareSync(password, user.password);

    if (!user && !comparePassword) {
      return next(ApiError.unauthorized("Пользователя с таким e-mail не существует или введен неверный пароль"))
    }
    const token = generateJWT({ userId: user.id, email, role: user.role });

    return res.json({ token });
  }

  async checkAuth(req: RequestUser, res: Response) {
    const token  = generateJWT({userId: req.user.id, email: req.user.email, role: req.user.role})
    res.json({token});
  }
}

module.exports = new UserController();
