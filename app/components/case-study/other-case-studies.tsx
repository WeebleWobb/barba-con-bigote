'use client'

import { useState, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import Row from '@/components/grid/row'
import Column from '@/components/grid/column'
import Header from '@/components/typography/header'
import { CaseStudyCard } from '@/components/case-study'
import { caseStudyEntries } from '@/data/case-studies'

interface OtherCaseStudiesProps {
  currentCaseStudySlug: string;
  headerText?: string;
  rowClassName?: string;
}

const OtherCaseStudies: React.FC<OtherCaseStudiesProps> = ({
  currentCaseStudySlug,
  headerText = 'Explore More Case Studies',
  rowClassName = ''
}) => {
  const [randomCaseStudies, setRandomCaseStudies] = useState<typeof caseStudyEntries>([]);

  useEffect(() => {
    // Filter out the current case study
    const otherCaseStudies = caseStudyEntries.filter(
      (entry) => entry.slug !== currentCaseStudySlug
    );

    // Shuffle and select 3 random case studies
    const shuffled = [...otherCaseStudies].sort(() => Math.random() - 0.5);
    setRandomCaseStudies(shuffled.slice(0, 3));
  }, [currentCaseStudySlug]);

  return (
    <>
      <Row className={twMerge('pt-12 border-0 border-t border-brown border-solid', rowClassName)}>
        <Column xl={12}>
          <Header level={2} className="mb-8">
            {headerText}
          </Header>
        </Column>
      </Row>
      <Row justifyXs="center">
        {randomCaseStudies.map((caseStudy) => (
          <Column md={4} key={caseStudy.slug}>
            <CaseStudyCard
              img={{
                src: caseStudy.image,
                alt: caseStudy.title
              }}
              title={caseStudy.title}
              cta={{
                text: "View Project",
                href: caseStudy.link
              }}
            />
          </Column>
        ))}
      </Row>
    </>
  );
};

export default OtherCaseStudies;

