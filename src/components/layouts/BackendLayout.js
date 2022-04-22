import FooterBackend from '../shared/FooterBackend'
import NavbarBackend from '../shared/NavbarBackend'
import SidebarBackend from '../shared/SidebarBackend'

import { useEffect } from "react"

const BackendLayout = ({children}) => {

  // อ่านค่าตัวแปรจาก localstorage
  useEffect(() => {
    if(localStorage.getItem('fullname') == undefined){
        // redirect ไปหน้า login
        window.location = '/login'
    }
  }, [])

  return (
    <>
        <div className='wrapper'>
            <SidebarBackend />

            <div className="main">
                <NavbarBackend />

                <main className='content'>
                    <div className="container-fluid p-0">
                        {children}
                    </div>
                </main>

                <FooterBackend />
            </div>
        </div>
    </>
  )
}

export default BackendLayout