const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema({
  birth: { type: String },
  death: { type: String },
  gender: { type: String },
  hair: { type: String },
  height: { type: String },
  name: { type: String, required: true },
  race: { type: String },
  realm: { type: String },
  spouse: { type: String }
});

module.exports = mongoose.model("Character", CharacterSchema);
