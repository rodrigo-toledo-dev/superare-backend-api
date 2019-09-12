const mongoose = require('mongoose');

const Server = mongoose.model('Server');

module.exports = {
  async index(req, res){
    const servers = await Server.find();
    return res.json(servers);
  },

  async find(req, res){
    const server = await Server.findById(req.params['_id']);
    return res.json(server);
  },

  async save(req, res){
    let server = null;
    if(req.params._id == undefined){
      server = await Server.create(req.body);
    }else{
      server = await Server.findByIdAndUpdate(req.params._id, req.body, { new: true });
    }

    return res.json(server);
  },

  async destroy(req, res){
    let server = null;
    if(req.params['_id'] != undefined){
      server = await Server.findByIdAndRemove(req.params['_id']);
    }

    return res.json(server);
  }
};