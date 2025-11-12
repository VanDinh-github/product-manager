const express = require('express');
const app = express();

const router = require('./routes/client/index.route');
const routerAdmin = require('./routes/admin/index.route.js');

require('dotenv').config();
const port = process.env.PORT;

const database = require('./config/database.js')
database.connect();

const systemConfig = require('./config/system.js')
//- Set Pug as the view engine
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));

//App locals Variables
app.locals.prefixAdmin = systemConfig.prefixAdmin;

//- Use the router
routerAdmin(app);
router(app);

app.listen(port, () => {
    console.log('Server is running on http://localhost:' + port);
    console.log('New update');
})
