import React from 'react';
import Row from '@/components/grid/row';
import Column from '@/components/grid/column';
import Header from '@/components/typography/header';
import ContentTransition from '@/components/motion/content-transition';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  delay?: number;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, delay = 0.1 }) => {
  return (
    <Row justifyXs='center' className='mt-12 mb-8 text-center'>
      <Column xl={10}>
        <ContentTransition delay={delay}>
          <Header level={1} className='mb-2'>{title}</Header>
          {subtitle && (
            <Header level={3}>{subtitle}</Header>
          )}
        </ContentTransition>
      </Column>
    </Row>
  );
};

export default PageHeader;
