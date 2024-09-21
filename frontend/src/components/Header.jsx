
import React from 'react';
import { Box, Flex, Heading,Spacer, Button, useColorMode, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Link } from '@tanstack/react-router';

const Header = React.memo(()=> {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg="trasnparent" color="white" padding="4"  w="100%">
      <Flex align="center">
        <Heading size="lg">Nestis</Heading>
        <Spacer />
          <Link to="/" mx="4">Home</Link>
          <Link to="/about" mx="4">About</Link>
          <Link to="/login" mx="4">Login</Link>
          <Link to="/registro" mx="4">Registro</Link>
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