const router = require('express').Router();
const {
    getAllUser,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
  } = require('../../controllers/user-controller.js');

// Set up GET all and POST at /api/users
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

router
  .route('/:userId')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

router
  .route('/:userId/friends/:friendId')
  .put(addFriend)
  .delete(deleteFriend)

module.exports = router;