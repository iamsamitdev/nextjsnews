/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState } from 'react'
import MainLayout from "../src/components/layouts/MainLayout"
import Link from 'next/link'
import AuthService from '../src/services/AuthService'
import Swal from 'sweetalert2'

const login = () => {

  // สร้างตัวแปรแบบ state ไว้รับค่าจากฟอร์ม
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const loginPress = (e) => {
    e.preventDefault()
    // alert(username+password)
    // เรียกใช้ API AuthService
    AuthService.login(
        {
            "username": username,
            "password": password
        }
    ).then((res)=>{
        // console.log(res.data.data.fullname)
        // console.log(res.data)
        if(res.data.status == 'success'){
            // บันทึกค่าที่ได้จาก API ลงตัวแปรแบบ localstorage
            localStorage.setItem('fullname', res.data.data.fullname)
            localStorage.setItem('img_profile', res.data.data.img_profile)
            // alert('Login Success')
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'กำลังเข้าสู่ระบบ...',
                showConfirmButton: false,
                timer: 1500
            }).then((result)=>{
                // ส่งไปหน้า Backend / Dashboard
                window.location = '/backend/dashboard'
            })
        }else{
            // alert('Login Fail')
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'ข้อมูลเข้าระบบไม่ถูกต้อง',
                showConfirmButton: false,
                timer: 1500
            })
        }
    })
  }

  return (
    <MainLayout title="Login">
        <div className="container-fluid" style={{marginTop: 100}}>
            <div className="rounded d-flex justify-content-center">
                <div className="col-sm-12 col-md-6 col-lg-3 shadow-lg p-5 pb-0">
                <form onSubmit={loginPress}>
                    <div />
                    <div className="pt-4">
                    <div className="form-floating mb-3">
                        <input type="text" 
                            className="form-control" 
                            placeholder="Username"
                            onChange={e => setUsername(e.target.value)} />
                        <label htmlFor="username">ชื่อผู้ใช้ </label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" 
                            className="form-control" 
                            placeholder="Password" 
                            onChange={e => setPassword(e.target.value)}/>
                        <label htmlFor="password">รหัสผ่าน</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                        จำฉันไว้
                        </label>
                    </div>
                    <button className="btn btn-primary text-center mt-3 w-100" name="login" type="submit">
                        เข้าสู่ระบบ
                    </button>
                    <p className="text-center mt-5">ยังไม่เป็นสมาชิก ?
                        <Link href="/register">
                            <a className="text-primary text-decoration-none"> ลงทะเบียนฟรี</a>
                        </Link>
                    </p>
                    <p className="text-center">
                        <Link href="/forgotpass">
                            <a className="text-primary text-decoration-none">ลืมรหัสผ่าน ?</a>
                        </Link>
                    </p>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </MainLayout>
  )
}

export default login