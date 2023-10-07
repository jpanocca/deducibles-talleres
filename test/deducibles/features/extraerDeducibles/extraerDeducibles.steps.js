const { loadFeature, defineFeature } = require('jest-cucumber');
const { extraerDeducible } = require("../../../../src/deducibleController");
const { MOCKS } = require('./mockData');

const feature = loadFeature('./extraerDeducibles.feature', {
    loadRelativePath: true,
    errors: true
  });
  defineFeature(feature, (test) => {
    test('Póliza con deducible texto plano', ({
      given,
      when,
      then
    }) => {
      let request;
      let respuesta;
      given(/^la póliza tiene un deducible en forma del (.*)$/, async ( texto ) => {
        request = MOCKS[texto];
      });
  
      when('ejecutamos el conversor de deducible', async () => {
        respuesta = await extraerDeducible(request);
      });
  
      then(/^obtenemos la parametrización del deducible en (.*)$/, async ( detalle) => {
        expect(respuesta).toEqual(MOCKS[detalle]);
      });
    });
  });
  