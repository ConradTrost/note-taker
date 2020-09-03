const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('./public'));

const { notes } = require('./db/db.json');
const PORT = process.env.PORT || 3001;

// const getNotes = require('./public/assets/js/index');


app.post('/api/notes', (req, res) => {
    // req.body.id = notes.length.toString();
    notes.push(req.body);
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({ notes: notes }, null, 2)
        );
    res.json(req.body);
})

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './db/db.json'));
})

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
})
