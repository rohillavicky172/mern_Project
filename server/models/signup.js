import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const signUpSchema = new Schema({
  username: { type: 'String', required: true },
  password: { type: 'String', required: true },
  email: { type: 'String', required: true },
  mobileno: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('SignUp', signUpSchema);
