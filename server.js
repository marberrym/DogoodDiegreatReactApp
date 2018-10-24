const express = require('express');
const bodyParser = require('body-parser');
const expressJwt = require('express-jwt');
const secret = process.env.JWTSECRET;
const allowCORS = require('./middleware/allow-CORS');

const app = express();
const protect = expressJwt({
    secret,
    getToken: (req) => req.headers.token
});

const signup = require('./routes/signup');
const login = require('./routes/login');
const validate = require('./routes/validate');

app.use(bodyParser.json());
app.use(allowCORS);

//signup route
app.post('/signup', signup);

//login route
app.post('/login', login);

//validate existing token
app.get('/validate', validate);

app.listen(5000)