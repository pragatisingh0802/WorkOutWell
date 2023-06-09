import React, {useState, useEffect} from 'react';
import {Box, Button, Stack, TextField, Typography} from '@mui/material';
// import { fetchData } from '../utils/fetchData';
import { exerciseOptions, fetchData } from '../utils/fetchData'; 
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      if (Array.isArray(bodyPartsData)) { // Check if bodyPartsData is an array
        setBodyParts(['all', ...bodyPartsData]);
      } 
      else {
        // Handle the case when bodyPartsData is not iterable
        console.error('bodyPartsData is not iterable:', bodyPartsData);
      }
    };
    fetchExercisesData();
  }, []);
  
  //async is  used to fetch the data from api 
  const handlesearch = async()=> {

    if(search){
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      
      const searchedExercises = exercisesData.filter(
        (exercise)=> exercise.name.toLowerCase().includes(search) 
                  || exercise.target.toLowerCase().includes(search)
                  || exercise.equipment.toLowerCase().includes(search)
                  || exercise.bodyPart.toLowerCase().includes(search)
      );
      //TO CLEAR THE SEARCH
      setSearch('');
      setExercises(searchedExercises);

    }
  };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx= {{fontSize: {lg: '44px', xs: '30px'}}} mb="50px" textAlign="center"> Awesome Exercises You <br/> Should know</Typography>
      <Box position="relative" mb="70px"> 
          <TextField sx={{input: { fontWeight: '700', border: 'none', borderRadius: '4px'}, width: {lg: '800px', xs: '350px'}, backgroundColor: '#fff', borderRadius:'40px'}} height = '76px'
          value={search} 
          onChange={ (e)=> setSearch(e.target.value.toLowerCase())} 
          placeholder='Search Exercises' type='text' /> 
          <Button className='search-btn' sx={{ bgcolor: '#ff2625', color:'#fff', textTransform:"none", width: { lg: '175px', xs: '80px'}, fontSize: { lg: '20px', xs: '14px'}, height: '56px', position: 'absolute', right: "0"
            }}
            onClick={handlesearch}> Search
          </Button>
      </Box>
      <Box sx ={{position: 'relative', width: '100%', p: '20px'}}> 
            <HorizontalScrollbar data ={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
      </Box>
    </Stack>
  );
};

export default SearchExercises

///////ABOUT AWAIT
// "Await" only works inside the Async functions. As you know that asynchronous function tasks are never dependent on each other. 
//They never wait to complete the first execution and run parallel. so we are talking about "Await" today in this article.
// Async/await is a new way to write Asynchronous code in JS. Before Async/Await we used callbacks and promises in our code. 
//If you never know about promises, so you need to get the concept about promises from here. 
// Actually, when we need to load more data from different API endpoints, we mostly fetch the data using fetch() function. 
//As you know that fetch() is an Async function so when we call a lot of fetch() functions to get the data from different
// API endpoints then he never waits to complete the first fetch(). In this case, your data might be lost if you are passing data
// to another component state. To solve this problem we use Async/await in our code. 
// When we call fetch() function with the await keyword, it means that await keyword telling the async function to stop the execution
// until the data comes/fetched from the server.


///////FOR USEEFFECT ERROR : bodypartsdata not iterable:
// The error message suggests that the variable bodyPartsData is not iterable. 
// In JavaScript, the for...of loop and spread operator (...) require an iterable object, such as an array, to work properly.
// To fix the error, you should ensure that bodyPartsData is an iterable before spreading it into the setBodyParts function. 
// By adding the check Array.isArray(bodyPartsData), we ensure that bodyPartsData is an array before spreading it into setBodyParts. 
// If it's not an array, an error message is logged to the console. 
// This will help identify the issue and provide more information for debugging.