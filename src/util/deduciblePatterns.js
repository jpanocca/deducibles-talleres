module.exports = {
    valoresRoboParcialPattern: /Robo Parcial (\d+)% del monto a indemnizar, mínimo (US\$|S\/.)(\d+\.\d+)/i,
    valoresVEHA07Pattern: /VEHA07\s+(\d+)% del monto indemnizable, mínimo (US\$|S\/.) (\d+)/i,
    evaluaPatron3Pattern: /(\d+)%\s+.*?(\w{2}\$)\s+(\d+\.\d{2}) en Talleres ([\w\s]+)\s+/gm,
    evaluaPatron4Pattern: /- Ausencia de control: (\d+\.?\d*)% del monto indemnizar, mínimo (US\$|S\/.) (\d+\.?\d*) \(Talleres Afiliados(?: (Multimarca))?\)/g,
    evaluaPatronPattern: {
        deduciblePattern: /(por Evento \d+%|ausencia de control\: \d+%|por robo parcial \d+%|\d+% del monto a indemnizar|\d+% del monto indemnizable|\d+% del monto del siniestro|\d+% del del monto del siniestro|ausencia de control: \d.+%)/gi,
        copagoPattern: /m[ií]nimo\s*([A-Z]{1,3}\$?\s*[\d,.]+)|m[ií]nimo de\s*([A-Z]{1,3}\$?\s*[\d,.]+)/gi,
        tallerPattern: /talleres*([a-zA-Z\s]+)|otros talleres|TALLERES*([a-zA-Z\s]+)/gi,
        tipoTallerPattern: /talleres afiliados\s*([a-zA-Z\s]+?)(?=\s|$)|talleres afiliados*([a-zA-Z\s]+)/gi,
        cantidadTalleresPattern: /Talleres\s*/gi,
        marcaPattern: /\bmarca\b\s*(.*)/gi
    },
    evaluaPatron5Pattern: /(Por evento \d+\.?\d*% del monto a indemnizar, mínimo (US\$|S\/\.) \d+\.\d{2}, en talleres afiliados|Siniestros atendidos en red de talleres afiliados multimarca\s+\d+\.?\d*% del monto a indemnizar, mínimo (US\$|S\/\.) \d+\.\d{2}|Por evento, Marca Mercedes Benz, BMW, Audi(?:, Porsche Cayenne)?: \d+% del monto a indemnizar, mínimo (US\$|S\/\.) \d+\.\d{2} en talleres afiliados(?: multimarca)?)/gi
};