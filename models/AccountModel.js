const db = require("../config/db_connection");
const { sequelize, DataTypes } = require("sequelize");

const AccountModel = database.define(
  "account",
  {
    acc_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "id",
      primaryKey: true,
    },
    acc_ref: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: "reference",
    },
    username: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: "username",
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: "password",
    },
    organization: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: "organization",
    },
    contact_name: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: "contact_name",
    },
    contact_email: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: "contact_email",
    },
    contact_mobile: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: "contact_mobile",
    },
    expire_date: {
      type: DataTypes.DATE,
      allowNull: true,
      field: "expire_date",
    },
    disable: {
      type: DataTypes.TINYINT.UNSIGNED.ZEROFILL,
      allowNull: true,
      field: "disable",
    },
    sub_account: {
      type: DataTypes.TINYINT,
      allowNull: true,
      field: "sub_account",
    },
    parent_account_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "parent_account_id",
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: "description",
    },
    _config: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: "_config",
    },
    administrator_type: {
      type: DataTypes.TINYINT,
      allowNull: true,
      field: "administrator_type",
    },
    superuser_type: {
      type: DataTypes.TINYINT,
      allowNull: true,
      field: "superuser_type",
    },
    taxinvoice_operator: {
      type: DataTypes.TINYINT,
      allowNull: true,
      field: "taxinvoice_operator",
    },
    dcn_operator: {
      type: DataTypes.TINYINT,
      allowNull: true,
      field: "dcn_operator",
    },
    print_pdf_access: {
      type: DataTypes.TINYINT,
      allowNull: true,
      field: "print_pdf_access",
    },
    anyform_reference: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: "anyform_reference",
    },
    department: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: "department",
    },
    section: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: "section",
    },
    emp_code: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: "emp_code",
    },
    first_login: {
      type: DataTypes.TINYINT,
      allowNull: true,
      field: "first_login",
    },
    last_change_password: {
      type: DataTypes.DATE,
      allowNull: true,
      field: "last_change_password",
    },
  },
  {
    sequelize,
    tableName: "account",
  }
);

module.exports = AccountModel;
