const express = require('express');
const app = express();
const port = 3000;
const morgan = require('./middleware/morgan');

app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));


app.use(express.json());

// Rutas
const entriesRoutes = require('./routes/entries.routes');
const authorsRoutes =require("./routes/authors.routes");
app.use('/api/entries', entriesRoutes);
app.use('/api/authors', authorsRoutes);


const error404 = require('./middleware/error404');
app.use('*', error404);


app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
