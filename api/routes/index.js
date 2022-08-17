const rolesRoute = require('./rolesRoute');
const usersRoute = require('./usersRoute');
const postsRoute = require('./postsRoute');
const bodyParser = require('body-parser');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(rolesRoute);
    app.use(usersRoute);
    app.use(postsRoute);
}