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
    <div className="bg-grey m-3 overflow-hidden rounded-2xl shadow-lg ">
      <div className="relative w-full h-48 md:h-64">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <Header level={4} className="font-signika font-semibold mb-4">{title}</Header>
        <Link 
          href={cta.href}
          className="inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors"
        >
          {cta.text}
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyCard;
