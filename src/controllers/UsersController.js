const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = {
  async index(req, res){
    const users = await User.find();
    return res.json(users);
  },

  async save(req, res){
    let user = null;
    if(req.body._id == undefined){
      user = await User.create(req.body);
    }else{
      user = await User.findByIdAndUpdate(req.body._id, req.body, { new: true });
    }

    return res.json(user);
  },

  async destroy(req, res){
    let user = null;
    if(req.body._id != undefined){
      user = await User.findByIdAndRemove(req.body._id);
    }

    return res.json(user);
  }
};