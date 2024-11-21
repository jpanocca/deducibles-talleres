const { obtieneTipoMoneda, obtieneTipo } = require("./deducibleMapper");

module.exports = {
    async evaluaPatron1(texto){
        const valoresRoboParcial = /Robo Parcial (\d+)% del monto a indemnizar, mínimo (US\$|S\/.)(\d+\.\d+)/i.exec(texto);
        if( valoresRoboParcial && valoresRoboParcial.length > 0 ){
            const copago = valoresRoboParcial[3];
            const deducible = valoresRoboParcial[1];
            const marca = "NO MARCA";
            const moneda = await obtieneTipoMoneda(valoresRoboParcial[2]);
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
        }
        else return {};
    },
    async evaluaPatron2(texto){
        const valores = /VEHA07\s+(\d+)% del monto indemnizable, mínimo (US\$|S\/.) (\d+)/i.exec(texto);
        if ( valores && valores.length > 0 ) {
            const copago = valores[3];
            const deducible = valores[1];
            const marca = "NO MARCA";
            const moneda = await obtieneTipoMoneda(valores[2]);
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
        }
        else return {};        
    },
    async evaluaPatron3(text){
        const regex = /(\d+)%\s+.*?(\w{2}\$)\s+(\d+\.\d{2})\s+/gm;
        let match;
        const payload = [];
        while ((match = regex.exec(text)) !== null) {
        const [_, deducible, moneda, copago, tipo] = match;
        payload.push({
            copago: parseInt(copago),
            deducible: parseInt(deducible),
            moneda: await obtieneTipoMoneda(moneda),
            tipo: await obtieneTipo(tipo),
            marca: 'NO MARCA',
            taller: 'NO TALLER'
            });
        }
        return { payload };     
    }
}