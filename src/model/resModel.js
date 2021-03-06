/**
 * @description res 的数据模型
 */

/**
 * 基础模块
 */
class BaseModel {
  constructor({errno, data, message}) {
    this.errno = errno
    if (data) {
      this.data = data
    }
    if (message) {
      this.message = message
    }
  }
}

/**
 * 成功的数据模型
 */
class SuccessModel extends BaseModel {
  constructor(data = {}, message) {
    super({
      errno: 0,
      message,
      data
    })
  }
}

/**
 * 失败的数据模型
 */
class ErrorModel extends BaseModel {
  constructor({ errno, message }) {
    super({
      errno,
      message
    })
  }
}

module.exports = {
  SuccessModel,
  ErrorModel
}



// 成功demo
// {
//   errno: 0,
//   data: {
//     userName: 'xxx'
//   },
//   message: 'xxx'
// }

// 失败demo
// {
//   errno: 10001,
//   message: '登陆失败'
// }