const express = require('express');
const app = express();
const port = 3000;
const CategoriesRouter = require('./routes/categories');

app.use(express.json());

app.use('/api/v1/categories', CategoriesRouter);


app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
})