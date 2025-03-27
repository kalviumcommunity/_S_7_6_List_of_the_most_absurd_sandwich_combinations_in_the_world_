const Joi = require("joi");

// ✅ Joi Schema for validating Sandwich data
const sandwichSchema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    ingredients: Joi.array().items(Joi.string()).min(1).required(),
    absurdityLevel: Joi.number().min(1).max(10).required(),
    experience: Joi.string().required(),
    createdBy: Joi.string().required(),
});

// ✅ Middleware to validate request body
const validateSandwich = (req, res, next) => {
    const { error } = sandwichSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next(); // Move to the next middleware if validation passes
};

module.exports = { validateSandwich };
