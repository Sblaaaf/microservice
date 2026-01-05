import * as Joi from 'joi';

export const smsSchema = Joi.object({
    phoneNumber: Joi.string().pattern(/^\+?[1-9]\d{1,14}$/).required(),
    message: Joi.string().min(1).max(160).required(),
});
