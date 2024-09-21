import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from './Header';
import { Outlet } from '@tanstack/react-router';

const GlobalLayout = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Box padding="4">
        <Outlet />
      </Box>
    </Box>
  );
};

export default GlobalLayout;