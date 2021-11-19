import React, { FC } from 'react';
import { ISection, ISubSection } from '@interfaces/isection';
import { Container, SimpleGrid, Text, Box, Image } from '@chakra-ui/react';

import { Title } from 'components';

import { useColor } from '@utils/color';

export const SkillsComponent: FC<ISection> = ({ name, title, subSections }) => {
  const { subTextColor } = useColor();

  return (
    <section id={name} key={name} className="education">
      <Title title={title} />
      <Container maxW="container.xl" pt={16} pb={16}>
        <SimpleGrid columns={4} spacing="10">
          {subSections?.map((item: ISubSection, index: number) => (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="md"
              overflow="hidden"
              shadow="md"
              textAlign="center"
              p="4"
            >
              <Box h="150">
                <Image src={item.url} alt={item.title} width="100%" />
              </Box>
              <Text fontSize="lg" mb="2" color={subTextColor}>
                {item.title}
              </Text>
              <Text fontSize="sm">{item.description}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
};

export default SkillsComponent;
