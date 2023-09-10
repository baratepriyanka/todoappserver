const express = require('express');
const router = express.Router();

const TodoController = require('../controller/todo');
const LoginController = require('../controller/login');

router.post('/', LoginController.getLogin);
router.post('/signup', LoginController.getSignup);
router.post('/todos', TodoController.getAdd);
router.get('/todos', TodoController.getAlltodo);
router.get('/getone/:id', TodoController.getOnetodo);
router.post('/updatetodo/:id', TodoController.getUpdateTodo);
router.post('/todos/:id', TodoController.getDeleteTodo);

module.exports = router;
