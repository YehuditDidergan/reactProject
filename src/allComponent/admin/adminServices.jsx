import Button from '@mui/material/Button';

import { observer } from "mobx-react-lite";
import ServiceItemToShow from './serviceItemToShow'
import ServiceMBX from './servicesMBX'
import { useState } from "react";
import AdminServiceToAdd from "./adminServiceToAdd";
import BusinessData from './businessMBX'

const AdminServices = observer(() => {
    const [isAdd, setIsAdd] = useState(false)
    return (<>
        {console.log("ServiceMBX.listServices",ServiceMBX.listServices)}
        {ServiceMBX.listServices.map((service, index) => <ServiceItemToShow service={service} key={index} ></ServiceItemToShow>)}
        {BusinessData.isLogin && <Button variant="outlined" onClick={(e) => setIsAdd(true)}>service</Button>}
        {isAdd && <AdminServiceToAdd setIsAdd={setIsAdd}></AdminServiceToAdd>}
    </>
    )
})
export default AdminServices;