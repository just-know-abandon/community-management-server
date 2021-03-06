const { exec } = require('../../db/mysql')

/**
 * 管理员 公告通知 增加
 * @param {*} title 公告通知标题
 * @param {*} desc 公告通知描述
 * @param {*} content 公告通知内容
 * @param {*} date 公告通知时间
 * @param {*} adminId 发布者-管理员id
 */
const adminAddNotice = ({ title, desc, content, date, adminId }) => {
  // console.log(!title || !desc || !content || !date || !adminId)
  if(!title || !desc || !content || !date || !adminId){
    return false
  }
  let sql = `insert into admin_notice (
    notice_title,
    notice_desc,
    notice_content,
    notice_date,
    notice_adminId
  ) values (
    '${title}',
    '${desc}',
    '${content}',
    '${date}',
    '${adminId}'
  )`
  // 返回promise  
  console.log(sql)
  let isSuccess = exec(sql).then(updateData => {
    // console.log('updateDate is', updateData)
    console.log(111111111111111111111111111111)
    console.log(updateData)
    console.log(222222222222222222222222222222)
    if(updateData.affectedRows > 0){
      return true
    }
  }).catch(err => {
    return false
  })
  return isSuccess
}

/**
 * 管理员 公告通知 根据id删除
 * @param {*} id 公告通知id
 */
const adminDelNotice = (id) => {
  let sql = `delete
  from admin_notice
  where
  id='${id}';`
  // 返回promise  
  console.log(sql)
  return exec(sql).then(updateData => {
    // console.log('updateDate is', updateData)
    console.log(updateData)
    if(updateData.affectedRows > 0){
      return true
    }
    return false
  })
}

/**
 * 管理员 公告通知 更新修改 根据id修改，所有必填
 * @param {*} id 公告通知id
 * @param {*} title 公告通知标题
 * @param {*} desc 公告通知描述
 * @param {*} content 公告通知内容
 * @param {*} date 公告通知时间
 * @param {*} adminId 发布者-管理员id
 */
const adminUpdateNotice = ({ id, title, desc, content, date, adminId }) => {
  if(!id || !title || !desc || !content || !date || !adminId){
    return false
  }
  let sql = `update admin_notice set
  notice_title = '${title}',
  notice_desc = '${desc}',
  notice_content = '${content}',
  notice_date = '${date}',
  notice_adminId = '${adminId}'
  where id = '${id}';`
  // 返回promise  
  console.log(sql)
  let isSuccess = exec(sql).then(updateData => {
    // console.log('updateDate is', updateData)
    console.log(111111111111111111111111111111)
    console.log(updateData)
    console.log(222222222222222222222222222222)
    if(updateData.affectedRows > 0){
      return true
    }
  }).catch(err => {
    return false
  })
  return isSuccess
}

/**
 * 管理员 公告通知 模糊查询, 不传数据即 all查询
 * @param {*} id 公告通知id
 * @param {*} title 公告通知标题
 * @param {*} desc 公告通知描述
 * @param {*} content 公告通知内容
 * @param {*} date 公告通知时间
 * @param {*} adminId 发布者-管理员id
 */
const adminSearchNotice = ({ limitF, limitS, id, title, desc, content, date, adminId, adminName }) => {
  let sql = `select
  admin_notice.id,
  notice_title,
  notice_desc,
  notice_content,
  notice_date,
  notice_adminId,
  admin_name
  from admin_notice
  left join admin_account
  on admin_notice.notice_adminId = admin_account.id
  where 1=1`
  if(id){
    sql += ` and admin_notice.id = '${id}'`
  }
  if(title){
    sql += ` and notice_title like '%${title}%'`
  }
  if(desc){
    sql += ` and notice_desc like '%${desc}%'`
  }
  if(content){
    sql += ` and notice_content like '%${content}%'`
  }
  if(date){
    sql += ` and notice_date like '%${date}%'`
  }
  if(adminId){
    sql += ` and notice_adminId like '%${adminId}%'`
  }
  if(adminName){
    sql += ` and admin_name like '%${adminName}%'`
  }
  if(limitS){
    sql += ` order by id desc limit ${limitF}, ${limitS}`
  }
  sql += `;`
  // sql += ` order by id desc limit ${limitF}, ${limitS};`
  // 返回promise  
  console.log(sql)
  return exec(sql).then(updateData => {
    // console.log('updateDate is', updateData)
    console.log(updateData)
    if(updateData[0]){
      return updateData
    }
    return false
  })
}

module.exports = {
  adminAddNotice,
  adminDelNotice,
  adminUpdateNotice,
  adminSearchNotice
}