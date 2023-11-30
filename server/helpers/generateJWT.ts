const jsonWebToken = require("jsonwebtoken");

type JWT = {
    userId: number;
    email: string;
    role: string;
}

export const generateJWT = ({userId, email, role}: JWT) => {
    return jsonWebToken.sign(
        {
          id: userId,
          email,
          role,
        },
        process.env.SECRET_KEY,
        { expiresIn: "24h" }
      );
};