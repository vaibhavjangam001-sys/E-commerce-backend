import { body } from "express-validator";
import constants from "../constants/index.js";
import { isEmailAvailable } from "./custom.validator.js";

const validateRegister = () => {
  return [
    body("name")
      .trim()
      .notEmpty()
      .withMessage("Name is required")
      .bail()
      .isLength({ min: 2, max: 30 })
      .withMessage("Name must be at least 2 and 12 characters"),

    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .bail()
      .isEmail()
      .withMessage("Invalid email")
      .custom(isEmailAvailable),

    body("password")
      .trim()
      .notEmpty()
      .withMessage("Password is requried")
      .bail()
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long.")
      .bail()
      .matches(constants.REGEX.PASSWORD_REGEX)
      .withMessage(
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      ),
  ];
};

export { validateRegister };
