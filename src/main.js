import ICSocket from './icsocket'

// 登录获取的token
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX25hbWUiOiJjb2NvIiwicm9sZSI6Miwicm9sZV9pZCI6MSwiZW5nbGlzaF9uYW1lIjoiQ29jbyIsInNleCI6MiwiYXZhdGFyX3VybCI6ImNvY28iLCJvcmlnX2lhdCI6MTUzMDYwNzM3MSwiZXhwIjoxNTMwNjEwOTcxfQ.PTZaQY3HfiRBn8kobaZZblL8Dq_ruA350cbyO3gLfIw'

// 实例化SDK，通过传入回调拿到socket服务推送的消息数据
let kkk = new ICSocket(token, function(data) {
  console.log('got websocket message: ', data)
})
