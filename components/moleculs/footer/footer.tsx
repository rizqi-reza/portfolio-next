import React, { FC } from 'react';
import { Box, Text, Link, IconButton, keyframes } from '@chakra-ui/react';
import { ChevronUpIcon } from '@chakra-ui/icons';

export interface IProps {
  title: string;
}

const floating = keyframes`
  from {padding-top: 8px;}
  to {padding-top: -8px;}
`;

export const FooterComponent: FC = () => {
  const floatingAnimation = `${floating} infinite 1s`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <Box my="4" p="4">
      <Text textAlign="center" casing="capitalize" fontSize={[12, 14]}>
        &copy; copyright Rizqi Reza Valhevi. design and developed by{' '}
        <Link
          href="https://github.com/rizqi-reza"
          target="_blank"
          aria-label="github-link"
          rel="noreferrer"
        >
          rizqi-reza
        </Link>
      </Text>

      <IconButton
        animation={floatingAnimation}
        aria-label="Scroll to Top"
        size="md"
        ml={4}
        icon={<ChevronUpIcon />}
        position="fixed"
        right="4"
        bottom="4"
        onClick={scrollToTop}
      />
    </Box>
  );
};
