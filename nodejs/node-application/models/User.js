import mongoose from 'mongoose';

const { Schema, model } = mongoose;

// User Schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  // Ajoutez d'autres champs selon vos besoins
});

export default model('User', UserSchema);
