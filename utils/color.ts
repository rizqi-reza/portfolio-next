import { useColorMode } from '@chakra-ui/react';

export const useColor = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return isDark
    ? { navColor: 'white', primaryColor: 'blue.700', subTextColor: 'gray.300' }
    : { navColor: 'blue.700', primaryColor: 'blue.700', subTextColor: 'gray.500' };
};
