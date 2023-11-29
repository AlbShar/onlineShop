const {Type} = require("../models/models");
import type { Request, Response } from "express";

class TypeController {
    async create(req: Request, res: Response) {
        const {name} = req.body;
        const type = await Type.create({name});
        return res.json(type);

    }

    async getAll(req: Request, res: Response) {
        const types = await Type.findAll();
        return res.json(types);
    }

   
}

module.exports = new TypeController();