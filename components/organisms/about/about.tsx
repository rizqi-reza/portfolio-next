import React, { FC } from 'react';
import { ISection } from '@interfaces/isection';
import { Box, Container, Divider, Flex, Heading, SimpleGrid, Text, Stack } from '@chakra-ui/react';
import Image from 'next/image';

import { Title } from 'components';

import { isSupportWebp } from '@utils/webp';
import { useColor } from '@utils/color';

export const AboutComponent: FC<ISection> = ({
  name,
  title,
  heading,
  description,
  image,
  subSections,
}) => {
  const { primaryColor, subTextColor } = useColor();
  const sourceImage = image?.[0];
  const profileImage = sourceImage ? (isSupportWebp() ? sourceImage.webpUrl : sourceImage.url) : '';

  return (
    <section id={name} key={name}>
      <Title title={title} />
      <Container maxW="container.xl" pt={16} pb={16}>
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="100">
          <Box>
            <Heading as="h3" size="sm" mb="4" fontWeight="500" lineHeight={1.8}>
              {heading}
            </Heading>
            <Text lineHeight={1.8}>{description}</Text>
            <Divider mt="8" mb="8" />
            <Flex justifyContent="space-between">
              {subSections?.map((sub) => (
                <Stack key={sub.title} textAlign="left">
                  <Heading as="h4" size="sm">
                    {sub.title}
                  </Heading>
                  <Text color={subTextColor} lineHeight={1.8}>
                    {sub.description}
                  </Text>
                </Stack>
              ))}
            </Flex>
          </Box>
          <Box bg={primaryColor} height="400">
            <Image
              src={profileImage}
              width="400"
              height="400"
              objectFit="cover"
              alt="main-banner"
              quality={100}
            />
          </Box>
        </SimpleGrid>
      </Container>
      <Divider />
    </section>
  );
};

export default AboutComponent;
