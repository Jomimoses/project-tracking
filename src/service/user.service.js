const user = require("../model/user.model");
const baseDao = require("../dao/base.dao");
const response = require("../utils/response");

exports.createUser = async (body) => {
  let createUser = await baseDao.create(user, body);
  if (!createUser) {
    return response.badRequest();
  }
  return response.success(createUser);
};

exports.getAllUser = async () => {
  let users = await baseDao.findAll(user);
  if (!users) {
    return response.error();
  }
  return response.success(users);
};

exports.updateUser = async (id, body) => {
  let updateUser = await baseDao.findOneAndUpdate(user, id, body);
  if (!updateUser) {
    return response.notFound();
  }
  return response.success(updateUser);
};

exports.deleteUser = async (id) => {
  const body = { isDeleted: true };
  let updateUser = await baseDao.findOneAndUpdate(user, id, body);
  if (!updateUser) {
    return response.notFound();
  }
  return response.deleted();
};
