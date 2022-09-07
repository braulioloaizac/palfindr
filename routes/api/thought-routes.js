const router = require('express').Router();
const {
    addThought
  } = require('../../controllers/thought-controller');

// /api/comments/<pizzaId>
router.route('/:userId').post(addThought);

module.exports = router;