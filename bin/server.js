const app = require('../src/app');
const conn = require('../src/db/connection');

const PORT = process.env.PORT || 3000;

function normalizaPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}
conn.connect((err) => {
    if (err) {
        console.log('Erro connecting to database...', err)
        return
    }
    console.log('Connection established!')
})

app.listen(port, function () {
    console.log(`app listening on port ${port}`)
})