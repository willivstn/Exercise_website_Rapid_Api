import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Eat from '../assets/images/eat.png';
import Sleep from '../assets/images/sleep.png';
import Gym from '../assets/images/gym.png';
import Repeat from '../assets/images/repeat.png';



import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '60px', xs: '30px' }, ml: { sm: '40px' } }} position="relative" p="0px">
    <Typography  color="#e0e1dd" fontWeight="600" sx={{ fontSize: { lg: '112px', xs: '70px' } }} fontSize="80px">Fitness Club</Typography>
   
    <Typography  color="#FF004F" fontWeight={700} sx={{ fontSize: { lg: '30px', xs: '20px' } }} mb="23px" mt="1px">
    <div className='textContainer'> <img src={Eat} alt="logo" style={{ width: '48px', height: '48px', margin: '20px 10px' }} />EAT</div>
    <div className='textContainer'> <img src={Sleep} alt="logo" style={{ width: '48px', height: '48px', margin: '20px 10px' }}/>SLEEP </div>
    <div className='textContainer'> <img src={Gym} alt="logo" style={{ width: '48px', height: '48px', margin: '20px 10px' }} />GYM</div>
    <div className='textContainer'> <img src={Repeat} alt="logo" style={{ width: '48px', height: '48px', margin: '20px 10px' }}/>REPEAT</div>
    </Typography>
    <Typography color="#fff" fontSize="22px" fontFamily="Alegreya" lineHeight="35px" mb="-20px" mt="100px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF004F', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;