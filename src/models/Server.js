const mongoose = require('mongoose');

const ServerSchema = new mongoose.Schema({
  client: {
    type: String,
    required: true
  },
  serverIp: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('Server', ServerSchema);