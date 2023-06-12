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

  },

  getLists: async(req,res) => {
    let pageNum = req.param('pageNum') || 1;
    let limit = req.param('limit') || 10;
    let total = await ToDoList.count();
    let lists = await User.find({
      limit: limit,
      skip: (pageNum - 1) * limit,
    });
    return res.json({
      usersList: lists,
      total: total,
    });
},

  getListByStatus: async(req,res) =>{
  const statusSearch = req.param('list');
  if(!statusSearch)
    return res.status(422).send('Bad data');
  let list = await ToDoList.findone({
    status:statusSearch
  });
    if(!list)
      return res.status(404).send('Missing data');
    return res.json(list);
  }
}
