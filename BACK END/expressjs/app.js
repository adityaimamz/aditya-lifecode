const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

const CategoriesRouter = require('./routes/categories');
const AuthRouter = require('./routes/AuthRouter');
const ProductsRouter = require('./routes/productRouter');
const morgan = require('morgan');
const cookieParse = require('cookie-parser');
const {errorHandler, notFound} = require('./middleware/errorMiddleware');

dotenv.config();

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cookieParse());
app.use(morgan('dev'));
app.use(cors());

//routing
app.use('/api/v1/categories', CategoriesRouter);
app.use('/api/v1/auth', AuthRouter);
app.use('/api/v1/product', ProductsRouter);

app.use(notFound)
app.use(errorHandler);


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
})