module.exports = {

  attributes: {
    email: {type: 'string', required: true, unique: true},
    password: {type: 'string', required: true},
    name: {type: 'string'},
    score: {type: 'number', defaultsTo: 0},
  },

  // beforeCreate: function (valuesToSet, proceed) {
  //   // Hash password
  //   sails.helpers.passwords.hashPassword(valuesToSet.password).exec((err, hashedPassword)=>{
  //     if (err) { return proceed(err); }
  //     valuesToSet.password = hashedPassword;
  //     return proceed();
  //   });//_∏_
  // }
}
