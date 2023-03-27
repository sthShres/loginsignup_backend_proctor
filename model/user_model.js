const mongoose = require("mongoose");
const db = require("../config/db");
const bcrypt = require("bcrypt");

const { Schema } = mongoose;

const userSchema = new Schema({
  name:{
  type : String,
  required: true,
  },

  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  confirmpass:{
    type: String,
    required: true
  },
  dateform:{
    type: String,
    required: true,
  },
  city:{
    type: String,
    required: true,
  },

  state:{
    type: String,
    required: true,
  },
  parentname:{
    type: String,
    required: true,
  }
},
{
  timestamps: true
}

);

userSchema.pre('save', async function(){
  try{
    var user = this;
    const salt = await(bcrypt.genSalt(10));
    const hashpass = await bcrypt.hash(user.password, salt);
    user.password = hashpass; 
  }
  catch(error){
    throw error;
  }
});

userSchema.methods.comparePassword = async function(userPassword){
  try {
    const isMatch = await bcrypt.compare(userPassword, this.password);
    return isMatch;

  } catch(error){
    throw error;
  }
}

const UserModel = db.model('user', userSchema);

module.exports = UserModel;