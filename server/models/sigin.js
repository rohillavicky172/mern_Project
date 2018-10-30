import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const signInSchema = new Schema({
  username: { type: 'String', required: true },
  password: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('SignIn', signInSchema);
