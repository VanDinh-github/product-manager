const express = require('express');
const router = require('./routes/client/index.route');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

//- Set Pug as the view engine
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));
//- Use the router
router(app);

app.listen(port, () => {
    console.log('Server is running on http://localhost:' + port);
    console.log('New update');
})
