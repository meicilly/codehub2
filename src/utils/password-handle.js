const crypto = require("crypto")

const md5Password = (password)=>{
    //console.log(JSON.stringify(password))
  const md5 =  crypto.createHash("md5")
  const result = md5.update(JSON.stringify(password)).digest('hex')
  //console.log(result)
  return result
}
//md5Password(123)
module.exports = md5Password