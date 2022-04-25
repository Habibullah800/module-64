const express = require('express');
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hi node World! bro')
});

app.use(express.json())

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '017579701766' },
    { id: 2, name: 'rahima', email: 'rahima@gmail.com', phone: '01757901766' },
    { id: 3, name: 'korima', email: 'korima@gmail.com', phone: '01757097176' },
    { id: 4, name: 'hasina', email: 'hasina@gmail.com', phone: '01779717660' },
    { id: 5, name: 'sanjana', email: 'sanjana@gmail.com', phone: '01757717066' },
    { id: 6, name: 'srabonti', email: 'srabonti@gmail.com', phone: '01759071766' },
    { id: 7, name: 'sabila', email: 'sabila@gmail.com', phone: '01757971066' },
]
app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLocaleLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(matched)

    }
    else {
        res.send(users);
    }

});

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(u => u.id == id);
    res.send(user);
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1
    users.push(user)
    res.send(user)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})