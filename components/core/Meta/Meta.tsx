import Head from 'next/head';
import React from 'react';

interface Props {
  title?: string;
  description?: string;
  image?: string;
}

const Meta = ({
  title = 'Buy best and quality products',
  description = 'Prydee Store | Buy best and quality products',
  image = 'https://dress-shop.vercel.app/featured.png',
}: Props) => {
  const siteTitle = `Prydee store | ${title}`;

  return (
    <Head>
      <title>{siteTitle}</title>

      <meta name="twitter:card" content={description} />
      <meta name="twitter:site" content="@prydee_store" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
};

export default Meta;
