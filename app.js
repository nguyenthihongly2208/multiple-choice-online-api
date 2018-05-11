const db = require('./utils/db');
const app = require('./routes');

app.listen(3000, function() {
    console.log('listening on 3000');
})
