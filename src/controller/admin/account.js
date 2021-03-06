const {
  adminLogin,
  adminAddAdminAccount,
  adminDelAdminAccount,
  adminUpdateAdminAccount,
  adminSearchAdminAccount
} = require('../../services/admin/account')
const { SuccessModel, ErrorModel } = require('../../model/resModel')
const {
  adminLoginFail,
  adminAddAccountFail,
  adminDelAccountFail,
  adminUpdateAccountFail,
  adminSearchAccountFail
} = require('../../model/errorInfo')
const {
  adminLoginSuccess,
  adminAddAccountSuccess,
  adminDelAccountSuccess,
  adminUpdateAccountSuccess,
  adminSearchAccountSuccess
} = require('../../model/successInfo')

/**
 * 登录
 * @param {string} account 账号
 * @param {string} password 密码
 */
async function login(account, password) {
  // service
  const result = await adminLogin(account, password)
  if (result) {
    return new SuccessModel(result, adminLoginSuccess)
  }
  return new ErrorModel(adminLoginFail)
}

/**
 * 管理员账号 增加
 * @param {*} account 管理员账号
 * @param {*} password 管理员密码
 * @param {*} adminName 管理员名
 */
async function addAdminAccount({ account, password, adminName }) {
  // service
  const result = await adminAddAdminAccount({ account, password, adminName })
  if (result) {
    return new SuccessModel({ account, password, adminName }, adminAddAccountSuccess)
  }
  return new ErrorModel(adminAddAccountFail)
}

/**
 * 管理员账号 根据id删除
 * @param {*} id 管理员账号id
 */
async function delAdminAccount(id){
  const result = await adminDelAdminAccount(id)
  if (result) {
    return new SuccessModel({id}, adminDelAccountSuccess)
  }
  return new ErrorModel(adminDelAccountFail)
}

/**
 * 管理员账号 根据id修改，所有必填
 * @param {*} id 管理员账号id
 * @param {*} account 管理员账号
 * @param {*} password 管理员密码
 * @param {*} adminName 管理员名
 */
async function updateAdminAccount({ id, account, password, adminName }){
  const result = await adminUpdateAdminAccount({ id, account, password, adminName })
  if (result) {
    return new SuccessModel({ id, account, password, adminName }, adminUpdateAccountSuccess)
  }
  return new ErrorModel(adminUpdateAccountFail)
}

/**
 * 管理员账号 模糊查询，不传参就 all查询
 * @param {*} id 管理员账号id
 * @param {*} account 管理员账号
 * @param {*} adminName 管理员名
 */
async function searchAdminAccount({ limitF, limitS, id, account, adminName }) {
  // service
  const result = await adminSearchAdminAccount({ limitF, limitS, id, account, adminName })
  if (result) {
    return new SuccessModel(result, adminSearchAccountSuccess)
  }
  return new ErrorModel(adminSearchAccountFail)
}

module.exports = {
  login,
  addAdminAccount,
  delAdminAccount,
  updateAdminAccount,
  searchAdminAccount
}