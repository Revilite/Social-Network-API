const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (data) => new Date().toLocaleDateString('en-us')
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Reaction"
      },
    ],
  },
  {
    toJSON:{
      virtuals: true,
      getters: true
      
    },
    id: false
  },
);

const Thought = model("thought", thoughtSchema);


module.exports = Thought;