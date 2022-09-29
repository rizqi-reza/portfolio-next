import React, { FC } from 'react';
import { Box, Flex, Heading, Badge, Button } from '@chakra-ui/react';
import Image from 'next/image';

import { ISection } from '@interfaces/isection';
import { isSupportWebp } from '@utils/webp';

export const MainBannerComponent: FC<ISection> = ({
  name,
  title,
  description,
  image,
  mainLink,
}) => {
  const sourceImage = image?.[0];
  const bannerImage = sourceImage ? (isSupportWebp() ? sourceImage.webpUrl : sourceImage.url) : '';

  return (
    <section id={name} key={name}>
      <Box
        height="100vh"
        width="100%"
        position="relative"
        zIndex="banner"
        _before={{
          content: `''`,
          position: 'absolute',
          height: '100%',
          width: '100%',
          background: 'gray.700',
          opacity: 0.5,
          zIndex: 'banner',
        }}
      >
        <Image src={bannerImage} layout="fill" objectFit="cover" alt="main-banner" quality={100} />
        <Flex
          justifyContent="space-around"
          alignItems="center"
          height="100vh"
          flexDirection="column"
          pt="36"
        >
          <Heading
            as="h1"
            size="3xl"
            fontWeight={700}
            lineHeight={1.5}
            textAlign="center"
            color="white"
            zIndex="overlay"
          >
            <span>HI, I AM</span>
            <br />
            <span>{title.toUpperCase()}</span>
            <br />
            <Badge
              variant="subtle"
              fontSize={18}
              colorScheme="white"
              zIndex="overlay"
              fontWeight="medium"
            >
              {description.toUpperCase()}
            </Badge>
          </Heading>
          <Button
            as="a"
            href={mainLink}
            target="_blank"
            variant="solid"
            size="md"
            colorScheme="blue"
            mt="24"
            zIndex="overlay"
            rel="noreferrer"
          >
            Download Resume
          </Button>
        </Flex>
      </Box>
    </section>
  );
};

export default MainBannerComponent;
