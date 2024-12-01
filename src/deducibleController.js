const { evaluaPatron } = require("./deducibleService");

module.exports = {
  async extraerDeducible(request){
    return evaluaPatron(request.payload.text);
  }
}