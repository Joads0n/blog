const bodyParser = require('body-parser');
const roles = require('./rolesRoute');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(roles);
}