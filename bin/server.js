const app = require('../src/app');
const conn = require('../src/db/connection');

const PORT = process.env.PORT || 3000;

function normalizaPort(val) {
    const PORT = parseInt(val, 10);
    if (isNaN(PORT)) {
        return val;
    }

    if (PORT >= 0) {
        return PORT;
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

app.listen(PORT, function () {
    console.log(`app listening on PORT ${PORT}`)
})

