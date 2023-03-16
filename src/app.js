const express = require('express');
const app = express();

const cors = require('cors');
// var corsOptions = {
// 	origin: "http://localhost:3000"
// };
app.use(cors());app.use((req, res, next) => {
    //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
    //Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE,PATCH');
    app.use(cors());
    next();
});

//Rotas
const index = require('./routes/index');
const formRoute = require('./routes/formRoute');
const adminUserRoute = require('./routes/adminUserRoute');
const statusRoute = require('./routes/statusRoute');
const adminTableData = require('./routes/adminTableData')
const adminSettings = require('./routes/adminSettings')
const adminStock = require('./routes/adminStock')
const adminSale = require('./routes/adminSale')
const adminCategory = require('./routes/adminCatagory')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', index);
app.use('/form', formRoute);
app.use('/admin', adminUserRoute)
app.use('/status', statusRoute)
app.use('/admin/table', adminTableData)
app.use('/admin/stock', adminStock)
app.use('/admin/sale', adminSale)
app.use('/admin/settings', adminSettings)
app.use('/admin/category', adminCategory)

module.exports = app;