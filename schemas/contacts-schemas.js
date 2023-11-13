import Joi from "joi";

export const contactAddSchema = Joi.object({
  name: Joi.string().required().min(2).max(30).messages({
    "any.required": "missing required name field",
    "string.base": "The 'name' field is of type 'string`",
  }),

  email: Joi.string().required().messages({
    "any.required": "missing required email field",
    "string.base": "The 'email' field is of type 'string`",
  }),

  phone: Joi.string().required().messages({
    "any.required": "missing required phone field",
    "string.base": "The 'phone' field is of type 'string`",
  }),
});

export const contactUpdateSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string(),
});
