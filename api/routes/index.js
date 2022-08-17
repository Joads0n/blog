const rolesRoute = require('./rolesRoute');
const usersRoute = require('./usersRoute');
const bodyParser = require('body-parser');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(rolesRoute);
    app.use(usersRoute);
}