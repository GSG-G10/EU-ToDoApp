const router = require('express').Router();

const {
  clientError,
  serverError,
  homePage,
  getTask,
  addTask,
  deleteTask,
} = require('../controllers');

router.get('/home', homePage);
router.get('/getTask', getTask);
router.post('/addTask', addTask);
router.get('/deleteTask/:id', deleteTask);

router.use(clientError);
router.use(serverError);

module.exports = router;
