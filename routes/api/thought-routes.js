const router = require('express').Router();

const {
  getAllThought,
  addThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');


// /api/thoughts
router
  .route('/')
  .get(getAllThought)
  .post(addThought);

// /api/thoughts/thoughtId
router
  .route('/:thoughtId')
  .put(addReaction)
  .delete(removeThought);

// /api/thoughts/<thoughtId>/<reactionId>
router.route(':thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;