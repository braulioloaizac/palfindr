const { Schema, model } = require("mongoose");

// Schema to create User model
const UserSchema = new Schema(
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
    friends: [this],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Initialize our User model
const User = model("User", UserSchema);

// Virtual that counts the friends of each user
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });


module.exports = User;
