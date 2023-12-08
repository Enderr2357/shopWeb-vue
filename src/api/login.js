import Server from '../axios/axios'
export function loginApi(user) { 
  return Server({
    url: '/login',
    method: 'post',
    data:user
  })
}