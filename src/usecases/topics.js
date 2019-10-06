
const Topic = require('../models/topic')

function create ({ name }) {
  return Topic.create({
    name
  })
}

function getAll () {
  return Topic.find()
}

function getById (id) {
  return Topic.findById(id)
}

function updateById (id, newData) {
  return Topic.findByIdAndUpdate(id, newData)
}

function deleteById (id) {
  return Topic.findByIdAndDelete(id)
}

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById
}
