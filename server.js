const express = require('express');
const mongoose =require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const books = require('./routes/api/books');
const search = require('./routes/api/search');

const app = express();

app.use(bodyParser.json());

const db = process.env.MONGODB_URI || "mongodb://emersonbook:Nicolas2017@ds153785.mlab.com:53785/heroku_5htxgcjc";

//connect
mongoose.connect(db)
    .then(() => console.log('mongoDB connected...'))
    .catch(err => console.log(err));


app.use('/api/books', books);
app.use('/api/search', search);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));