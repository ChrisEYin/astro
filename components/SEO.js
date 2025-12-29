import Head from 'next/head';
import { useRouter } from 'next/router';
import siteMetadata from '@/data/siteMetadata';

const CommonSEO = ({ title, description, ogType, ogImage, twImage }) => {
  const router = useRouter();

  // Use provided image or default
  const defaultOgImage = siteMetadata.siteUrl + '/static/images/avatar.png';
  const finalOgImage = ogImage || defaultOgImage;
  const finalTwImage = twImage || finalOgImage;

  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:url" content={`${siteMetadata.siteUrl}${router.asPath}`} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteMetadata.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={finalTwImage} />
    </Head>
  );
};

export const PageSEO = ({ title, description }) => {
  const ogImageUrl = siteMetadata.siteUrl + '/static/images/default-og.jpg';

  return (
    <CommonSEO title={title} description={description} ogType="website" ogImage={ogImageUrl} />
  );
};

export const BlogSEO = ({ title, summary, date, url, images = [] }) => {
  const publishedAt = new Date(date).toISOString();
  const ogImageUrl =
    images.length > 0
      ? siteMetadata.siteUrl + images[0]
      : siteMetadata.siteUrl + '/static/images/default-og.jpg';

  return (
    <>
      <CommonSEO title={title} description={summary} ogType="article" ogImage={ogImageUrl} />
      <Head>
        <meta property="article:published_time" content={publishedAt} />
      </Head>
    </>
  );
};
