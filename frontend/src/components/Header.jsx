
import React from 'react';
import { Box, Flex,Spacer, useColorMode, IconButton, Stack } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Link, useLocation } from '@tanstack/react-router';

const Header = React.memo(()=> {
  const { colorMode, toggleColorMode } = useColorMode();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <Box color="white" padding="5"  w="100%" bg={isHomePage ? 'transparent' : '#47bb94'}>
      <Flex align="center">
        
        <Spacer />
        <Stack direction="row" spacing="6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
          <Link to="/registro">Registro</Link>
        </Stack>

        <IconButton
          aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          ml="4"
        />
      </Flex>
    </Box>
  );
}); 

export default Header;