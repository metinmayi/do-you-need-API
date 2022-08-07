import Joi from "joi";
import { Request } from "express";

const registrationSchema = Joi.object({
  username: Joi.string()
    .pattern(/^[a-zA-Z][a-zA-Z0-9_]{3,23}$/)
    .required(),
  password: Joi.string()
    .pattern(/.(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/)
    .required(),
  email: Joi.string().email().required(),
});
export const registrationValidation = (request: Request) => {
  const result = registrationSchema.validate(request.body);
  if (result.error) {
    return { success: false, message: result.error.message };
  }
  console.log("Continue");
  return { success: true, message: "Valid" };
};
