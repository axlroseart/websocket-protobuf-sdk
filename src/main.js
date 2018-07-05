import ICSocket from './icsocket'

// 登录获取的token
const token = ''

// 实例化SDK，传入Token值通过校验从而通过回调拿到socket服务推送的消息数据
let kkk = new ICSocket(token, function(data) {
  console.log('got websocket message: ', data)
})