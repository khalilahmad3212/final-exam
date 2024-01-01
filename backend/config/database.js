import mongoose from 'mongoose'

export const connectDb = async () => {

  mongoose.connect('mongodb://127.0.0.1:27017/final-exam', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('Successfully Connected'))
    .catch((err) => console.log(err))
}