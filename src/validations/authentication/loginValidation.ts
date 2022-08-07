import Joi from "joi";
import { Request } from "express";
import { PASSWORD_REGEX, USERNAME_REGEX } from "../../constants/authentication";

const registrationSchema = Joi.object({
  username: Joi.string().pattern(USERNAME_REGEX).required(),
  password: Joi.string().pattern(PASSWORD_REGEX).required(),
});
export const loginValidation = (request: Request) => {
  const result = registrationSchema.validate(request.body);
  if (result.error) {
    return { success: false, message: result.error.message };
  }
  console.log("Continue");
  return { success: true, message: "Valid" };
};
