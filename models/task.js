const mongoose = require('mongoose');
const moment = require('moment');

const taskSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true
    },
    completed: {
      type: Boolean,
      default: false
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    dueDate: {
      type: Date,
    }
  },
  {
    timestamps: true
  }
);

userSchema.methods.toJSON = () => {
  return moment(this.dueDate).format('MMM Do, YYYY');
}

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
