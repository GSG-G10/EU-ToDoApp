const router = require('express').Router();
const {
  clientError, serverError, getTask, addTask,
} = require('../controllers');

router.get('/admin/tasks', getTask);
router.post('/addTask', addTask);
router.use(clientError);
router.use(serverError);

module.exports = router;
