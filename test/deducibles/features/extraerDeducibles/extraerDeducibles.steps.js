const { loadFeature, defineFeature } = require('jest-cucumber');
const { extraerDeducible } = require("../../../../src/deducibleController");

const feature = loadFeature('./extraerDeducibles.feature', {
    loadRelativePath: true,
    errors: true
  });
  defineFeature(feature, (test) => {
    test('Extrae los deducibles correctamente', ({
      given,
      when,
      then
    }) => {
      let request;
      let respuesta;
      given(/^se invoca el metodo de extraccion de deducibles del texto (.*)$/, async ( textoPlano ) => {
        request = textoPlano;
      });
  
      when('se invoca a demanda', async () => {
        respuesta = await extraerDeducible(request);
      });
  
      then('se mostrará el objeto', () => {
        expect(respuesta).toEqual('$20');
      });
    });
  });
  