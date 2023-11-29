const {Brand} = require("../models/models");

import type { Request, Response, NextFunction } from "express";


class BrandController {
    async create(req: Request, res: Response) {
        const {name} = req.body;
        const brand = await Brand.create({name});
        return res.json(brand);

    }

    async getAll(req: Request, res: Response) {
        const brands = await Brand.findAll();
        return res.json(brands);

    }

   
}

module.exports = new BrandController();