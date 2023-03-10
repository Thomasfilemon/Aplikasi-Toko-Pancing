const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;

const keranjangSchema = new mongoose.Schema({
    idUser: {
        type: objectId
    },
    idBarang: {
        type: objectId,
    },
    jumlahBarang: {
        type: Number,
    }
});

module.exports = mongoose.model("keranjang", keranjangSchema);
