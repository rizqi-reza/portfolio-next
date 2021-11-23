import React, { FC } from 'react';
import { ISection, ISubSection } from '@interfaces/isection';
import { SimpleGrid, Text, Box, Image } from '@chakra-ui/react';

import { Section } from 'components';

import { useColor } from '@utils/color';

export const SkillsComponent: FC<ISection> = ({ name, title, subSections }) => {
  const { subTextColor } = useColor();

  return (
    <Section id={name} title={title}>
      <SimpleGrid columns={{ lg: 4, md: 2, sm: 1 }} spacing="10">
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
            <Image
              src={item.url}
              alt={item.title}
              width="100%"
              maxHeight="100"
              objectFit="contain"
              mb="2"
            />
            <Text fontSize="lg" mb="2" color={subTextColor}>
              {item.title}
            </Text>
            <Text fontSize="sm">{item.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Section>
  );
};

export default SkillsComponent;
