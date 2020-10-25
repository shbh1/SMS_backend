var mongoose = require('mongoose');
var dataSchema = require('./data.model');

dataSchema.statics = {
     create: function (data, cb) {
          var newData = new this(data);
          newData.save(cb);
     },

     get: function (query, cb) {
          this.find(query, cb);
     },

     getByName: function (query, cb) {
          this.find(query, cb);
     },

     update: function (query, updateData, cb) {
          this.findOneAndUpdate(query, { $set: updateData }, { new: true }, cb);
     },

     delete: function (query, cb) {
          this.findOneAndDelete(query, cb);
     }
}

var DataModel = mongoose.model('Data', dataSchema);
module.exports = DataModel;