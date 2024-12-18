module.exports.MOCKS = {
    D22Request : {
        "payload": {
            "text": `(No Inclueye I.G.V.)
            Por evento 10% del monto a indemnizar, mínimo US$200.00
            Excepto para:
            Robo Parcial 10% del monto a indemnizar, mínimo US$150.00
            Siniestros atendidos en talleres preferenciales 10% del monto a indemnizar, mínimo US$150.00
            Robo de accesorios Musicales 10% del monto a indemnizar, mínimo 150.00
            Responsabilidad civil 10% del monto a indemnizar, mínimo 150.00
            Robo total solo se aseguran con GPS obligatorio hasta el segundo año de antigüedad, sin coaseguro. Tercer año, coaseguro 80/20`
        }
    },
    D22Response :  { 
        "payload": [ 
           {
               "deducible": 10,
               "copago": 150,
               "moneda": "USD", 
               "tipo": "NO TIPO", 
               "marca": "NO MARCA", 
               "taller": "NO TALLER" 
            } 
        ] 
   },
   D85Request : {
        "payload": {
            "text": `*Los siniestros, serán atendidos únicamente en la relación de talleres especiales descritos en la cláusula VEHA07
        20% del monto indemnizable, mínimo US$ 200
        20% del monto indemnizable para pérdida total`
        }
    },
   D85Response: {
        "payload": [
            {
                "deducible": 20,
                "copago": 200,
                "moneda": "USD",
                "tipo": "NO TIPO",
                "marca": "NO MARCA",
                "taller": "NO TALLER"
            }
        ]
    },
    D10Request :  {
        "payload": {
            "text": `* Por Evento 15% del monto del siniestro, mínimo US$ 150.00 en Talleres Afiliados Multimarca.
                * Por Evento 15% del monto del siniestro, mínimo US$ 250.00 en Talleres Afiliados.`
        }
    },
    D10Response : {
        "payload": [
           {
                "deducible": 15,
                "copago": 150,
                "moneda": "USD",
                "tipo": "Multimarca",
                "marca": "NO MARCA",
                "taller": "NO TALLER"
            },
           {
                "deducible": 15,
                "copago": 250,
                "moneda": "USD",
                "tipo": "NO TIPO",
                "marca": "NO MARCA",
                "taller": "NO TALLER"
            }
         ]
    },
    D86Request : {
        "payload": {
            "text": `- Ausencia de control: 25.00% del monto indemnizar, mínimo US$ 500.00 (Talleres Afiliados).
                - Ausencia de control: 25.00% del monto indemnizar, mínimo US$ 300.00 (Talleres Afiliados Multimarca).
                -Pérdida total por ausencia de control: 25.00% del monto a i`
        }
    },
    D86Response : {
        "payload": [
           {
                "deducible": 25,
                "copago": 500,
                "moneda": "USD",
                "tipo": "NO TIPO",
                "marca": "NO MARCA",
                "taller": "NO TALLER"
           },
          {
                "deducible": 25,
                "copago": 300,
                "moneda": "USD",
                "tipo": "Multimarca",
                "marca": "NO MARCA",
                "taller": "NO TALLER"
            }
         ]
    },
    D88Request : {
        "payload": {
            "text": `. 20% del monto a indemnizar, mínimo US$ 250.00, para todo y cada evento, en talleres afiliados
                20% del monto a indemnizar, mínimo US$ 200.00, para todo y cada evento, en talleres afiliados multimarca
                Pérdida Total, Incendio, Robo Total:  20% del monto del siniestro
                Conductor varón menor  de 25 años, 25% del monto del siniestro mínimo US$ 300, para todo y cada evento
                Rotura de lunas, solo para reposición de lunas nacionales sin deducible
                Vías no autorizadas 25% del monto a indemnizar, mínimo US$ 300.00, para todo y cada evento`
        }
    },
    D88Response : {
        "payload": [
          {
                "deducible": 20,
                "copago": 250,
                "moneda": "USD",
                "tipo": "NO TIPO",
                "marca": "NO MARCA",
                "taller": "NO TALLER"
          },
          {
                "deducible": 20,
                "copago": 200,
                "moneda": "USD",
                "tipo": "Multimarca",
                "marca": "NO MARCA",
                "taller": "NO TALLER"
            }
         ]
    },
    D314Request : {
        "payload": {
            "text": `10% del monto del siniestro, minimo US$ 500.00 en Talleres Nissan Maquinarias	
                10% del monto del siniestro, minimo US$ 700.00 en Otros Talleres 	
                En caso de discrepancia prevalece el mayor. No incluye I.G.V.`
        }
    },
    D314Response : {
        "payload": [
            {
                "deducible": 10,
                "copago": 500,
                "moneda": "USD",
                "tipo": "NO TIPO",
                "marca": "NO MARCA",
                "taller": "NISSAN MAQUINARIAS"
            },
            {
                "deducible": 10,
                "copago": 700,
                "moneda": "USD",
                "tipo": "NO TIPO",
                "marca": "NO MARCA",
                "taller": "NO TALLER"
            }
         ]
    },
    D1256Request : {
        "payload": {
            "text": "AUSENCIA DE CONTROL EN TALLERES JAPAN AUTOS, 22% del DEL MONTO DEL SINIESTRO, Mínimo de US$500.00. AUSENCIA DE CONTROL"
        }
    },
    D1256Response : {
        "payload": [
            {
                "deducible": 22,
                "copago": 500,
                "moneda": "USD",
                "tipo": "NO TIPO",
                "marca": "NO MARCA",
                "taller": "JAPAN AUTOS"
            }
         ]
    },
    D6007Request : {
        "payload": {
            "text": `Por evento 15.00% del monto a indemnizar, mínimo US$ 150.00, en talleres afiliados
                Siniestros atendidos en red de talleres afiliados multimarca  10.00% del monto a indemnizar, mínimo US$ 150.00
                Robo Parcial 15% del monto a indemnizar, mínimo US$ 150.00
                Accesorios musicales 10.00% del monto a indemnizar, mínimo US$ 150.00
                Hyundai Tucson, Santa Fe: coaseguro por Robo Total (nuevos y hasta 2 años de antigüedad) 20%. Si el vehículo cuenta con GPS, se excluirá el coaseguro.
                Por evento, Marca Mercedes Benz, BMW, Audi, Porsche Cayenne: 15% del monto a indemnizar, mínimo US$ 200.00 en talleres afiliados
                Por evento, Marca Mercedes Benz, BMW, Audi, Porsche Cayenne: 10% del monto a indemnizar, mínimo US$ 150.00 en talleres afiliados multimarca
                Marca Mercedes Benz, BMW, Audi, Porsche Cayenne
                Mayores a US$ 75,000 hasta US$ 100,000: 15% del monto a indemnizar, mínimo US$ 1,500 para daños por hueco o daños por despiste contra sardineles por llantas Runflat
                Menores a US$ 75,000: 15% del monto a indemnizar, mínimo US$ 800.00 para daños por hueco o daños por despiste contra sardineles por llantas Runflat
                Reposición de lunas nacionales, sin deducible`
        }
    },
    D6007Response : {
        "payload": [
           {
                "deducible": 15,
                "copago": 150,
                "moneda": "USD",
                "tipo": "NO TIPO",
                "marca": "NO MARCA",
                "taller": "NO TALLER"
            },
           {
                "deducible": 10,
                "copago": 150,
                "moneda": "USD",
                "tipo": "Multimarca",
                "marca": "NO MARCA",
                "taller": "NO TALLER"
            },
           {
                "deducible": 15,
                "copago": 200,
                "moneda": "USD",
                "tipo": "NO TIPO",
                "marca": "MERCEDES BENZ, BMW, AUDI, PORSCHE CAYENNE",
                "taller": "NO TALLER"
            },
           {
                "deducible": 10,
                "copago": 150,
                "moneda": "USD",
                "tipo": "Multimarca",
                "marca": "MERCEDES BENZ, BMW, AUDI, PORSCHE CAYENNE",
                "taller": "NO TALLER"
            }
         ]
    },
    D5936Request : {
        "payload": {
            "text": `Por evento 15.00% del monto a indemnizar, mínimo US$ 150.00, en talleres afiliados
                Siniestros atendidos en red de talleres afiliados multimarca  10.00% del monto a indemnizar, mínimo US$ 150.00
                Robo Parcial 15% del monto a indemnizar, mínimo US$ 150.00
                Accesorios musicales 10.00% del monto a indemnizar, mínimo US$ 150.00
                Conductor varón menor  de 25 años, 20% del monto del siniestro mínimo US$ 300, para todo evento (incluido pérdida total)
                Todo autos y SW mayores a US$ 50,000, Sistema de Rastreo Vehicular obligatorio para la cobertura de robo total.
                Toda Camioneta Rural/SUV mayor a US$ 50,000, Sistema de Rastreo Vehicular obligatorio para la cobertura de robo total
                Toyota Rav4, Land Cruiser, Land Crusier Prado, FJ Cruiser, Fortuner, Nissan Patrol, Pathfinder, Suzuki Grand Nomade, Honda CRV nuevas y hasta 2 años de antiguedad con Sistema de Rastreo Vehicular Obligatorio para cobertura de robo total (instalado y debidamente operativo con los mantenimientos solicitados por el proveedor).
                Reposición de lunas nacionales, sin deducible
                Por evento, Marca Mercedes Benz, BMW, Audi: 20% del monto a indemnizar, mínimo US$ 200.00 en talleres afiliados
                Por evento, Marca Mercedes Benz, BMW, Audi: 15% del monto a indemnizar, mínimo US$ 150.00 en talleres afiliados multimarca.`
        }
    },
    D5936Response : {
        "payload": [
            {
                "deducible": 15,
                "copago": 150,
                "moneda": "USD",
                "tipo": "NO TIPO",
                "marca": "NO MARCA",
                "taller": "NO TALLER"
            },
            {
                "deducible": 10,
                "copago": 150,
                "moneda": "USD",
                "tipo": "Multimarca",
                "marca": "NO MARCA",
                "taller": "NO TALLER"
            },
            {
                "deducible": 20,
                "copago": 200,
                "moneda": "USD",
                "tipo": "NO TIPO",
                "marca": "MERCEDES BENZ, BMW, AUDI",
                "taller": "NO TALLER"
            },
            {
                "deducible": 15,
                "copago": 150,
                "moneda": "USD",
                "tipo": "Multimarca",
                "marca": "MERCEDES BENZ, BMW, AUDI",
                "taller": "NO TALLER"
            }
        ]
    },
    D4514Request : {
        "payload": {
            "text": `Por evento 15.00% del monto a indemnizar, mínimo S/. 560.00, en talleres afiliados
                Excepto para:		
                Siniestros atendidos en red de talleres afiliados multimarca 10.00% del monto a indemnizar, mínimo S/. 420.00
                Robo Parcial 15% del monto a indemnizar, mínimo S/. 420.00
                Accesorios musicales 10.00% del monto a indemnizar, mínimo S/. 420.00
                Conductor varón menor  de 25 años, 20% del monto del siniestro mínimo S/. 840.00, para todo evento (incluído pédida total)
                Toyota Rav4, Land Cruiser, Land Crusier Prado, FJ Cruiser, Fortuner, Nissan Patrol, Pathfinder, Suzuki Grand Nomade, Honda CRV nuevas y hasta 2 años con Sistema de Rastreo Vehicular Obligatorio para cobertura de robo total.
                Camionetas Rurales/SUV mayores a S/. 140,000 Sistema de Rastreo Vehicular obligatorio para la cobertura de robo total.
                Por evento, Marca Mercedes Benz, BMW, Audi: 20% del monto a indemnizar, mínimo S/. 560.00 en talleres afiliados.
                Por evento, Marca Mercedes Benz, BMW, Audi: 15% del monto a indemnizar, mínimo S/. 420.00 en talleres afiliados multimarca.
                Para Volcaduras incluyendo Xtrail, Pathfinder, Patrol, rurales y suv: 20%, monto del siniestro, mínimo S/. 420.00+ IGV
                Imprudencia culposa 20% del siniestro mínimo S/. 840.00`
        }
    },
    D4514Response : {
        "payload": [
            {
                "deducible": 15,
                "copago": 560,
                "moneda": "PEN",
                "tipo": "NO TIPO",
                "marca": "NO MARCA",
                "taller": "NO TALLER"
            },
            {
                "deducible": 10,
                "copago": 420,
                "moneda": "PEN",
                "tipo": "Multimarca",
                "marca": "NO MARCA",
                "taller": "NO TALLER"
            },
            {
                "deducible": 20,
                "copago": 560,
                "moneda": "PEN",
                "tipo": "NO TIPO",
                "marca": "MERCEDES BENZ, BMW, AUDI",
                "taller": "NO TALLER"
            },
            {
                "deducible": 15,
                "copago": 420,
                "moneda": "PEN",
                "tipo": "Multimarca",
                "marca": "MERCEDES BENZ, BMW, AUDI",
                "taller": "NO TALLER"
            }
        ]
    }  
}