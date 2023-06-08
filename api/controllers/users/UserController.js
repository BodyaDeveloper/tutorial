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
  getUser: async (req,res) => {

  }
}

