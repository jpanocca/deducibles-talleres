const { evaluaPatron } = require("./deducibleService");

module.exports = {
  async extraerDeducible(rq){
    return evaluaPatron(rq.payload.text);
  }
}