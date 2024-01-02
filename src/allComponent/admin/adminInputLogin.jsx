
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from "react"
import BusinessData from './businessMBX'
export default function AdminInputLogin() {

    const [name, setName] = useState("name")
    const [password, setPassword] = useState("password")

    const handeleLogin = async () => {
        const response = await fetch("http://localhost:8787/login", {
            method: "POST",
            body: JSON.stringify({
                name, password
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.status === 200) {
            BusinessData.setIsLogin(true);
        }
        else
            console.log(name)
    }
    return (<>
     <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField placeholder={name} onChange={(e) => setName(e.target.value)}  id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField placeholder={password} type="password" onChange={(e) => setPassword(e.target.value)}  id="outlined-basic" label="Outlined" variant="outlined" />
    </Box>
        <Button variant="outlined" onClick={() => handeleLogin()}>login</Button>
    </>)
}