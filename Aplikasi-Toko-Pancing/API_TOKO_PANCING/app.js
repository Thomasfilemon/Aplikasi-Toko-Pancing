const express = require("express");
const app = express();
const dbConfig = require("./config/db_config.js");
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

mongoose
.connect(dbConfig.mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
    console.log("terhubung ke mongoDB");
})
.catch((err) => {
  console.log(err);
  console.log("Gagal terhubung ke mongoDB");
});

app.use("/gambar-barang", express.static("public/images"));
app.use("/users", require("./routes/userRoute.js"));
app.use("/kategori", require("./routes/kategoriRoute.js"));
app.use("/barang", require("./routes/barangRoute.js"));
app.use("/keranjang", require("./routes/keranjangRoute.js"));
app.use("/transaksi", require("./routes/transaksiRoute.js"));

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// //params
// app.get("/nama/:nama/:umur", (req, res) => {
//     let nama = req.params.nama;
//     let umur = req.params.umur;

//     res.send("Nama : "+nama+" Umur : "+umur);
// })

// //body
// app.post("/dataDiri", (req, res) => {
//     let dataDiri = req.body;
//     res.json(dataDiri);
// })

// //query
// app.get("/query", (req, res) => {
//     let nama = req.query.nama;
//     let umur = req.query.umur;

//     res.send("Nama : " + nama + " Umur : " + umur);
// })

app.listen(3000, ()=>{
  console.log("server is running on port 3000")
})
