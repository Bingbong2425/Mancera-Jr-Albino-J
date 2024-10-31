// src/middleware/errorHandler.ts
import { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/custom-error"; // Adjust path as needed

export default function errorHandler(
  err: Error | ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err.stack);

  if (err instanceof ApiError) {
    res.status(err.statusCode).json({ error: err.message });
  } else {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
