const joi = require("joi");

const UserRegistration = () =>
  joi.object({
    user_email: joi.string().email().required(),
    user_password: joi.string().required().length(8),
    user_type: joi.string(),
  });

module.exports = {
  UserRegistration,
};
