const router = require('express').Router();
const {
  clientError, serverError, getTask, addTask, updateTask,
} = require('../controllers');

router.get('/admin/tasks', getTask);
router.post('/addTask', addTask);
router.put('/updateTask', updateTask);
router.use(clientError);
router.use(serverError);

module.exports = router;
