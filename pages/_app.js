import {useEffect} from 'react'

// การ import bootstrap มาใช้งาน
import 'bootstrap/dist/css/bootstrap.min.css'
import '/public/assets/css/app.css'

// การ import font awesome มาใช้งาน
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  // การเรียกใช้งาน bootstrap js
  useEffect(()=>{
    import('bootstrap/dist/js/bootstrap.bundle')
    import('/public/assets/js/app')
  },[])

  return <Component {...pageProps} />
}

export default MyApp
