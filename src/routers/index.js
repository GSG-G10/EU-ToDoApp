const router = require('express').Router();
const {getTask} = require('../controllers/index');
// this route after the user make a login, it will go to the forExample /elham/tasks
router.get("/:userName/tasks",getTask )