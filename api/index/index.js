
import request from '@/utils/request'
// 登录
export function getVaccineInfo(data) {
    return request({
        url: '/front/consultationAnnouncement/getConsultationAnnouncement',
        headers: { isToken: false },
        method: 'get',
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