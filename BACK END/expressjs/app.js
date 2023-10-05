const express = require('express');
const app = express();
const port = 3000;
const CategoriesRouter = require('./routes/categories');
const morgan = require('morgan');



app.use(express.json())
// app.use((req, res, next) => {
//     req.requestTime = new Date().toISOString();
//     next();
// });

app.use(morgan('dev'));

app.use('/api/v1/categories', CategoriesRouter);


app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
})