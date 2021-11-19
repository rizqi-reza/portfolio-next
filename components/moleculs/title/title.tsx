import React, { FC } from 'react';
import { Box, Heading, Divider } from '@chakra-ui/react';

export interface IProps {
  title: string;
}

export const TitleComponent: FC<IProps> = ({ title }) => {
  return (
    <Box>
      <Heading as="h1" size="lg" textAlign="center" p="8">
        {title.toUpperCase()}
      </Heading>
      <Divider />
    </Box>
  );
};
