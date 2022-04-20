import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MaterialDrawer from "../Header/drawer.js";

const Header = () => {
    return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar 
            className='AppBar'
            position="fixed" 
        >
            <Toolbar>
            <MaterialDrawer/>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
            >
                Athena
            </Typography>
            </Toolbar>
        </AppBar>
    </Box>
  );
}

export default Header;