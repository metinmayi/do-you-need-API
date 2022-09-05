import Joi from "joi";
import { PASSWORD_REGEX, USERNAME_REGEX } from "../../constants/authentication";

const registrationSchema = Joi.object({
  username: Joi.string().pattern(USERNAME_REGEX).required(),
  password: Joi.string().pattern(PASSWORD_REGEX).required(),
});

/**
 * Checks if the requested username and password match the regex.
 */
export const isValidLogin = (username: string, password: string) => {
  const result = registrationSchema.validate({
    username,
    password,
  });
  if (result.error) {
    return false;
  }
  return true;
};
