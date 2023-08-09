import express from 'express'
import {registerController, loginEmailController, loginPhoneController, testController} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'
// router object
const router = express.Router()

//routing
// REGISTER || METHOD POST
router.post('/register', registerController)


//LOGIN || POST
//with email
router.post('/loginEmail', loginEmailController)
//with phone
router.post('/loginPhone', loginPhoneController)

//test routes
router.get('/test', requireSignIn, isAdmin, testController)

export default router