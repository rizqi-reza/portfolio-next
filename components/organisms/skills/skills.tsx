import React, { FC } from 'react';
import { ISection, ISubSection } from '@interfaces/isection';
import { SimpleGrid, Image, Flex, Text } from '@chakra-ui/react';

import { Section } from 'components';

export const SkillsComponent: FC<ISection> = ({ name, title, subSections }) => (
  <Section id={name} title={title}>
    <SimpleGrid columns={{ lg: 4, md: 2, sm: 1 }} spacing="10">
      {subSections?.map((item: ISubSection, index: number) => (
        <Flex
          key={index}
          position="relative"
          cursor="pointer"
          overflow="hidden"
          textAlign="center"
          justify="center"
          p="4"
          _hover={{
            '.overlay-info-stack': {
              visibility: 'visible',
            },
          }}
        >
          <Image
            src={item.url}
            alt={item.title}
            maxWidth="100%"
            maxHeight="120"
            objectFit="contain"
            mb="2"
          />
          <Flex
            className="overlay-info-stack"
            position="absolute"
            left="0"
            right="0"
            top="0"
            bottom="0"
            bg="rgba(12, 14, 47, 0.8)"
            color="white"
            flexDir="column"
            borderRadius="md"
            alignItems="center"
            justify="center"
            visibility="hidden"
          >
            <Text fontSize="lg" mb="2" fontWeight="bold">
              {item.title}
            </Text>
            <Text fontSize="sm">{item.subTitle}</Text>
          </Flex>
        </Flex>
      ))}
    </SimpleGrid>
    <Flex
      className="overlay-info"
      position="absolute"
      left="0"
      right="0"
      top="0"
      bottom="0"
      bg="rgba(12, 14, 47, 0.8)"
      color="white"
      flexDir="column"
      alignItems="center"
      justify="center"
      visibility="hidden"
    ></Flex>
  </Section>
);

export default SkillsComponent;
