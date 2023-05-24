const mongoose = require('mongoose');

//! Import konfigurasi terkait MongoDB dari config/index.js
const { urlDb } = require('../config');

mongoose.connect(urlDb);

//! Simpan koneksi dalam constant
const db = mongoose.connection;

module.exports = db ; 