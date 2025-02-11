// src/components/Seo.tsx
import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
}

export const Seo = ({ 
  title,
  description,
  url = 'https://createherfest-website-staging.web.app',
  image = 'https://createherfest-website-staging.web.app/images/social-share.jpg' // Make sure this image exists
}: SeoProps) => {
  const fullTitle = `${title} | CreateHER Fest`;
  
  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* OpenGraph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="CreateHER Fest" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* LinkedIn Meta Tags */}
      <meta property="linkedin:title" content={fullTitle} />
      <meta property="linkedin:description" content={description} />
      <meta property="linkedin:image" content={image} />
    </Helmet>
  );
};