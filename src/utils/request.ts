//uniapp小程序请求封装
import { baseUrl } from '@/config/index'
// import { getToken } from '@/utils/auth'
import { showToast } from '@/utils/index'

export default function request<T>(options: UniApp.RequestOptions): Promise<T> {
  return new Promise((resolve, reject) => {
    uni.request({
      url: baseUrl + options.url,
      method: options.method || 'GET',
      data: options.data || {},
      header: {
        'Content-Type': 'application/json',
        // 'Authorization': getToken()
      },
      success: (res) => {
        console.log('res', res)
        if (res.statusCode === 200) {
          if ((res.data as T & { code: string }).code === '2000') {
            resolve(res.data as T) // Update this line
          } else {
            showToast((res.data as T & { message?: string }).message || '请求错误') // Update this line
            reject(res.data)
          }
        } else {
          showToast((res.data as T & { message?: string }).message || '请求错误') // Update this line
          reject(res.data)
        }
      },
      fail: (err) => {
        showToast('请求失败')
        reject(err)
      }
    })
  })
}
