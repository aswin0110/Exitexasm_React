import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import axios from 'axios';
import AddCusine  from './AddCusine';

const Home = () => {
    const classes = {
        root: {
          flexGrow: 1
        },
        paper: {
          padding: 20,
          textAlign: "center",
          color: "blue",
          fontFamily: "Roboto"
        }
      };

    //   get all datas
      var [alldata,setAlldata] = useState([])

      useEffect(()=>{
        axios.get(`/api/cusine/`)
        .then((res)=>{
            setAlldata(res.data)
        })
      })

    //   delete by id
    const deleteCuisines = (id) =>{
        axios.delete(`/api/cusine/${id}`)
        .then((res)=>{
            alert('One Item Deleted')
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    // update
    var [update,setUpdate] = useState(false) 
    var [singleValue, setSingleValue]= useState([])

    const updateValue = (value) =>{
      console.log('clicked');
      console.log(value);
      setUpdate(true)
      setSingleValue(value)

    }

    var finalJSX = <div style={{padding:'90px'}}>

    <Typography variant='h4'>Indian & Italian Cuisines </Typography>
    <Grid container spacing={3}>
      {alldata.map((val,i)=>{
       return ( 
        <Grid key={i} item xs={6} sm={3}>
            <Paper style={classes.paper}>
            <img src={val.image}  style={{width:'150px', height:'150px'}} alt="Images" />
            <Typography variant='h5' style={{color:'black'}}>{val.title}</Typography>
            <Typography variant='h6'>{val.cuisines}</Typography>
            <Typography>Time: {val.duration}min || Servings: {val.serving}</Typography>
            <Button size="small" onClick={()=>{updateValue(val)}}>Edit</Button>
            <Button size="small" onClick={()=> deleteCuisines(val._id)}>Delete</Button>
            </Paper>
        </Grid>)
    })}
    
  </Grid>
</div>


if (update) finalJSX = <AddCusine data={singleValue} method='put' />
  return  finalJSX
}

export default Home
