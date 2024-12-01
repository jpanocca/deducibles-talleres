const DeducibleSupport = require("./deducibleSupport");
const { validador } = require("./deducibleValidator");

module.exports = {
    async evaluaPatron(texto) {
        try {
            const metodos = [
                DeducibleSupport.evaluaPatron,
                DeducibleSupport.evaluaPatron1,
                DeducibleSupport.evaluaPatron2,
                DeducibleSupport.evaluaPatron3,
                DeducibleSupport.evaluaPatron4,
                DeducibleSupport.evaluaPatron5
            ];

            for (const metodo of metodos) {
                const resultado = await metodo(texto);
                const validacion = await validador(resultado);
                if (!validacion.error) {
                    return resultado;
                }
            }

            throw new Error("No se encontró un patrón válido");

        } catch (error) {
            return { error: error.message };
        }
    }
}