const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");


const ReactionSchema = new Schema({
  // set custom id to avoid confusion with parent thought's _id field
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    max: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal),
  },
});

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min: 1,
      max: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    username: {
      type: String,
      required: true,
    },

    reactions: [ReactionSchema],
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false,
  }
);



ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});


const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
