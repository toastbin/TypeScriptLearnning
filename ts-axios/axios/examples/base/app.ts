import axios from '../../src/index'

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     a:1,
//     b:2,
//     c:3
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: ['bar', 'baz']
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo: {
//       a: 1,
//       b: 2
//     }
//   }
// })

// const date = new Date()
// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     date
//   }
// })

// axios({
//   method: 'get',
//   url: '/base/get?foo=bar',
//   params: {
//     bar: 'baz'
//   }
// })

axios({
  method: 'post',
  url: '/base/post',
  data: {
    a:1,
    b:2
  },
  headers:{
    'Content-Type': 'application/json;charset=utf-8',
    'Accept': 'application/json, text/plain, */*'
  }
}).then(res=>{
  console.log(res);
})


const paramsStr = 'a=URL.search&b=url'
const searchParams = new URLSearchParams(paramsStr)
axios({
  method: 'post',
  url: '/base/post',
  data: searchParams
}).then(res=>{
  console.log(res);
})