import useAppStore from "@/store/app"
let { userInfo, access_token, saveUserInfo, saveAccessToken, phoneNumber, savePhoneNumber } = useAppStore()
export function getUserInfo() {
    uni.getUserProfile({
        desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
            saveUserInfo(res.userInfo)
            console.log('userInfo', res.userInfo)
        }
    })
}
export function showToast(title: string) {
    uni.showToast({
        title,
        icon: 'none'
    })
}
// export function setToken(accessToken: string) {
//     saveAccessToken(accessToken)
//     // uni.setStorageSync('accessToken', accessToken)
// }
//存储用户信息
export function getPhoneNumber(e) {
    uni.request({
        url: 'https://api.weixin.qq.com/cgi-bin/stable_token',
        method: 'POST',
        data: {
            appid: 'wx6cc8fdf7596f7425',
            secret: '21b127ce5042a601db656b26176cc0af',
            grant_type: 'client_credential'
        },
        success(res) {
            console.log('获取access_token信息：', res)
            // 保存access_token的操作，小编这里样例，就直接放在data中了
            //存储token
            saveAccessToken(res.data.access_token)
            uni.request({
                url: `https://api.weixin.qq.com/wxa/business/getuserphonenumber?access_token=${res.data.access_token}`,
                method: 'POST',
                data: {
                    code: e.detail.code
                    // openid: _this.openid (openid非必填，所以不需要先获取用户信息，再获取手机号)
                },
                success(res) {
                    console.log('获取的用户手机号userPhone：', res)
                    savePhoneNumber(res.data.phone_info.phoneNumber)
                }
            })
        }
    })
}