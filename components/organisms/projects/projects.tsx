import React, { FC } from 'react';
import { SimpleGrid, Text, Box, Image, Flex } from '@chakra-ui/react';

import { Section } from 'components';

import { ISection } from '@interfaces/isection';
import { IImage } from '@interfaces/iimage';

export const ProjectsComponent: FC<ISection> = ({ name, title, image }) => {
  return (
    <Section id={name} title={title}>
      <SimpleGrid columns={{ md: 2, sm: 1 }} spacing="8">
        {image?.map((item: IImage, index: number) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="md"
            overflow="hidden"
            shadow="md"
            position="relative"
            cursor="pointer"
            _hover={{
              '.overlay-info': {
                visibility: 'visible',
              },
              img: {
                transform: 'scale(1.2)',
              },
            }}
          >
            <Image
              src={item.url}
              alt={item.title}
              objectFit="cover"
              height="100%"
              transitionDuration="0.3s"
            />
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
            >
              <Text fontSize="lg" mb="2" casing="uppercase" fontWeight="bold">
                {item.title}
              </Text>
              <Text fontSize="sm">{item.subTitle}</Text>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Section>
  );
};

export default ProjectsComponent;
