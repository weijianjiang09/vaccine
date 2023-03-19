import request from '@/utils/request'
// 登录
export function login(data) {
    return request({
        url: '/front/vaccineUser/login',
        headers: { isToken: false },
        method: 'post',
		data
    })
}
// 注册
export function register(data) {
    return request({
        url: '/front/vaccineUser/register',
        headers: { isToken: false },
        method: 'post',
		data
    })
}
// Tood
export function refineUserInfo(data) {
    return request({
        url: '/front/vaccineUser/refineUserInfo',
        headers: { isToken: false },
        method: 'put',
		data
    })
}