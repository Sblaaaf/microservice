import * as Joi from "joi";

export const validationSchema = Joi.object({
  RESEND_API_KEY: Joi.string()
    .required()
    // Resend commence généralement par "re_"
    .pattern(/^re_/)
    .messages({
      "any.required": "RESEND_API_KEY is required",
      "string.empty": "RESEND_API_KEY cannot be empty",
      "string.pattern.base": "RESEND_API_KEY must start with 're_'",
    }),
});
