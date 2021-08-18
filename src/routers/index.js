const router = require('express').Router();
const {
  clientError, serverError, getTask, addTask, updateTask, deleteTask, homePage,
} = require('../controllers');

router.get('/home', homePage);
router.get('/admin/tasks', getTask);
router.post('/addTask', addTask);
// router.put('/updateTask', updateTask);
// router.delete('/deleteTask', deleteTask);
router.use(clientError);
router.use(serverError);

module.exports = router;
