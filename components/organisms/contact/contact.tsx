import React, { FC } from 'react';
import {
  SimpleGrid,
  Box,
  VStack,
  Heading,
  Text,
  Link,
  HStack,
  FormControl,
  Input,
  FormErrorMessage,
  FormLabel,
  Textarea,
  Button,
  useToast,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import * as emailjs from 'emailjs-com';

import { Section } from 'components';

import { getLogo } from '@utils/logo';
import { ISection, ISubSection } from '@interfaces/isection';
import { ISocialLink } from '@interfaces/ilink';
import { useColor } from '@utils/color';

export const ContactComponent: FC<ISection> = ({
  name,
  title,
  heading,
  description,
  subSections,
  socialLinks,
}) => {
  const toast = useToast();
  const { primaryColor } = useColor();

  return (
    <Section id={name} title={title} isFullHeight={false}>
      <SimpleGrid columns={{ md: 2, sm: 1 }} spacing="10" justifyContent="center">
        <Box>
          <Formik
            initialValues={{ name: '', email: '', subject: '', message: '' }}
            validate={(values) => {
              const errors: any = {};
              if (!values.name) {
                errors.name = 'Name is required!';
              }

              if (!values.email) {
                errors.email = 'Email is required!';
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              const templateParams = {
                from_email: values.email,
                from_name: values.name,
                message_html: values.message,
                subject: values.subject,
              };
              const templateID = 'template_TILnWElP';
              const userID = 'user_SLv6yXZ8hip8WVe30qqin';

              const promise = new Promise((resolve) => {
                setTimeout(() => {
                  resolve(null);
                }, 2000);
              });

              promise
                .then(() => {
                  emailjs.send('service_jdj8qw1', templateID, templateParams, userID);
                  resetForm();
                  setSubmitting(false);
                  toast({
                    title: 'Your email has successfully delivered!',
                    status: 'success',
                    isClosable: true,
                  });
                })
                .catch((e) => {
                  toast({
                    title: `Send email failed (${e}), please try again`,
                    status: 'error',
                    isClosable: true,
                  });
                });
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <VStack spacing="8">
                  <HStack alignItems="flex-start" spacing="4" width="100%">
                    <Field name="name">
                      {({ field, form }) => (
                        <FormControl isInvalid={form.errors.name && form.touched.name} isRequired>
                          <FormLabel htmlFor="name">Name</FormLabel>
                          <Input {...field} id="name" placeholder="Name" autoComplete />
                          <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="email">
                      {({ field, form }) => (
                        <FormControl isInvalid={form.errors.email && form.touched.email} isRequired>
                          <FormLabel htmlFor="email">Email</FormLabel>
                          <Input {...field} id="email" placeholder="Email" autoComplete />
                          <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </HStack>
                  <Field name="subject">
                    {({ field, form }) => (
                      <FormControl>
                        <FormLabel htmlFor="subject">Subject</FormLabel>
                        <Input {...field} id="subject" placeholder="Subject" autoComplete />
                      </FormControl>
                    )}
                  </Field>
                  <Field name="message">
                    {({ field, form }) => (
                      <FormControl>
                        <FormLabel htmlFor="message">Message</FormLabel>
                        <Textarea {...field} id="message" placeholder="Message" autoComplete />
                      </FormControl>
                    )}
                  </Field>
                  <Button
                    backgroundColor={primaryColor}
                    color="white"
                    type="submit"
                    isLoading={isSubmitting}
                    width="100%"
                    variant="solid"
                    _hover={{
                      backgroundColor: 'black',
                    }}
                  >
                    Submit
                  </Button>
                </VStack>
              </Form>
            )}
          </Formik>
        </Box>
        <Box>
          <VStack alignItems="flex-start">
            <Box mb="8">
              <Heading as="h2" size="md" mb="2">
                {heading}
              </Heading>
              <Text casing="uppercase">{description}</Text>
            </Box>
            <Box>
              {subSections?.map((item: ISubSection, index: number) => (
                <div key={`${item.title}-${index}`}>
                  <Heading as="h3" size="sm" mb="2">
                    {item.title}
                  </Heading>
                  <Text mb="8">
                    {item.title.toLowerCase() === 'address' ? (
                      <span>{item.description}</span>
                    ) : item.title.toLowerCase() === 'website' ? (
                      <Link href={item.description} aria-label={item.description}>
                        {item.description}
                      </Link>
                    ) : (
                      <Link href={`mailto:${item.description}`} aria-label={item.description}>
                        {item.description}
                      </Link>
                    )}
                  </Text>
                </div>
              ))}
            </Box>
            <Box>
              <HStack spacing="4">
                {socialLinks?.map((item: ISocialLink, index: number) => (
                  <Link
                    key={`contact-social-${index}`}
                    href={item.url}
                    target="_blank"
                    aria-label={item.name}
                    rel="noreferrer"
                  >
                    {getLogo(item.name, 'dark')}
                  </Link>
                ))}
              </HStack>
            </Box>
          </VStack>
        </Box>
      </SimpleGrid>
    </Section>
  );
};

export default ContactComponent;
