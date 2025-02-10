// src/types/sanity.ts
export interface PortableTextBlock {
  _type: 'block';
  _key: string;
  children: {
    _key: string;
    _type: 'span';
    marks: string[];
    text: string;
  }[];
  markDefs: Array<{
    _key: string;
    _type: string;
  }>;
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
}

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
}

export interface FAQ {
  _id: string;
  _type: 'faq';
  question: string;
  answer: PortableTextBlock[];
  category: string;
  order: number;
}

export interface Workshop {
  _id: string;
  _type: 'workshop';
  title: string;
  description: string;
  date: string;
  duration: number;
  track: 'ai-ml' | 'blockchain' | 'ar-vr';
  speaker?: Speaker; // Speaker can be optional
  workshopUrl: string; // Required workshop URL
  recordingUrl?: string; // Optional recording URL
}

export interface Speaker {
  _id: string;
  _type: 'speaker';
  name: string;
  pronouns?: string;
  title?: string;
  company?: string;
  bio?: PortableTextBlock[];
  image?: SanityImage;
}

export interface Partner {
  _id: string;
  _type: 'partner';
  name: string;
  logo: SanityImage;
  website?: string;
  tier?: string;
}