const router = require('express').Router();
const {
    getAllUser,
    createUser
  } = require('../../controllers/user-controller.js');

// Set up GET all and POST at /api/users
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

module.exports = router;