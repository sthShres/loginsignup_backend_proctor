const router = require('express').Router();
const UserContoller = require("../controller/user_controller");

router.post('/registration',UserContoller.register);
router.post('/login',UserContoller.login);

module.exports = router;