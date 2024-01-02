import { observer } from "mobx-react-lite";
import BusinessData from './businessMBX'
import AdminOption from "./adminOption";
// import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import CardActions from '@mui/material/CardActions';

const AdminBusinessToShow = observer(() => {
  return (<>
    <Card variant="outlined" sx={{ width: 320 }}>
      <CardActions>
        <CardContent>
          {/* <img
            id="img"
            src="https://api.freelogodesign.org/assets/thumb/logo/a17b07eb64d341ffb1e09392aa3a1698_400.png"
            alt="תיאור תמציתי של הלוגו"
            style={{ width: "10%" }} // או height: "10%" לפי הצורך
          /> */}
          <Typography level="body-md">Name: {BusinessData.buisness.name}</Typography>
          <Typography level="body-sm">Adress: {BusinessData.buisness.adress}</Typography>
          <Typography level="body-sm">Phone: {BusinessData.buisness.phone}</Typography>
          <Typography level="body-sm">Owner: {BusinessData.buisness.owner}</Typography>
          <Typography level="body-sm">Description: {BusinessData.buisness.description}</Typography>
        </CardContent>
      </CardActions>
    </Card>
    {BusinessData.isLogin && <AdminOption></AdminOption>}</>
  )
})
export default AdminBusinessToShow;