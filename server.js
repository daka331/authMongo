require('./config/db');

const app = require('express')();
const port = 3000;
const cors = require('cors');

const UserRouter = require('./api/auth');

app.use(cors());

const bodyParser = require('express').json;
app.use(bodyParser());

app.use('/user', UserRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});