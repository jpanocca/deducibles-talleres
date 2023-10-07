module.exports = {
    async evaluaPatron1(texto){        
        const copago = /Robo Parcial (\d+)% del monto a indemnizar, mínimo US\$(\d+\.\d+)/.exec(texto)[2];
        const deducible = /Robo Parcial (\d+)% del monto a indemnizar, mínimo US\$(\d+\.\d+)/.exec(texto)[1];
        const marca = "NO MARCA";
        const moneda = "USD";
        const taller = "NO TALLER";
        const tipo = "NO TIPO";

        const result = {
            payload: [
                {
                copago: parseFloat(copago),
                deducible: parseInt(deducible),
                marca: marca,
                moneda: moneda,
                taller: taller,
                tipo: tipo
                }
            ]
        };
        return result;
    },
    async evaluaPatron2(texto){ 
        const marca = "NO MARCA";

        const result = {
            payload: [
                {
                    marca: marca
                }
            ]
        };
        return result;
    }

}