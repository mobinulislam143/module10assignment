const express = require('express')
const router = express.Router()
const AuthverifyMiddleware = require('../middleware/Authverifymiddleware')
const studentController = require('../controller/studentController')
const WorkController = require('../controller/WorkController')


router.post('/createStd', studentController.createStd)
router.post('/stdLogin', studentController.stdLogin)
router.get('/readStd', studentController.readStd)
router.get('/readbyId/:id', studentController.readbyId)
router.post('/updatebyId/:id', studentController.updatebyId)
router.post('/deletebyId/:id', studentController.deletebyId)


router.post('/createWork', AuthverifyMiddleware, WorkController.createWork)
router.get('/readWork', AuthverifyMiddleware, WorkController.readWork)
router.post('/updateWorkbyId/:id', AuthverifyMiddleware, WorkController.updateWorkbyId)
router.post('/deleteWork/:id', AuthverifyMiddleware, WorkController.deleteWork)

module.exports = router