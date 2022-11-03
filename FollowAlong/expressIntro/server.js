const express = require('express');
const app = express();
const port = 8001;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get('/', (req,res) => {
    return res.json({hello: 'world'});
})

app.get('/api/cities', (req,res) => {
    const cities = [
        {
            id: 1,
            name: 'Aogashima',
            population: 170
        },
        {
            id: 2,
            name: 'Longyearbyen',
            population: 2144
        },
        {
            id: 3,
            name: 'Kennedy Meadows',
            population: 28
        }
    ];
    return res.json(cities);
})

app.post('/api/cities', (req,res) => {
    console.log(req.body);

    return res.json({
        status: 'success',
        city: req.body
    })
})

app.delete('/api/cities/:id', (req,res) => {
    console.log(req.params.id)

    return res.json({
        status: "success",
        msg:`deleted city id: ${req.params.id}`
    })
})

app.put('/api/cities/:id', (req,res) => {
    console.log(req.body);
    return res.json({
        status: 'success',
        msg: `Updated city id: ${req.params.id}`
    })
})

app.get('/api/cities/:id', (req,res) => {
    return res.json({
        id: req.params.id
    })
})

app.listen(port,() => {
    console.log(`Listening on port ${port} for requests to respond to.`);
})