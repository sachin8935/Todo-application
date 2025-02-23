const express=require('express');
const router= express.Router();
const userEmailCheck= require('../middleware/signupHandler');
const userSignUp= require('../controller/signup');
const userLoginCheck= require('../middleware/loginHandler');
const {addTodo,getAllTodo,updateTodo,deleteTodo,getTodoById,isTokenValid,logOut}= require('../controller/createTodo');
const userLogin= require('../controller/login');
router.post('/signup',userEmailCheck,userSignUp);
router.post('/login',userLoginCheck,userLogin);
router.post('/addTodo',addTodo);
router.get('/getAllTodo',getAllTodo);
router.get('/getTodo/:id',getTodoById);
router.put('/updateTodo',updateTodo);
router.delete('/deleteTodo/:id',deleteTodo);
router.get('/isValidToken',isTokenValid);
router.get('/logout',logOut)
module.exports=router;