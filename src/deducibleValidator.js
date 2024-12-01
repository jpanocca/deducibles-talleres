const Joi = require('@hapi/joi');

const MARCAS_PERMITIDAS = ['NO MARCA', 'MERCEDES BENZ, BMW, AUDI, PORSCHE CAYENNE', 'MERCEDES BENZ, BMW, AUDI'];
const MONEDAS_PERMITIDAS = ['USD', 'PEN'];
const TIPOS_PERMITIDOS = ['Multimarca', 'NO TIPO'];
const TALLERES_PERMITIDOS = ['NO TALLER', 'NISSAN MAQUINARIAS', 'JAPAN AUTOS'];

module.exports = {
    async validador(rq){
        const schema = Joi.object({
            payload: Joi.array().min(1).required().items(Joi.object({
                copago: Joi.number().min(0.01).required(),
                deducible: Joi.number().min(0.01).required(),
                marca: Joi.string().valid(...MARCAS_PERMITIDAS).required(),
                moneda: Joi.string().valid(...MONEDAS_PERMITIDAS).required(),
                taller: Joi.string().valid(...TALLERES_PERMITIDOS).required(),
                tipo: Joi.string().valid(...TIPOS_PERMITIDOS).required()
                }))
            });
        return schema.validate(rq);
    }
}