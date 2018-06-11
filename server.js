const db = require('./utils/db');
const app = require('./routes');
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Listening on localhost:${ PORT }`))

app.get('/', (req, res) => {
    res.send('version 0.3.3')
})

// Add headers
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});