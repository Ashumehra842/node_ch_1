const express = require('express');
const router = express.Router();
const {
  myfun,
  insert,
  getUser,
  deleteUser,
} = require('../controller/UserController.js');

router.route('/').get((req, res) => {
  res.send('This is running at 8000 port.!');
});
router.route('/controller').get(myfun);

router.route('/insert').post(insert);

router.route('/getUser').post(getUser);
router.route('/delete').post(deleteUser);
module.exports = router;
