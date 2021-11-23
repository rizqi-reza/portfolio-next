import React, { FC } from 'react';
import { ISection } from '@interfaces/isection';
import {
  Box,
  Divider,
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
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="50">
        <Box>
          <Heading as="h2" size="sm" mb="4" fontWeight="500" lineHeight={1.8}>
            {heading}
          </Heading>
          <Text lineHeight={1.8}>{description}</Text>
          <Divider mt="8" mb="8" />
          <Stack justifyContent="space-between" direction={['column', 'row']}>
            {subSections?.map((sub) => (
              <Stack key={sub.title} textAlign="left">
                <Heading as="h3" size="sm">
                  {sub.title}
                </Heading>
                <Text color={subTextColor} lineHeight={1.8} fontSize="sm">
                  {sub.description}
                </Text>
              </Stack>
            ))}
          </Stack>
        </Box>
        <HStack bg={primaryColor} minHeight="300px">
          <Box position="relative" height="100%" width="100%">
            <Image
              src={profileImage}
              layout="fill"
              objectFit="cover"
              alt="profile-image"
              quality={100}
            />
          </Box>

          <VStack spacing="4" width="100px">
            {socialLinks?.map((item: ISocialLink, index: number) => (
              <IconButton
                as="a"
                href={item.url}
                target="_blank"
                variant="ghost"
                aria-label={item.name}
                fontSize="20px"
                icon={getLogo(item.name)}
                key={`about-social-${index}`}
                rel="noreferrer"
              />
            ))}
          </VStack>
        </HStack>
      </SimpleGrid>
    </Section>
  );
};

export default AboutComponent;
