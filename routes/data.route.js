var Records = require('../data/data.controller');

module.exports = function (router) {
  router.post('/create', Records.createNewData);
  router.get('/get', Records.getAllRecords);
  router.get('/get/:name', Records.getRecord);
  router.put('/update/:id', Records.updateRecord);
  router.delete('/remove/:id', Records.removeRecord);
}