import React, { FC } from 'react';
import { ISection } from '@interfaces/isection';
import {
  Box,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  Stack,
  HStack,
  VStack,
  IconButton,
} from '@chakra-ui/react';
import Image from 'next/image';

import { Section } from 'components';

import { isSupportWebp } from '@utils/webp';
import { useColor } from '@utils/color';
import { getLogo } from '@utils/logo';
import { ISocialLink } from '@interfaces/ilink';

export const AboutComponent: FC<ISection> = ({
  name,
  title,
  heading,
  description,
  image,
  socialLinks,
  subSections,
}) => {
  const { primaryColor, subTextColor } = useColor();
  const sourceImage = image?.[0];
  const profileImage = sourceImage ? (isSupportWebp() ? sourceImage.webpUrl : sourceImage.url) : '';

  return (
    <Section id={name} title={title}>
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
        <HStack bg={primaryColor}>
          <Image
            src={profileImage}
            width="400"
            height="400"
            objectFit="cover"
            alt="main-banner"
            quality={100}
          />

          <VStack spacing="4" pl="14">
            {socialLinks?.map((item: ISocialLink, index: number) => (
              <IconButton
                as="a"
                href={item.url}
                target="_blank"
                variant="outline"
                aria-label={item.name}
                fontSize="20px"
                icon={getLogo(item.name)}
                key={`about-social-${index}`}
              />
            ))}
          </VStack>
        </HStack>
      </SimpleGrid>
    </Section>
  );
};

export default AboutComponent;
