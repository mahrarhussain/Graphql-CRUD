const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  phone: { type: String },
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
