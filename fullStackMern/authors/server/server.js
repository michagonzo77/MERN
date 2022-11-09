const express = require('express');
const cors = require('cors');
const {authorRouter} = require('./routes/author.routes')

const port = 8001;

// requiring / importing runs the file!
// This file doesn't need to export anything though, so we need a var.
require('./config/mongoose.config');


const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/authors', authorRouter);


app.listen(port, () => {
    console.log(`Listening on port ${port} for request to respond to.`)
});
