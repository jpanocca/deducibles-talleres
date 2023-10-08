const DeducibleSupport = require("./deducibleSupport");
const { validador } = require("./deducibleValidator");

module.exports = {
    async evaluaPatron(texto){
        try {
            let resultado;
            const metodosDisponibles = {
                evaluaPatron1: DeducibleSupport.evaluaPatron1,
                evaluaPatron2: DeducibleSupport.evaluaPatron2,
                evaluaPatron3: DeducibleSupport.evaluaPatron3
            }
            const metodos = ['evaluaPatron1', 'evaluaPatron2', 'evaluaPatron3'];
            for (const metodo of metodos) {
                const funcionMetodo = metodosDisponibles[metodo];
                resultado = await funcionMetodo(texto);
                const validacion = await validador(resultado);
                if(!validacion.error){
                    break;
                }
            }
            return resultado;            
        } catch (error) {
            return error;
        }    
    }
}