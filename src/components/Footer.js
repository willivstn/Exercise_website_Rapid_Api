import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="10px"  mb="30px" bgcolor="#0a0908">
    <Typography color="#fff" variant="h5" sx={{ fontSize: { lg: '18px', xs: '10px' } }} mt="0px" textAlign="center" pb="0px">Made by </Typography>
    
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />

    </Stack>
  </Box>
);

export default Footer;