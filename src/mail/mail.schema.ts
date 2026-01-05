import * as Joi from 'joi';

export const mailSchema = Joi.object({
    email: Joi.string().email().required(),
    subject: Joi.string().optional(),
    html: Joi.string().optional(),
});
