var middleware = require('./middleware');
module.exports = (router) => {
    router.post('/devices', middleware.create);
    router.get('/devices', middleware.readAll);
    router.get('/devices/:uid', middleware.readOne);
    router.put('/devices/:uid', middleware.update);
    router.delete('/devices/:uid', middleware.delete);
    router.get('/devices/:uid/gateway', middleware.readGateway);
};