const express = require('express');
const { connect } = require('mongoose');
require('dotenv').config();
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/shiprocket', require('./routes/shiprocket'));

app.listen(3000, async () => {
    try {
        const { connection } = await connect(
            'mongodb://127.0.0.1:27017/shiprocket'
        );
        console.info(
            'server is running on http://localhost:3000, mongodb connected',
            connection.host
        );
    } catch (error) {
        console.error(error);
    }
});
