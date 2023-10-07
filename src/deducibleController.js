module.exports = {
  async extraerDeducible(payload){
    console.log("Este es un texto: " + payload);
    return payload;
  }
}