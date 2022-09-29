import React, { FC } from 'react';
import { ISection, ISubSection } from '@interfaces/isection';
import { Divider, Text, VStack, Flex, Image, Icon } from '@chakra-ui/react';
import { IoEllipse } from 'react-icons/io5';

import { Section } from 'components';

import { useColor } from '@utils/color';

export const ExperienceComponent: FC<ISection> = ({ name, title, subSections }) => {
  const { primaryColor, subTextColor } = useColor();

  const getTimeInfo = (item: ISubSection, align: 'start' | 'end') => (
    <VStack align={align} w="100%">
      <Text as="h2" fontSize="md" fontWeight="medium">
        {item.title}
      </Text>
      <Text as="h3" fontSize="sm" fontWeight="bold" color={subTextColor} casing="uppercase">
        {item.subTitle}
      </Text>
    </VStack>
  );

  const getJobInfo = (item: ISubSection, align: 'start' | 'end') => (
    <VStack align={align} w="100%" mb="12">
      <Image
        src={item.url}
        alt={item.heading}
        width="100%"
        maxHeight="50"
        objectFit="contain"
        objectPosition={align === 'start' ? 'left' : 'right'}
        mb="2"
      />
      <Text as="h4" fontSize="md" casing="uppercase" fontWeight="bold">
        {item.heading}
      </Text>
      <Text as="h5" fontSize="sm" color={subTextColor}>
        {item.subHeading}
      </Text>
      <Text as="p" fontSize="sm" lineHeight="1.8" align={align}>
        {item.description}
      </Text>
    </VStack>
  );

  const getExperience = (item: ISubSection, index: number) => {
    const isEven = index % 2 === 0;
    return (
      <div key={`${item.title}-${index}`}>
        <Flex justify="center" mb="2.5" display={['flex', 'none']}>
          <VStack>
            <Icon as={IoEllipse} color={primaryColor} ml="0.5" />
            <Divider borderColor={primaryColor} opacity="1" orientation="vertical" />
          </VStack>
          <VStack ml="4" mb="8">
            {getTimeInfo(item, 'start')}
            {getJobInfo(item, 'start')}
          </VStack>
        </Flex>

        <Flex justify="center" mb="2.5" display={['none', 'flex']}>
          {isEven ? getTimeInfo(item, 'end') : getJobInfo(item, 'end')}
          <VStack ml="16" mr="16">
            <Icon as={IoEllipse} color={primaryColor} ml="0.5" />
            <Divider borderColor={primaryColor} opacity="1" orientation="vertical" />
          </VStack>
          {isEven ? getJobInfo(item, 'start') : getTimeInfo(item, 'start')}
        </Flex>
      </div>
    );
  };

  return (
    <Section id={name} title={title}>
      {subSections?.map((item: ISubSection, index: number) => getExperience(item, index))}
    </Section>
  );
};

export default ExperienceComponent;
