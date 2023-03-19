import request from '@/utils/request'
// 登录
export function getVaccineInfo(data) {
    return request({
        url: '/front/vaccineInformation/getVaccineInfo',
        headers: { isToken: false },
        method: 'get',
		data
    })
}
// 注册
export function getHospitalBySort(data) {
    return request({
        url: '/front/hospitalInformation/getHospitalBySort',
        headers: { isToken: false },
        method: 'get',
		data
    })
}

export function addAppointment(data) {
    return request({
        url: '/front/vaccineAppointment/addAppointment',
        headers: { isToken: false },
        method: 'POST',
		data
    })
}

export function myAppointment(data) {
    return request({
        url: '/front/vaccineAppointment/myAppointment',
        headers: { isToken: false },
        method: 'GET',
		data
    })
}
