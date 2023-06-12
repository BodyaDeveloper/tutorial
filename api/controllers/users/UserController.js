const {ajv} = require("../../schemas/validation");
module.exports = {

  createUser: async (req,res) => {

    const validate = ajv.getSchema("user_create");
    let data = req.allParams();

    if (validate(data)) {

      let newUser = await User.create(data).fetch();
      return res.json(newUser);
    } else {
      return res.status(422).send(validate.errors);
    }
  },

  getUsers: async (req,res) => {
    let pageNum = req.param('pageNum') || 1;
    let limit = req.param('limit') || 20;
    let total = await User.count();
    let users = await User.find({
      limit: limit,
      skip: (pageNum - 1) * limit,
    });
    return res.json({
      usersList: users,
      total: total,
    });
  },

  getUserByEmail: async (req,res) => {
    const emailSearch = req.param('email');
    if(!emailSearch)
      return res.status(422).send('Bad data');
    let user = await User.findOne({
      email:emailSearch
    });
    if(!user)
      return res.status(404).send('Missing data');
    return res.json(user);
  }
}

