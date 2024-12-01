const { obtieneTipoMoneda, obtieneTipo } = require("./deducibleMapper");
const patterns = require("./util/deduciblePatterns");

const DEFAULTS = {
    MARCA: "NO MARCA",
    TIPO: "NO TIPO",
    TALLER: "NO TALLER"
};

const CONSTANTS = {
    MULTIMARCA: "multimarca",
    TALLERES: "talleres",
    TALLERES_AFILIADOS: "talleres afiliados",
    AFILIADOS: "afiliados",
    MULTIMARCA_CAP: "Multimarca"
};

async function crearResultado(deducible, copago, moneda, tipo = DEFAULTS.TIPO, marca = DEFAULTS.MARCA, taller = DEFAULTS.TALLER) {
    return {
        payload: [
            {
                copago: parseFloat(copago),
                deducible: parseInt(deducible),
                marca: marca,
                moneda: await obtieneTipoMoneda(moneda),
                taller: taller,
                tipo: tipo
            }
        ]
    };
}

async function evaluaPatronGenerico(texto, pattern) {
    const valores = pattern.exec(texto);
    if (valores) {
        const [_, deducible, moneda, copago] = valores;
        return crearResultado(deducible, copago, moneda);
    }
    return {};
}

module.exports = {
    async evaluaPatron1(texto) {
        return evaluaPatronGenerico(texto, patterns.valoresRoboParcialPattern);
    },

    async evaluaPatron2(texto) {
        return evaluaPatronGenerico(texto, patterns.valoresVEHA07Pattern);
    },

    async evaluaPatron3(text) {
        const regex = patterns.evaluaPatron3Pattern;
        const payload = [];
        let match;
        while ((match = regex.exec(text)) !== null) {
            const [_, deducible, moneda, copago, tipo] = match;
            payload.push({
                copago: parseFloat(copago),
                deducible: parseInt(deducible),
                moneda: await obtieneTipoMoneda(moneda),
                tipo: await obtieneTipo(tipo),
                marca: DEFAULTS.MARCA,
                taller: DEFAULTS.TALLER
            });
        }
        return { payload };
    },

    async evaluaPatron4(text) {
        const regex = patterns.evaluaPatron4Pattern;
        const matches = [];
        let match;
        while ((match = regex.exec(text)) !== null) {
            matches.push({
                "deducible": parseFloat(match[1]),
                "copago": parseFloat(match[3]),
                "moneda": await obtieneTipoMoneda(match[2]),
                "tipo": match[4] || DEFAULTS.TIPO,
                "marca": DEFAULTS.MARCA,
                "taller": DEFAULTS.TALLER
            });
        }
        return { payload: matches };
    },

    async evaluaPatron(text) {
        text = text.toLowerCase();
        const resultados = [];
        const patrones = patterns.evaluaPatronPattern;

        const deduciblesEncontrados = text.match(patrones.deduciblePattern) || [];
        const copagosEncontrados = text.match(patrones.copagoPattern) || [];
        const talleresEncontrados = text.match(patrones.tallerPattern) || [];
        const tiposTallerEncontrados = text.match(patrones.tipoTallerPattern) || [];
        const cantidadTalleresEncontrados = text.match(patrones.cantidadTalleresPattern) || [];

        const totalMatches = Math.min(
            deduciblesEncontrados.length,
            copagosEncontrados.length,
            cantidadTalleresEncontrados.length,
            talleresEncontrados.length
        );

        for (let i = 0; i < totalMatches; i++) {
            const copago = Number(copagosEncontrados[i].match(/\d+(\.\d{1,2})?/)[0]);
            const moneda = copagosEncontrados[0].toUpperCase().includes('US$') ? 'USD' : 'PEN';
            const porcentajeDeducible = deduciblesEncontrados[i].trim().match(/(\d+%|\d.+%)/gi);
            const deducible = porcentajeDeducible ? Number(porcentajeDeducible[0].trim().split('%')[0]) : 0;
            const marcasEncontradas = text.match(patrones.marcaPattern);          

            const tipo =
                tiposTallerEncontrados && tiposTallerEncontrados[i]
                    ? tiposTallerEncontrados[i].split(CONSTANTS.TALLERES_AFILIADOS)[1]
                        ? tiposTallerEncontrados[i].split(CONSTANTS.TALLERES_AFILIADOS)[1].trim() !== ''
                            ? tiposTallerEncontrados[i].split(CONSTANTS.TALLERES_AFILIADOS)[1].trim()
                            : DEFAULTS.TIPO
                        : DEFAULTS.TIPO
                    : DEFAULTS.TIPO;

            const marca =
                marcasEncontradas && marcasEncontradas.length > 0 && marcasEncontradas[1] !== CONSTANTS.MULTIMARCA
                    ? marcasEncontradas[1].trim().split(CONSTANTS.MULTIMARCA)
                    : DEFAULTS.MARCA;

            const taller =
                (talleresEncontrados[i] && talleresEncontrados[i].includes(CONSTANTS.AFILIADOS)) || talleresEncontrados[i].includes('otros')
                    ? DEFAULTS.TALLER
                    : talleresEncontrados[i].split(CONSTANTS.TALLERES).length > 0
                        ? talleresEncontrados[i].split(CONSTANTS.TALLERES)[1].trim()
                        : DEFAULTS.TALLER;

            const deducibleInfo = {
                deducible,
                copago,
                moneda,
                tipo: tipo === CONSTANTS.MULTIMARCA ? CONSTANTS.MULTIMARCA_CAP : tipo,
                marca,
                taller: taller.toUpperCase(),
            };
            resultados.push(deducibleInfo);
        }

        return { payload: resultados };
    },

    async evaluaPatron5(text) {
        const regex = patterns.evaluaPatron5Pattern;

        const matchesText = [];
        const matches = [];
        let match;
        while ((match = regex.exec(text)) !== null) {
            matchesText.push(match[0].trim());
        }
        matchesText.forEach((match) => {
            const deducibleMatch = /\d+\.?\d*%/.exec(match);
            const copagoMatch = /(US\$|S\/\.) \d+\.\d{2}/.exec(match);
            const marcaMatch = /Mercedes Benz, BMW, Audi(?:, Porsche Cayenne)?/.exec(match);
            const deducible = deducibleMatch ? deducibleMatch[0] : null;
            const copago = copagoMatch ? copagoMatch[0].split(/US\$|S\/\./)[1].trim() : null;
            const taller = DEFAULTS.TALLER;
            const marca = marcaMatch ? marcaMatch[0].toUpperCase() : DEFAULTS.MARCA;
            const tipo = match.includes(CONSTANTS.MULTIMARCA) ? CONSTANTS.MULTIMARCA_CAP : DEFAULTS.TIPO;
            const moneda = copagoMatch[0].includes('US$') ? 'USD' : 'PEN';
            matches.push({
                "deducible": parseFloat(deducible),
                "copago": parseFloat(copago),
                moneda,
                "tipo": tipo,
                "marca": marca,
                "taller": taller
            });
        });
        return { payload: matches };
    }
}