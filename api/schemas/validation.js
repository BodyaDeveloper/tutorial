const Ajv = require("ajv");
const ajv = exports.ajv = new Ajv();
const userCreateSchema = require("./user_create_schema.json");
const listCreateSchema = require("./list_create_schema.json");

ajv.addSchema(userCreateSchema,"user_create");
ajv.addSchema(listCreateSchema, "list_create");
