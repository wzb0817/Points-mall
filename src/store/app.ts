
// 导入定义仓库的方法
import { defineStore } from 'pinia';

// 导入响应式和计算
import { ref } from 'vue'
const useAppStore = defineStore("app", () => {
    const userInfo = ref({});
    const access_token = ref('')
    const phoneNumber = ref('')
    // 定义一个设置状态的方法
    const saveUserInfo = info => {
        userInfo.value = info;
    }
    const saveAccessToken = token => {
        access_token.value = token
    }
    const savePhoneNumber = number => {
        phoneNumber.value = number
    }
    // 导入
    return { userInfo, saveUserInfo, saveAccessToken, access_token, phoneNumber, savePhoneNumber }
})

export default useAppStore;