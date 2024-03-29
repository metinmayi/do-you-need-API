import { ENVIRONMENT } from "./config";

export const USERNAME_REGEX = /^[a-zA-Z][a-zA-Z0-9_]{3,23}$/;
export const PASSWORD_REGEX =
  ENVIRONMENT === "production"
    ? /.(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@"#$%]).{8,24}$/
    : /./;
