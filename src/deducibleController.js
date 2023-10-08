const { evaluaPatron } = require("./deducibleService");

module.exports = {
  async extraerDeducible(rq){
    const result = evaluaPatron(rq.payload.text);
    return result;
  }
}