import React, { FC } from 'react';
import { ISection, ISubSection } from '@interfaces/isection';
import { Container, Divider, SimpleGrid, Text, HStack, VStack } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { IoEllipse } from 'react-icons/io5';

import { Title } from 'components';

import { useColor } from '@utils/color';

export const EducationComponent: FC<ISection> = ({ name, title, subSections }) => {
  const { primaryColor, subTextColor } = useColor();
  const totalColumn = subSections ? subSections.length : 0;

  return (
    <section id={name} key={name} className="education">
      <Title title={title} />
      <Container maxW="container.xl" pt={16} pb={16}>
        <SimpleGrid columns={totalColumn} spacing="2.5">
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
      </Container>
      <Divider />
    </section>
  );
};

export default EducationComponent;
