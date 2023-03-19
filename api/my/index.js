import request from '@/utils/request'
// 登录
export function messageBox(data) {
    return request({
        url: '/front/messageBox/messageBox',
        headers: { isToken: false },
        method: 'post',
		data
    })
}
