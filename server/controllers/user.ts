import { ApiError } from "../error/apiError";

class UserController {
    async registration(req, res) {

    }

    async login(req, res) {
        
    }

    async checkAuth(req, res, next) {
        const query = req.query;

        if(!query.id) {
            return next(ApiError.badRequest('Нет ID'))
        }
        res.json(query)
    }
}

module.exports = new UserController();