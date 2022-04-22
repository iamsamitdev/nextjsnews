/* eslint-disable import/no-anonymous-default-export */
import http from '../constants/configAxios'

// สร้างฟังก์ชันสำหรับการ Login
const login = (data) => {
    return http.post("/login", data)
}

export default {
    login
}