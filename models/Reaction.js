const { Schema, Types } = require('mongoose');
const dayjs = require('dayjs');
const AdvancedFormat = require('dayjs/plugin/advancedFormat');

dayjs.extend(AdvancedFormat);

// Schema to create Student model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: String,
      default: function() {
        return dayjs().format('MMM Do, YYYY [at] HH:mm a'); 
      }
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;