const express = require('express');
const prometheus = require('prom-client');

const app = express();
const port = 6000;

const counter = new prometheus.Counter({
    name: 'my_counter',
    help: 'Example counter metric',
});

app.get('/increment', (req, res) => {
    counter.inc();
    res.send('Counter incremented!');
});

app.get('/metrics', (req, res) => {
    res.set('Content-Type', prometheus.register.contentType);
    res.end(prometheus.register.metrics());
});

app.listen(port, () => {
    console.log(`Backend listening at http://localhost:${port}`);
});

