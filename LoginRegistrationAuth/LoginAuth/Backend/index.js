const http = require('http');
const app = require('./app');
const port = process.env.PORT || '8010';
const server = app.listen(port, () => {
    console.log('Port connected to: ' + port)
})


