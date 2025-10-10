'use client'

import { useMemo } from 'react'
import Row from '@/components/grid/row'
import Column from '@/components/grid/column'
import Header from '@/components/typography/header'
import { CaseStudyCard } from '@/components/case-study'
import { caseStudyEntries } from './data'

interface OtherCaseStudiesProps {
  currentCaseStudySlug: string;
}

const OtherCaseStudies: React.FC<OtherCaseStudiesProps> = ({ currentCaseStudySlug }) => {
  const randomCaseStudies = useMemo(() => {
    // Filter out the current case study
    const otherCaseStudies = caseStudyEntries.filter(
      (entry) => entry.slug !== currentCaseStudySlug
    );
    
    // Shuffle and select 3 random case studies
    const shuffled = [...otherCaseStudies].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  }, [currentCaseStudySlug]);

  return (
    <>
      <Row className="pt-12 border-0 border-t border-brown border-solid">
        <Column xl={12}>
          <Header level={2} className="mb-8">
            Explore More Case Studies
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

