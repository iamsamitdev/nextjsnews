import React from 'react'
import MainLayout from "../src/components/layouts/MainLayout"
import Link from 'next/link'

const forgotpass = () => {
  return (
    <MainLayout title="Forgot Password">
        <div className="container-fluid" style={{marginTop: 100}}>
            <div className="rounded d-flex justify-content-center">
                <div className="col-sm-12 col-md-6 col-lg-3 shadow-lg p-5 pb-0">
                <form action="#" method="post">
                    <div className="py-4">
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" placeholder="Email" />
                        <label htmlFor="email">อีเมล์</label>
                    </div>
                    <button className="btn btn-primary text-center mt-3 w-100" type="submit">
                        ส่งข้อมูล
                    </button>
                    <p className="text-center mt-5">
                        <Link href="/login">
                            <a className="text-primary text-decoration-none">เข้าสู่ระบบ</a>
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

export default forgotpass