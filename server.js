const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(80, () => {
    console.log('listening on 8080');
})

app.get('/forward', function(req, res) {
    res.redirect(req.query['go']);
})
