import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from './Header';
import { Outlet, useLocation} from '@tanstack/react-router';
import '../assets/styles/global_style.scss';

const GlobalLayout = () => {
  const location = useLocation(); 

  const isHome = location.pathname === '/'; 
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {!isHome && <Header />}
      <Box padding="0" margin="0" boxSizing='border-box'>
        <Outlet />
      </Box>
    </Box>
  );
};

export default GlobalLayout;