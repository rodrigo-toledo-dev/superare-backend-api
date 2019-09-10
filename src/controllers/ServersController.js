const mongoose = require('mongoose');

const Server = mongoose.model('Server');

module.exports = {
  async index(req, res){
    const servers = await Server.find();
    return res.json(servers);
  },

  async save(req, res){
    let server = null;
    if(req.body._id == undefined){
      server = await Server.create(req.body);
    }else{
      server = await Server.findByIdAndUpdate(req.body._id, req.body, { new: true });
    }

    return res.json(server);
  },

  async destroy(req, res){
    let server = null;
    if(req.body._id != undefined){
      server = await Server.findByIdAndRemove(req.body._id);
    }

    return res.json(server);
  }
};