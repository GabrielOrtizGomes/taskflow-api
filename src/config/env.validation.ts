import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),

  PORT: Joi.number().port().default(3000),

  MONGODB_URI: Joi.string().required(),

  JWT_ACCESS_SECRET: Joi.string().required(),

  JWT_REFRESH_SECRET: Joi.string().required(),

  JWT_ACCESS_EXPIRES_IN: Joi.string().default('15m'),

  JWT_REFRESH_EXPIRES_IN: Joi.string().default('7d'),

  REDIS_HOST: Joi.string().default('localhost'),

  REDIS_PORT: Joi.number().port().default(6379),
});
