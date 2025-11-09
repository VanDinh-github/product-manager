const express = require('express');
const router = require('./routes/client/index.route');

const app = express();
const port = 3000;

//- Set Pug as the view engine
app.set('view engine', 'pug');
app.set('views', './views');

//- Use the router
router(app);

app.listen(port, () => {
    console.log('Server is running on http://localhost:' + port);
})
