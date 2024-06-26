const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dayjs = require('dayjs');
const AdvancedFormat = require('dayjs/plugin/advancedFormat');

dayjs.extend(AdvancedFormat);

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1, 
      maxLength: 280,
    },
    createdAt: {
      type: String,
      default: function() {
        return dayjs().format('MMM Do, YYYY [at] HH:mm a'); 
      }
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `reactionCount` that gets the amount of reactions per thought
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;