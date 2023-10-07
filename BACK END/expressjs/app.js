const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

const CategoriesRouter = require('./routes/categories');
const AuthRouter = require('./routes/AuthRouter');
const morgan = require('morgan');

dotenv.config();


app.use(express.json())
app.use(morgan('dev'));
app.use(cors());

app.use('/api/v1/categories', CategoriesRouter);
app.use('/api/v1/auth', AuthRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
})