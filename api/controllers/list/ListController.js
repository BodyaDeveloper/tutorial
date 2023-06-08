const {ajv} = require("../../schemas/validation");

module.exports = {

  createList: async(req,res) => {

    const validate = ajv.getSchema("list_create");
    let data = req.allParams();

    if (validate(data)) {
      let newList = await ToDoList.create(data).fetch();
      return res.json(newList);
    } else {
      return res.status(422).send(validate.errors);
    }

  }
}
