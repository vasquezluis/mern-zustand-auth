import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const loginHandler = (req: Request, res: Response) => {
  // ? procesar req.body = {email, password}
  // ? validacion, expressvalidator
  // ? almacenar en base de datos
  // ? generar el token

  const token = jwt.sign(
    {
      email: "luivasquez@gmail.com",
      user: "luivasquez",
    },
    "secret",
    {
      expiresIn: "10m",
    }
  );

  return res.json({
    token,
  });
};

export const profileHandler = (req: Request, res: Response) => {
  return res.json({ profile: req.user });
};
