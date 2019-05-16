const factory = require('./factory');
const isIp = require('is-ip');
const middleware = {
    create: async function(req, res){
        if(!isIp(req.body.ipv4)){
            res.status(422).json({'message':'That is not an ipv4 address'});
            return;
        }
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
            res.status(204).json({'message':'Gateway deleted.'});
        } catch (error) {
            res.status(403).json({'message':error});
        }
    },
    readDevices: async function(req, res){
        try {
            let response = await factory.readDevices(req.params);
            res.json(response);
        } catch (error) {
            res.status(403).json({'message':error});
        }
    },
    addDevices: async function(req, res){
        try {
            let response = await factory.addDevices(req.params, req.body);
            res.json(response);
        } catch (error) {
            res.status(403).json({'message':error});
        }
    },
};

module.exports = middleware;