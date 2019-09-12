const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = {
  async index(req, res){
    const users = await User.find();
    return res.json(users);
  },

  async find(req, res){
    const user = await User.findById(req.params['_id']);
    return res.json(user);
  },

  async save(req, res){
    let user = null;
    if(req.params._id == undefined){
      user = await User.create(req.body);
    }else{
      user = await User.findByIdAndUpdate(req.params._id, req.body, { new: true });
    }

    return res.json(user);
  },

  async destroy(req, res){
    let user = null;
    if(req.params['_id'] != undefined){
      user = await User.findByIdAndRemove(req.params['_id']);
    }

    return res.json(user);
  }
};