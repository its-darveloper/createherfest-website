// src/components/Seo.tsx
import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
}

export const Seo = ({ 
  title,
  description,
  url = 'https://createherfest-website-staging.web.app/code-of-conduct',
  image = 'https://createherfest-website-staging.web.app/og-image.jpg', // Make sure this exists
  type = 'article',
  author = 'CreateHER Fest',
  publishedTime = new Date().toISOString()
}: SeoProps) => {
  const fullTitle = `${title} | CreateHER Fest`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      
      {/* OpenGraph / Facebook / LinkedIn */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="CreateHER Fest" />
      
      {/* Article Specific */}
      <meta property="article:published_time" content={publishedTime} />
      <meta property="article:author" content={author} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Important Meta Tags */}
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
    </Helmet>
  );
};