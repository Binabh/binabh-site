import Head from "next/head";

function SEOHead({ seo }) {
  return (
    <Head>
      <title>{seo.metaTitle}</title>
      <meta name="description" content={seo.metaDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}

export default SEOHead;
