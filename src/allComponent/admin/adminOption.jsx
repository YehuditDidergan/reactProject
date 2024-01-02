import Button from '@mui/material/Button';

import { Outlet } from "react-router-dom";
import { useState } from "react"
import AdminAppointments from './adminAppointments'
import AdminServices from "./adminServices";
import AdminBusinessToEdit from "./adminDetailsToEdit";
import { Link } from "react-router-dom";
export default function AdminOption() {
    const [isEdit, SetIsEdit] = useState(false)
    return (
        <>{!isEdit ?
            <div>
                <button onClick={() => SetIsEdit(true)}>edit</button>
                <p>
                    <Button variant="outlined" ><Link to="appointments">Appointments</Link></Button>
                    <Button variant="outlined" ><Link to="services">Service</Link></Button>
                </p>
            </div> : <AdminBusinessToEdit SetIsEdit={SetIsEdit} ></AdminBusinessToEdit>
        }
            <Outlet></Outlet>
        </>
    )
}