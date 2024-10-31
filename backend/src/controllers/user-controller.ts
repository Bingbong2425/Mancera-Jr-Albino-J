import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import { GenerateToken, VerifyToken } from "../services/json-web-token";
import { ApiError } from "../utils/custom-error";
import pool from "../config/database-setup";
import { SendEmail } from "../services/node-mailer";
const saltRound = 10;

export const SignIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, password } = req.body;

    const findUserName = await pool.query(
      "SELECT * FROM public.usertable WHERE username = $1",
      [username]
    );
    if (findUserName.rows.length === 0) {
      throw new ApiError("User not found", 404);
    }
    const user = findUserName.rows[0];
    if (user.verify == "notverify") {
      return res.status(200).json({
        verify: user.verify,
        id: user.id,
        username: user.username,
        password: user.password,
      });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new ApiError("Invalid password", 404);
    }
    const token = GenerateToken({ id: user.id });
    return res.status(200).json({
      login: true,
      token: token,
      id: user.id,
    });
  } catch (error) {
    next(error);
  }
};
export const SignUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, email, password } = req.body;

  try {
    const findEmail = await pool.query(
      "SELECT * FROM public.usertable WHERE email = $1",
      [email]
    );

    if (findEmail.rows.length > 0) {
      throw new ApiError("Email already in use", 404);
    }
    const hash = await bcrypt.genSalt(saltRound);
    const passwordHash = await bcrypt.hash(password, hash);

    const createUser = await pool.query(
      "INSERT INTO public.usertable (username, email, password) VALUES ($1, $2, $3)  RETURNING *",
      [username, email, passwordHash]
    );
    const result = createUser.rows[0];

    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const SendEmailUpdate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.body;
    const findEmailResult = await pool.query(
      "SELECT * FROM public.usertable WHERE email = $1",
      [email]
    );

    if (findEmailResult.rows.length === 0) {
      throw new ApiError("Email not exist", 404);
    }
    const resultFindEmail = findEmailResult.rows[0];
    const fromEmail = process.env.EMAIL;
    if (!fromEmail) {
      throw new ApiError("Email environment variable is not defined", 404);
    }
    const mailOptions = {
      from: fromEmail,
      to: email,
      subject: "RECOVERY ACCOUNT",
      text: `http://localhost:5173/forgot/${resultFindEmail.id}`,
    };
    const sendEmail = await SendEmail(mailOptions);
    if (!sendEmail) {
      throw new ApiError("not sending ", 404);
    }
    return res.status(200).json({ msg: "send in email" });
  } catch (error) {
    next(error); // Pass error to the global error handler
  }
};
export const UpdateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { password } = req.body;
    const hash = await bcrypt.genSalt(saltRound);
    const passwordHash = await bcrypt.hash(password, hash);

    const updateUser = await pool.query(
      "UPDATE public.usertable SET password = $1 WHERE id = $2",
      [passwordHash, id]
    );
    if (!updateUser) {
      throw new ApiError("not update", 404);
    }

    return res.status(200).json({ msg: "user updated" });
  } catch (error) {
    next(error); // Pass error to the global error handler
  }
};
