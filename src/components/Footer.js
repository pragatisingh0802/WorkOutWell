import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Footer = () => (
  <Box mt="20px" bgcolor="#FFF3F4">
    <Stack sx={{ alignItems: 'center' }}>
      <Typography variant="h8" sx={{ fontSize: { lg: '20px', xs: '15px' } }} mt="20px" textAlign="center" pb="20px">
      @2023| Pragati Singh| All Rights Reserved</Typography>
    </Stack>
    
  </Box>
);

export default Footer;