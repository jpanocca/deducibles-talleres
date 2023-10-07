const Joi = require('@hapi/joi');
module.exports = {
    async validador(rq){
        const schema = Joi.object({
            payload: Joi.array().required().items(Joi.object({
                copago: Joi.number().required(),
                deducible: Joi.number().required(),
                marca: Joi.string().required(),
                moneda: Joi.string().required(),
                taller: Joi.string().required(),
                tipo: Joi.string().required()
                }))
            });
        return schema.validate(rq);
    }
}