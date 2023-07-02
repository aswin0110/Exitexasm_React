import React from 'react'
import { Button, AppBar, Box, CssBaseline, Toolbar, Typography, } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline/>
            <AppBar sx={{ mr: 0 }}>
                
                <Toolbar>
                    <Typography variant='h5'  >
                        Food Recipe's
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          <Button color="inherit"><Link to={'/'}  style={{textDecoration:'none', color:'white'}}>Home</Link></Button>
          <Button color="inherit"><Link to={'/cusine'}  style={{textDecoration:'none', color:'white'}}>Add Cusine</Link></Button>
         

                </Toolbar>
            </AppBar>

        </Box>
    </div>
  )
}

export default Navbar