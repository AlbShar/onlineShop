const ApiEr = require("../error/apiError");

class UserController {
    async registration(req, res) {

    }

    async login(req, res) {
        
    }

    async checkAuth(req, res, next) {
        const {id} = req.query;

        if(!id) {
            return next(ApiEr.badRequest('Нет ID'))
        }
        res.json(id)
    }
}

module.exports = new UserController();