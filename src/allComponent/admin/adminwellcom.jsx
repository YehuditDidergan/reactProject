import { useState } from "react"
import { observer } from "mobx-react-lite";

import AdminBusinessToShow from './adminDetailsToShow'
import AdminInputLogin from "./adminInputLogin"
import BusinessData from './businessMBX'
 const AdminWellcom= observer(()=> {
    return (<>
    {console.log("isLogin: ",BusinessData.isLogin)}
    {!BusinessData.isLogin?<>
        <h1>AdminWellcom</h1>
  <AdminInputLogin ></AdminInputLogin>
</>:<><AdminBusinessToShow></AdminBusinessToShow></>}</>)
})
export default AdminWellcom