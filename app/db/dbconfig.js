//THIS FILE STAYS BASICALLY THE SAME
import mongoose from 'mongoose'

//THIS STRING WILL CHANGE SLIGHTLY
const connectionString = "mongodb+srv://student:student123@cluster0-07ffa.mongodb.net/hackathon1?retryWrites=true"

let connection = mongoose.connection

mongoose.connect(connectionString, {
  useNewUrlParser: true
})

//log any errors
connection.on('error', err => {
  console.error('[DATABASE ERROR]:', err)
})

//confirm connection
connection.once('open', () => {
  console.log('connected to the database')
})