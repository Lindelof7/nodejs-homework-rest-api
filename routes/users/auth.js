const express = require('express')
const { validateBody, auth, upload } = require("../../middlewares")
const { schemas } = require('../../models/user')
const router = express.Router()
const ctrl = require('../../controllers/auth')

router.get('/current', auth, ctrl.getCurrent)

router.get('/verify/:verificationToken', ctrl.verifyEmail)

router.post('/verify', validateBody(schemas.emailSchema), ctrl.resendVerification)

router.post('/register', validateBody(schemas.registerSchema), ctrl.register)

router.post('/login', validateBody(schemas.loginSchema), ctrl.login)

router.post('/logout', auth, ctrl.logout)

router.patch('/avatars', auth, upload.single("avatar"), ctrl.updateAvatar)

module.exports = router;