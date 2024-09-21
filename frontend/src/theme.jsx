import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        transition: 'background-color 0.3s ease, color 0.3s ease',
      },
    },
  },
});

export default theme;