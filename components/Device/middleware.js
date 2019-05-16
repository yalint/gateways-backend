const factory = require('./factory');
const middleware = {
    create: async function(req, res){
        try {
            let response = await factory.create(req.body);
            res.json(response);
        } catch (error) {
            res.status(403).json({'message':error});
        }
    },
    readAll: async function(req, res){
        try {
            let response = await factory.readAll();
            res.json(response);
        } catch (error) {
            res.status(403).json({'message':error});
        }
    },
    readOne: async function(req, res){
        try {
            let response = await factory.readOne(req.params);
            res.json(response);
        } catch (error) {
            res.status(403).json({'message':error});
        }
    },
    update: async function(req, res){
        try {
            let response = await factory.update(req.params, req.body);
            res.json(response);
        } catch (error) {
            res.status(403).json({'message':error});
        }
    },
    delete: async function(req, res){
        try {
            await factory.delete(req.params);
            res.status(204).json({'message':'Device deleted.'});
        } catch (error) {
            res.status(403).json({'message':error});
        }
    },
    readGateway: async function(req, res){
        try {
            let response = await factory.readGateway(req.params);
            res.json(response);
        } catch (error) {
            res.status(403).json({'message':error});
        }
    },
};

module.exports = middleware;