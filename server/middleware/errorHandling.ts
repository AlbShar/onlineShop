import {ApiError} from "../error/apiError";
import { Response, Request, NextFunction } from "express";

module.exports = function(err, req: Request, res: Response, next: NextFunction) {
    if (err instanceof ApiError) {
        return res.status(err.status).json({message: err.message})
    }
    return res.status(500).json({message: 'Непредвиденная ошибка'})
}