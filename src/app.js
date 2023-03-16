const express = require('express');
const app = express();

const cors = require('cors');
// var corsOptions = {
// 	origin: "http://localhost:3000"
// };

// Adicionar os cabeçalhos Access-Control-Allow-Origin
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "https://front-end-atestado.herokuapp.com");
	res.header(
	  "Access-Control-Allow-Headers",
	  "Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
  });
  
app.use(cors());

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