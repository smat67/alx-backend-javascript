// import express from 'express';
// import router from './routes/index.js';
const express = require('express');
const router = require('./routes/index');

const app = express();

app.use(router);

app.listen(1245);

module.exports = app;
