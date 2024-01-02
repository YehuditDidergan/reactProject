import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Home() {
    return (<>
        <Box  sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Button variant="outlined" ><Link to="admin">admin</Link></Button>
                    <Button variant="outlined" ><Link to="client">client</Link></Button><br />
                </Toolbar>
            </AppBar>
        </Box>
        <img
            id="img"
            src="https://api.freelogodesign.org/assets/thumb/logo/a17b07eb64d341ffb1e09392aa3a1698_400.png"
            alt="תיאור תמציתי של הלוגו"
            style={{ width: "30%" }} // או height: "10%" לפי הצורך
        />
        <Outlet></Outlet>
    </>)
}