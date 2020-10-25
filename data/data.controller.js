var Datas = require('./data.dao');

exports.createNewData = function (req, res, next) {
     var newData = {
          city: req.body.city,
          start_date: req.body.start_date,
          end_date: req.body.end_date,
          price: req.body.price,
          status: req.body.status,
          color: req.body.color,
     };

     Datas.create(newData, function (err, _) {
          if (err) {
               res.json({
                    error: err
               })
          }
          res.json({
               message: "Record Added"
          })
     })
}

exports.getAllRecords = function (req, res, next) {
     Datas.get({}, function (err, records) {
          if (err) {
               res.json({
                    error: err
               })
          }
          res.json({
               records: records
          })
     })
}

exports.getRecord = function (req, res, next) {
     Datas.get({ name: req.params.name }, function (err, records) {
          if (err) {
               res.json({
                    error: err
               })
          }
          res.json({
               records: records
          })
     })
}

exports.updateRecord = function (req, res, next) {
     var record = {
          city: req.body.city,
          start_date: req.body.start_date,
          end_date: req.body.end_date,
          price: req.body.price,
          status: req.body.status,
          color: req.body.color,
     }
     Datas.update({ _id: req.params.id }, record, function (err, data) {
          if (err) {
               res.json({
                    error: err
               })
          }
          res.json({
               message: "Record updated successfully"
          })
     })
}

exports.removeRecord = function (req, res, next) {
     Datas.delete({ _id: req.params.id }, function (err, _) {
          if (err) {
               res.json({
                    error: err
               })
          }
          res.json({
               message: "Record deleted successfully"
          })
     })
}