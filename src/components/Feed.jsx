import {useState, useEffect} from 'react';
import {Box, Stack, Typography} from '@mui/material';
import SideBar from './SideBar';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fecthFromAPI';

const Feed = () => {

  const [video, setVideo] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('New')

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideo(data.items))
  },[selectedCategory]);

  return (
    <Stack sx={{flexDirection: {sx: 'column', md: 'row'}}}>
      <Box sx={{height: {sx: 'auto', md:'92vh'}, borderRight: '1px solid #3d3d3d', px:{sx:0, md:2}}}>
       <SideBar 
       selectedCategory={selectedCategory}
       setSelectedCategory={setSelectedCategory}
       />

        <Typography className='copyright' variant='body2' sx={{mt: 1.5, color: '#fff'}}>
          Copyright 2023 CloneMedia
        </Typography>
      </Box>
      
      <Box p={2} sx={{overflowY:'auto',height: '90vh', flex:2}}>
        <Typography variant="h4" fontWeight='bold' mb={2} sx={{color:'white'}}>
            {selectedCategory} <span style={{color:'#F31503'}}>videos</span>
        </Typography>

        <Videos videos = {video}/>
      </Box>

    
    </Stack>
  )};


export default Feed