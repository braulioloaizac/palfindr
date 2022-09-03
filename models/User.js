const { Schema, model } = require("mongoose");

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "Please enter a valid email",
      },
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Initialize our User model
const User = model("user", userSchema);

// Virtual that counts the friends of each user
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });


module.exports = User;
