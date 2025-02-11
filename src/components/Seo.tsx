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
  url,
  image,
  type = 'article',
  author = 'CreateHER Fest',
  publishedTime = new Date().toISOString()
}: SeoProps) => {
  const fullTitle = `${title} | CreateHER Fest`;
  const baseUrl = 'https://createherfest-website-staging.web.app';
  const finalUrl = url || `${baseUrl}/code-of-conduct`;
  const finalImage = image || 'https://cdn.prod.website-files.com/61feaeaa52128ab2ccab4143/65d215122fb696a06ed21612_baddiecommunity-p-1600.jpg';
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      
      {/* Essential OpenGraph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={finalImage} />
      
      {/* Additional OpenGraph */}
      <meta property="og:site_name" content="CreateHER Fest" />
      <meta property="og:locale" content="en_US" />
      <meta property="article:published_time" content={publishedTime} />
      <meta property="article:author" content={author} />
      
      {/* Image Specifics */}
      <meta property="og:image:width" content="1600" />
      <meta property="og:image:height" content="900" />
      <meta property="og:image:type" content="image/jpeg" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={finalImage} />
      
      {/* Canonical */}
      <link rel="canonical" href={finalUrl} />
    </Helmet>
  );
};