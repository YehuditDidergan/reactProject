import { observer } from "mobx-react-lite";
import AppointmentItemToShow from './appintmentItemToShow'
import AppointmentMBX from './appointmentMBX'
import { useEffect } from "react";
import './designCards.css'

const AdminAppointments = observer(() => {
    const currentDate = new Date();
    const weekAfterNow = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() + 7
    );
    return (<>
        <div className="cards"> {AppointmentMBX.listAppointment.map((appointment, index) => <AppointmentItemToShow appointment={appointment}
            key={index} color={new Date(appointment.dateTime) - 24 <= new Date() ? "red" : new Date(appointment.dateTime) <= weekAfterNow ? "orange" : "green"}>
        </AppointmentItemToShow>)}</div>
    </>
    )
})
export default AdminAppointments;