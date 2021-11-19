import React, { FC } from 'react';
import { Container, Divider } from '@chakra-ui/react';

import { Title } from 'components';

export interface IProps {
  id: string;
  title: string;
  background?: string;
  children: JSX.Element | JSX.Element[];
}

export const SectionComponent: FC<IProps> = ({ id, title, background = 'white', children }) => (
  <section id={id} key={id}>
    <Title title={title} />
    <Container
      maxW="container.xl"
      pt={16}
      pb={16}
      sx={{ minHeight: 'calc(100vh - 188px)' }}
      colorScheme={background}
    >
      {children}
    </Container>
    <Divider />
  </section>
);
