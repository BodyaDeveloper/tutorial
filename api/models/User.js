module.exports = {

  attributes: {
    email: {type: 'string', required: true},
    password: {type: 'string', required: true},
    name: {type: 'string'},
    score: {type: 'number', defaultsTo: 0},
  },

}
