import React from 'react';
import { NextPage } from 'next';
import NextLink from 'next/link';
import { Button, Container, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';

const NotFoundPage: NextPage = () => {
  return (
    <Container maxW={'7xl'} py={20}>
      <Flex direction={['column', 'row']} alignItems="center">
        <Flex w={'full'}>
          <Image
            alt="404"
            src="https://res.cloudinary.com/rizqireza/image/upload/v1613781459/Portofolio/404.svg"
          />
        </Flex>
        <Stack textAlign={'center'} align={'center'} spacing={{ base: 8, md: 10 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            404{' '}
            <Text as={'span'} color={'blue.700'} _hover={{ color: 'red' }}>
              NOT
            </Text>{' '}
            FOUND
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
            Sorry, the page you are looking for is not found. You&apos;re either misspelling the URL
            or requesting a page that&apos;s no longer here.
          </Text>
          <Stack spacing={6} direction={'row'}>
            <NextLink href="/">
              <Button rounded={'full'} px={6} colorScheme={'teal'}>
                Back to Home
              </Button>
            </NextLink>
          </Stack>
        </Stack>
      </Flex>
    </Container>
  );
};

export default NotFoundPage;
