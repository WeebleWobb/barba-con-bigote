import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Header from '@/components/typography/header';

interface CaseStudyCardProps {
  img: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  title: string;
  cta: {
    text: string;
    href: string;
  };
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ img, title, cta }) => {
  return (
    <Link
      href={cta.href}
      className="border-[3px] border-brown border-solid group block my-3 me-6 overflow-hidden rounded-2xl shadow-lg relative"
    >
      <Image
        src={img.src}
        alt={img.alt}
        width={img.width || 800}
        height={img.height || 600}
        style={{ width: '100%', height: 'auto' }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-orange/85  opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center px-6 text-white">
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <Header 
            level={4} 
            className="font-signika font-semibold mb-2 text-brown text-center"
          >
              {title}
          </Header>
          <span className="font-medium block text-center text-lg">{cta.text}</span>
        </div>
      </div>
    </Link>
  );
};

export default CaseStudyCard;
