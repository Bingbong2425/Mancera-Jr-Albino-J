// src/utils/custom-error.ts
export class ApiError extends Error {
  public statusCode: number;

  constructor(message: string, statusCode: number = 500) {
    super(message);
    this.statusCode = statusCode;
    this.name = "ApiError"; // Set the name to 'ApiError'
    // Capture the stack trace (V8-specific) if available
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }
  }
}
