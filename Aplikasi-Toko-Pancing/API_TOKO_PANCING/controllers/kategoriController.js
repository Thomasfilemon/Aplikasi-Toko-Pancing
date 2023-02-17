const kategoriModel = require("../models/kategoriModel.js");
const objectId = require("mongoose").Types.ObjectId;

exports.input = (data) =>
    new Promise((resolve, reject) => {
        kategoriModel
        .create(data).then(()=> {
                resolve({
                    status: true,
                    msg: "Berhasil menambah kategori",
                });
        })
        .catch((err) => {
            reject({
            status: false,
            msg: "Terjadi kesalahan pada server",
            });
        });
    });

exports.getAllKategori = () =>
    new Promise((resolve, reject) => {
        kategoriModel.find()
            .then((kategoris) => {
                if(kategoris.length > 0) {
                    resolve({
                        status: true,
                        msg: "Berhasil memuat data",
                        data: kategoris,
                    });
                } else{
                    reject({
                        status: false,
                        msg: "Tidak ada data",
                    })
                }
            }).catch((err) => {
                reject({
                    status: false,
                    msg: "Terjadi kesalahan pada server"
                });
            });
    });

    exports.getKategoriById = (idKategori) =>
        new Promise((resolve, reject) => {
            kategoriModel.findOne({ id: objectId(idKategori) })
                .then((kategori) => {
                    if(kategori) {
                        resolve({
                            status: true,
                            msg: "Berhasil memuat data",
                            data: kategori,
                        })
                    } else {
                        reject ({
                            status: false,
                            msg: "Kategori tidak ditemukan"
                        })
                    }
                }).catch((err) => {
                    reject({
                        status: false,
                        msg: "Terjadi kesalahan pada server",
                    })
                })
        });

    exports.update = (idKategori, data) =>
        new Promise((resolve, reject) => {
            kategoriModel.updateOne({id: objectId(idKategori)}, data)
            .then(() => {
                resolve({
                    status: true,
                    msg: "Data berhasil di update",
                });
            }).catch((err) => {
                reject({
                    status: false,
                    msg: "Terjadi kesalahan pada server",
                })
            });
        });

    exports.delete = (idKategori) =>
        new Promise((resolve, reject) => {
            kategoriModel.deleteOne({id: objectId(idKategori)})
            .then(() => {
                resolve({
                    status: true,
                    msg: "Data berhasil dihapus",
                })
            }).catch((err) => {
                reject({
                    status: false,
                    msg: "Terjadi kesalahan pada server",
            })
            })
        })