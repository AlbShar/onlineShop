const jsonWebToken = require("jsonwebtoken");
import type { Request, Response, NextFunction } from "express";

interface UserRequest extends Request {
    user: any
}

export const authMiddleware = (
  req: UserRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.method === "OPTION") {
    next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      res.status(401).json({ message: "Пользователь не авторизован" });
    }
    const decode = jsonWebToken.verify(token, process.env.SECRET_KEY);
    req.user = decode;
    next();
  } catch (error) {
    res.status(401).json({ message: "Пользователь не авторизован" });
  }
};
