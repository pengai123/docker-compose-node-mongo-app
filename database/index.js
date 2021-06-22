const mongoose = require("mongoose")

mongoose
  .connect('mongodb://mongo:27017/mydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true  // get rid of Deprecation Warning
  })
  .then(() => console.log('MongoDB is connected!'))
  .catch(err => console.log('MongoDB connection error:', err))


const User = mongoose.model('user', {
  username: String,
  email: String,
  password: String
});


module.exports = { User }