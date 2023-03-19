import request from '@/utils/request'

// 通用上传文件
export function uploadFile(data) {
  return request({
    url: '/common/upload',
    method: 'post',
    data
  })
}