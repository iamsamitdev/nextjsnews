import React from 'react'
import MainLayout from "../src/components/layouts/MainLayout"
import Link from 'next/link'

const register = () => {
  return (
    <MainLayout title="Register">
        <div className="container-fluid">
            <div className="rounded d-flex justify-content-center">
                <div className="col-sm-12 col-md-6 col-lg-4 shadow-lg p-5 pb-0">
                <form>
                    <div className="py-2">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" placeholder="ชื่อ-สกุล" />
                        <label htmlFor="fullname">ชื่อ-สกุล</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" placeholder="ชื่อผู้ใช้" />
                        <label htmlFor="username">ชื่อผู้ใช้</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" placeholder="อีเมล์" />
                        <label htmlFor="email">อีเมล์</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" placeholder="รหัสผ่าน" />
                        <label htmlFor="password">รหัสผ่าน</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" placeholder="ยืนยันรหัสผ่าน" />
                        <label htmlFor="password_confirmation">ยืนยันรหัสผ่าน</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" placeholder="เบอร์โทรศัพท์" />
                        <label htmlFor="tel">เบอร์โทรศัพท์</label>
                    </div>
                    <div className="form-floating mb-3">
                        <select formcontrolname="role" className="form-control">
                        <option className="form-control" value>เลือกประเภทสมาชิก</option>
                        <option className="form-control" value={2}>ทั่วไป</option>
                        <option className="form-control" value={1}>ผู้ดูแล</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <input type="checkbox" id="acceptTerms" formcontrolname="acceptTerms" className="form-check-input" /> &nbsp;&nbsp;
                        <label htmlFor="acceptTerms" className="form-check-label">ฉันยอมรับเงื่อนไขการใช้งาน</label>
                    </div>
                    <div className="row">
                        <div className="col-6">
                        <button className="btn btn-primary text-center mt-3 w-100" type="submit">
                            ลงทะเบียน
                        </button>
                        </div>
                        <div className="col-6">
                        <button className="btn btn-danger text-center mt-3 w-100" type="button">
                            ล้างฟอร์ม
                        </button>
                        </div>
                    </div>
                    <p className="text-center mt-5">เป็นสมาชิกอยู่แล้ว ?
                        <Link href="/login">
                            <a className="text-primary text-decoration-none"> เข้าสู่ระบบ</a>
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

export default register