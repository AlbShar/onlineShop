const jsonWebToken = require("jsonwebtoken");
import type { Request, Response, NextFunction } from "express";

interface UserRequest extends Request {
  user: any;
}

type Role = "ADMIN" | "USER";

export const checkRole = (role: Role) => {
  return function (req: UserRequest, res: Response, next: NextFunction) {
    if (req.method === "OPTION") {
      next();
    }
    try {
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        res.status(401).json({ message: "Пользователь не авторизован" });
      }
      const decode = jsonWebToken.verify(token, process.env.SECRET_KEY);
      if (decode.role !== role) {
        return res.status(403).json({ message: "У вас нет прав доступа" });
      }
      req.user = decode;
      next();
    } catch (error) {
      res.status(401).json({ message: "Пользователь не авторизован" });
    }
  };
};
