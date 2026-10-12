import Joi from "joi";
import type {
  LoginFormData,
  SendOtpFormData,
  VerifyOtpFormData,
} from "../type";

export const passwordValidation = (fieldName = "Password") =>
  Joi.string()
    .trim()
    .min(6)
    .pattern(/[A-Z]/, "uppercase")
    .pattern(/[a-z]/, "lowercase")
    .pattern(/\d/, "number")
    .pattern(/[!@#$%^&*(),.?":{}|<>_\-\\[\]/+=;'`~]/, "special character")
    .required()
    .messages({
      "string.base": `${fieldName} must be a string.`,
      "string.empty": `${fieldName} is required.`,
      "string.min": `${fieldName} must be at least 6 characters long.`,
      "string.pattern.name": `${fieldName} must contain at least one {#name}.`,
      "any.required": `${fieldName} is required.`,
    });
const loginSchema = Joi.object<LoginFormData>({
  email: Joi.string()
    .trim()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.base": "Email must be a string.",
      "string.empty": "Email is required.",
      "string.email": "Email must be a valid email address.",
      "any.required": "Email is required.",
    }),

  password: passwordValidation("Password"),
});

const sendOtpSchema = Joi.object<SendOtpFormData>({
  email: Joi.string()
    .trim()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.base": "Email must be a string.",
      "string.empty": "Email is required.",
      "string.email": "Email must be a valid email address.",
      "any.required": "Email is required.",
    }),
});
const verifyOtpSchema = Joi.object<VerifyOtpFormData>({
  email: Joi.string()
    .trim()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.base": "Email must be a string.",
      "string.empty": "Email is required.",
      "string.email": "Email must be a valid email address.",
      "any.required": "Email is required.",
    }),
  otp: Joi.string()
    .pattern(/^\d{4}$/)
    .required()
    .messages({
      "any.required": "OTP is required",
      "string.empty": "OTP cannot be empty",
      "string.base": "OTP must be a string",
      "string.pattern.base": "OTP must be exactly 4 digits",
    }),
});

export type FormErrors<T> = Partial<Record<keyof T, string>>;

function getErrors<T>(
  schema: Joi.ObjectSchema<T>,
  input: unknown,
): FormErrors<T> {
  const { error } = schema.validate(input, {
    abortEarly: false,
    stripUnknown: true,
  });
  const errors: FormErrors<T> = {};
  error?.details.forEach(({ path, message }) => {
    const key = path[0] as keyof T;
    // keep only the first error per field
    if (key && !errors[key]) errors[key] = message;
  });
  return errors;
}

export function validateLogin(input: LoginFormData): FormErrors<LoginFormData> {
  return getErrors(loginSchema, input);
}
export function validateSendOtp(
  input: SendOtpFormData,
): FormErrors<SendOtpFormData> {
  return getErrors(sendOtpSchema, input);
}
export function validateVerifyOtp(
  input: VerifyOtpFormData,
): FormErrors<VerifyOtpFormData> {
  return getErrors(verifyOtpSchema, input);
}
