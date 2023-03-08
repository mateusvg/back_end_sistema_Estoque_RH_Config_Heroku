const app = require('../src/app');
const conn = require('../src/db/connection');

const PORT = process.env.PORT || 3000;

conn.connect((err) => {
    if (err) {
        console.log('Erro connecting to database...', err)
        return
    }
    console.log('Connection established!')
})

app.listen(PORT, function () {
    console.log(`app listening on port ${PORT}`)
})
