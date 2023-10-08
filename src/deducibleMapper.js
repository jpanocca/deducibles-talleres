const { MONEDA } = require("./domainConstant");

module.exports = {
    async obtieneTipoMoneda(codigo){
        let result = '';
        if (codigo === MONEDA.PEN.simbolo) {
            result = MONEDA.PEN.codigo;
        } else if( codigo === MONEDA.USD.simbolo ){
            result = MONEDA.USD.codigo;
        }
        return result;
    }
}