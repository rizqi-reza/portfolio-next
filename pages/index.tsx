import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import {
  Navbar,
  MainBanner,
  About,
  Education,
  Skills,
  Experience,
  Projects,
  Contact,
  Footer,
} from 'components';

import { IPage } from '@interfaces/ipages';

const MainPage: NextPage<IPage> = ({ title, description, navigationMenus, sections }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar title={title} menus={navigationMenus} />
      <MainBanner {...sections?.[0]} />
      <About {...sections?.[1]} />
      <Education {...sections?.[2]} />
      <Skills {...sections?.[3]} />
      <Experience {...sections?.[4]} />
      <Projects {...sections?.[5]} />
      <Contact {...sections?.[6]} />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://api.npoint.io/fac4c9c3dbc85d834ebc');
  const pageData = await res.json();

  return { props: { ...pageData } };
};

export default MainPage;
