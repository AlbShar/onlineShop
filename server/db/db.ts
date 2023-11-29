import { Sequelize } from "sequelize";

export const sequelize: Sequelize = new Sequelize(
  `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  {
    port: +process.env.PORT,
    host: process.env.DB_HOST,
    dialect: "postgres",
    
  }
);
