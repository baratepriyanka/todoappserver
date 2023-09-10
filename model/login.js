const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
    email: {
        type: "String",
        required: true,
    },
     password: {
        type: "String",
        required: true,
    },
    // description: {
    //     type: "String",
    // },
});

const login = mongoose.model("login", loginSchema);

module.exports = login;