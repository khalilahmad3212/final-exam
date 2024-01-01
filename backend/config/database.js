import mongoose from 'mongoose'

export const connectDb = async () => {

  mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('Successfully Connected'))
    .catch((err) => console.log(err))
}