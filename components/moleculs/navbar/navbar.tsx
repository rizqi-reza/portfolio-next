import React, { createRef, FC, useEffect, useState } from 'react';
import {
  useColorMode,
  Box,
  Container,
  Heading,
  Switch,
  Flex,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  useDisclosure,
  Link,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import ScrollSpy from 'react-scrollspy-navigation';

import { INavigation } from '@interfaces/inavigation';
import { useColor } from '@utils/color';

export interface IProps {
  title: string;
  menus: INavigation[];
}

export const NavbarComponent: FC<IProps> = ({ title, menus }) => {
  const { isOpen: isOpenMenu, onOpen: onOpenMenu, onClose: onCloseMenu } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const { navColor } = useColor();
  const isDark = colorMode === 'dark';

  const [isTopPage, setIsTopPage] = useState<boolean>();
  const navBackground = !isTopPage ? 'transparent' : isDark ? 'gray.800' : 'white';

  useEffect(() => {
    const handleScroll = () => {
      setIsTopPage(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const links = menus?.map((menu, index) => (
    <Link
      key={index}
      href={menu.url}
      aria-label={menu.title}
      ml="4"
      p="2"
      fontWeight="medium"
      color={isTopPage ? 'inherit' : 'white'}
      _hover={{ color: navColor }}
      _focus={{ boxShadow: 'none' }}
      ref={createRef()}
    >
      {menu.title}
    </Link>
  ));

  return (
    <Box
      as="header"
      position="fixed"
      w="100%"
      zIndex="overlay"
      background={navBackground}
      boxShadow={!isTopPage ? 'none' : 'md'}
      transitionDuration="0.3s"
      transitionTimingFunction="linear"
    >
      <Container maxW="container.xl" p={2}>
        <Flex align="center" justify="space-between" wrap="wrap">
          <Heading
            as="h2"
            size="md"
            letterSpacing="tighter"
            color={isTopPage ? navColor : 'white'}
            cursor="pointer"
            onClick={scrollToTop}
          >
            {title?.toUpperCase()}
          </Heading>

          <Flex
            sx={{
              '.active': {
                borderBottom: '2px solid',
                borderColor: navColor,
              },
            }}
          >
            {/* Desktop */}
            <Box my="6" display={['none', 'none', 'none', 'block']}>
              <ScrollSpy offsetTop={88}>{links}</ScrollSpy>
            </Box>

            <Switch
              color="teal"
              isChecked={isDark}
              onChange={toggleColorMode}
              alignSelf="center"
              ml="8"
            />

            {/* Mobile */}
            <IconButton
              aria-label="Open Menu"
              size="md"
              ml={4}
              icon={<HamburgerIcon />}
              onClick={onOpenMenu}
              display={['flex', 'flex', 'flex', 'none']}
            />
          </Flex>

          {/* Mobile Content */}
          <Drawer onClose={onCloseMenu} isOpen={isOpenMenu} size="xs">
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody>
                <Flex flexDir="column" align="center" mt="20">
                  <ScrollSpy>{links}</ScrollSpy>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Container>
    </Box>
  );
};
