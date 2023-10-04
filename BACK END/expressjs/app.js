const express = require('express');
const app = express();
const port = 3000;

//Routing
app.get('/api/v1/categories', (req, res) => {
    res.send('Hello World');
} )

app.post('/api/v1/categories', (req, res) => {
    res.send("Respone dari method post")
})

app.get('/api/v1/categories/:nama', (req, res) => {
    res.send(`ini endpoint dari route params ${req.params.nama}`)
})



app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
})