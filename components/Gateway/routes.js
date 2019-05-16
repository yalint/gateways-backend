var middleware = require('./middleware');
module.exports = (router) => {
    router.post('/gateways', middleware.create);
    router.post('/gateways/:uid/devices', middleware.addDevices);
    router.get('/gateways/:uid/devices', middleware.readDevices);
    router.get('/gateways', middleware.readAll);
    router.get('/gateways/:uid', middleware.readOne);
    router.put('/gateways/:uid', middleware.update);
    router.delete('/gateways/:uid', middleware.delete);
};