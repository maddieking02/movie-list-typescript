const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movies')

const schema = new mongoose.Schema({
  title: {type: String, unique: true},
  watched: Number
})

const Movies = mongoose.model('Movies', schema);

const testMovie = new Movies({title: 'test', watched: 0})

const getData = () => {
  return Movies.find({})
}

const createEntry = (data: any) => {
  return Movies.create(data)
}

const patchEntry = (data: any) => {
  return Movies.updateOne({title: data.title}, {watched: data.watched})
}

export const db = {
  getData,
  createEntry,
  patchEntry,
}