// const express = require('express');
// const router=express.Router();

// const homeController=require('../controller/home_controller');
// router.get('/', homeController.home);
// router.post('/addTask',homeController.addTask);
// module.exports = router;
const express = require('express');
const router = express.Router();

const homeController = require('../controller/home_controller');
router.get('/',homeController.home);
router.post('/addtask',homeController.addTask);
// router.get('/delete-contact',homeController.delteContac)
module.exports = router;