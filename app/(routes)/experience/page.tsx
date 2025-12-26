'use client'

import Container from '@/components/grid/container';
import Row from '@/components/grid/row';
import Column from '@/components/grid/column';
import Header from '@/components/typography/header';
import ContentTransition from '@/components/motion/content-transition';
import { EmploymentCard, ExperienceCard, experienceEntries, ExperienceEntry, ExperienceTimeline } from '@/components/experience';
import OtherCaseStudies from '@/components/case-study/other-case-studies';

export default function ExperiencePage() {
  const sortedEntries = experienceEntries.sort((a: ExperienceEntry, b: ExperienceEntry) => b.order - a.order);

  return (
    <Container className='lg:items-stretch pb-12'>
      {/* Hero Section */}
      <Row justifyXs='center' className='mt-12 mb-8 text-center'>
        <Column xl={10}>
          <ContentTransition delay={0.1}>
            <Header level={1} className='mb-2'>Professional Experience</Header>
            <Header level={3}>
              Over a decade of crafting intuitive digital experiences
            </Header>
          </ContentTransition>
        </Column>
      </Row>
      {/* Timeline - Sticky */}
      <div className='bg-red sticky top-0 z-20 mb-6 pt-4 rounded-b-2xl'>
        <Row justifyXs='center'>
          <Column sm={12}>
            <ContentTransition delay={0.15}>
              <ExperienceTimeline entries={sortedEntries} />
            </ContentTransition>
          </Column>
        </Row>
      </div>

      {/* Experience Entries */}
      {sortedEntries.map((entry: ExperienceEntry, index: number) => (
        <div key={entry.id} id={`experience-${entry.id}`}>
          <Row className='relative'>
            {/* Company Card - Sticky on Desktop */}
            <Column md={4}>
              <ContentTransition className="h-full" delay={0.2}>
                  <EmploymentCard {...entry} />
              </ContentTransition>
            </Column>

            {/* Role Details */}
            <Column
              className='pl-6'
              md={8}
            >
              <ContentTransition delay={0.2}>
                <ExperienceCard
                  description={entry.description}
                  skills={entry.skills}
                />
              </ContentTransition>
            </Column>
          </Row>
        </div>
      ))}

      {/* Case Studies CTA */}
      <OtherCaseStudies 
        currentCaseStudySlug="" 
        headerText="View my case studies"
        rowClassName='border-t-[3px] pt-10'
      />
    </Container>
  );
}
