// import { Router } from 'express';
// import AppController from '../controllers/AppController.js';
// import StudentsController from '../controllers/StudentsController.js';
const { Router } = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const router = Router();

router.get('/', AppController.getHomepage);

router.get('/students', StudentsController.getAllStudents);

router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;
