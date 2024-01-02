import Button from '@mui/material/Button';

import { useEffect, useState } from "react";
import AdminBusinessToShow from "../admin/adminDetailsToShow";
import AdminServices from "../admin/adminServices";
import AppointmentItemToEdit from './appointmentItemToEdit'
import AdminAppointments from "../admin/adminAppointments";
import BusinessData from "../admin/businessMBX";
import AppointmentMBX from "../admin/appointmentMBX";
import { Alert } from "@mui/material";

export default function ClientWellcom() {
    const [editAppointment, setEditAppointment] = useState(false)
    useEffect(() => {
        BusinessData.setIsLogin(false)
    }, [])
    return (<>
        <AdminBusinessToShow></AdminBusinessToShow>
        <AdminServices></AdminServices>
        {!editAppointment ? <Button variant='outlined' onClick={() => { setEditAppointment(true) }}>appointment </Button> : <AppointmentItemToEdit setEditAppointment={setEditAppointment}></AppointmentItemToEdit>}
        {/* <AdminAppointments></AdminAppointments> */}
    </>
    )
}