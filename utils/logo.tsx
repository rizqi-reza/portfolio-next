import { Icon } from '@chakra-ui/react';
import { IoLogoGithub, IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram } from 'react-icons/io5';

export const getLogo = (name: string, color: 'light' | 'dark' = 'light') => {
  const logoColor = color === 'light' ? 'white' : 'blue.700';
  switch (name) {
    case 'github':
      return <Icon as={IoLogoGithub} color={logoColor} />;
    case 'twitter':
      return <Icon as={IoLogoTwitter} color={logoColor} />;
    case 'linkedin':
      return <Icon as={IoLogoLinkedin} color={logoColor} />;
    default:
      return <Icon as={IoLogoInstagram} color={logoColor} />;
  }
};
