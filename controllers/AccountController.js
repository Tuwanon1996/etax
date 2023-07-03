const db = require("./config/db_connection");
const AccountModel = require("../models/AccountModel");
const {
  createOKResponse,
  createErrorResponse,
} = require("../service/restApiService");
const { body, validationResult } = require("express-validator");

const AccountController = () => {}

AccountController.getAccount = async (req, res) => {
  try {
    const data = await AccountModel.findAll();
    if (data) {
      return createOKResponse({
        res,
        content: {
          data,
        },
      });
    } else {
      return createErrorResponse({
        res,
        error: {
          message: "Data Not Found",
        },
        status: 404,
      });
    }
  } catch (error) {
    throw error;
  }
};

module.export = AccountController;
