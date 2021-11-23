import React, { FC } from 'react';
import { ISection, ISubSection } from '@interfaces/isection';
import { Divider, SimpleGrid, Text, HStack, VStack } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { IoEllipse } from 'react-icons/io5';

import { Section } from 'components';

import { useColor } from '@utils/color';

export const EducationComponent: FC<ISection> = ({ name, title, subSections }) => {
  const { primaryColor, subTextColor } = useColor();
  const totalColumn = subSections ? subSections.length : 0;

  return (
    <Section id={name} title={title}>
      <SimpleGrid columns={{ lg: totalColumn, md: 2, sm: 1 }} spacing="2.5">
        {subSections?.map((item: ISubSection, index: number) => (
          <VStack spacing="4" align="left" key={`${item.title}-${index}`}>
            <Text as="h2" fontSize="md" fontWeight="medium">
              {item.title}
            </Text>
            <Text as="h3" fontSize="md" fontWeight="medium" color={subTextColor}>
              {item.subTitle}
            </Text>
            <HStack>
              <Icon as={IoEllipse} color={primaryColor} />
              <Divider borderColor={primaryColor} opacity="1" />
            </HStack>
            <Text as="h4" fontSize="md">
              {item.heading.toUpperCase()}
            </Text>
            <Text as="h5" fontSize="sm" color={subTextColor}>
              {item.subHeading}
            </Text>
            <Text as="p" fontSize="sm" lineHeight="1.8">
              {item.description}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Section>
  );
};

export default EducationComponent;
