var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var dataSchema = new Schema({
     _id: { type: mongoose.Types.ObjectId, unique: true, required: true },
     id: { type: Number },
     city: {
          type: String,
     },
     start_date: {
          type: String,
     },
     end_date: {
          type: String,
     },
     price: {
          type: String,
     },
     status: {
          type: String,
     },
     color: {
          type: String,
     }
}, {
     timestamps: true
});

module.exports = dataSchema;
