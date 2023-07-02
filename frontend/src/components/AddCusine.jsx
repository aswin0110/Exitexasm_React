import React, { useState } from 'react'
import { Box, Button, Grid,TextField } from '@mui/material'
import axios from 'axios'


 const AddCusine = (props) => {

    var [inp,setInp]= useState(props.data)

    const inputHandler = (e)=>{
        const {name, value}= e.target;
        setInp((inp)=>({...inp,[name]:value}));
        console.log(inp);

    }

    const readHandler = () =>{

        console.log('clicked');

        if(props.method ==='post'){
            axios.post('/api/cusine',inp)
            .then((res)=>{

                alert('One data added')
            })
            .catch(err=>console.log(err))
        }

        if(props.method==='put'){
            axios.put(`/api/cusine/` + inp._id, inp)
            .then((res)=>{
                alert('data updated')
                window.location.reload(false)
            })
        }

    }

  return (
    <div >
    <Grid container style={{padding:'90px', display: 'block'}}>
    <Grid item xs={12}>
        <Box p={1}>
        <TextField id="outlined-basic" name='cuisines' value={inp.cuisines}   onChange={inputHandler} label="Cuisines: Indian/Italian only" variant="outlined" />
        
        </Box>
        <Box p={1} >
        <TextField id="outlined-basic" name='image' value={inp.image}  onChange={inputHandler} label="Image Direct Link(joeg/ong)"  variant="outlined" />
        </Box>
        <Box p={1} >
        <TextField id="outlined-basic" name='title' value={inp.title}  onChange={inputHandler} label="Title" variant="outlined" />
        </Box>             
        <Box p={1} >
        <TextField id="outlined-basic" name='duration' value={inp.duration}   onChange={inputHandler} label="Duration in minuted" variant="outlined" />
        </Box>
        <Box p={1} >
        <TextField id="outlined-basic" name='serving' value={inp.serving}  onChange={inputHandler} label="No of Servings" variant="outlined" />
        </Box>
        <Box p={1} >
        <Button variant="outlined" onClick={readHandler}>Add to movie</Button>
        </Box>

    </Grid>

</Grid>
    </div>
  )
}

export default AddCusine