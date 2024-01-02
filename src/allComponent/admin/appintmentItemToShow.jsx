import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react"
const AppointmentItemToShow = observer(({ appointment, color }) => {
  useEffect(() => { console.log("color: ", color) }, [])
  return (<div>
    <Card sx={{ minWidth: 275 }} style={{ color: color }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>serviceName: {appointment.serviceName}</Typography><br/>
        <Typography >dateTime:{appointment.dateTime}</Typography><br/>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">clientName: {appointment.clientName}</Typography><br/>
        <Typography variant="body2">clientPhone: {appointment.clientPhone}</Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  </div>)
})
export default AppointmentItemToShow;