import Paragraph from '../typography/paragraph';
import Header from '../typography/header';
import CardContainer from './card';
import { ExperienceDescription } from './data';
import BackgroundCircles from './background-circles';

interface ExperienceCardProps {
  readonly description: ExperienceDescription;
  readonly skills?: string[];
}

export default function ExperienceCard({ description, skills }: ExperienceCardProps) {
  return (
    <div className='pb-12 relative'>
      <CardContainer aria-label="Role details">
        {/* Heading */}
        {description.heading && (
          <Header level={4} className="mb-1">
            {description.heading}
          </Header>
        )}

        {/* Summary */}
        {description.summary && (
          <div className="mb-4">
            <Paragraph>{description.summary}</Paragraph>
          </div>
        )}

        {/* Responsibilities */}
        {description.responsibilities && description.responsibilities.length > 0 && (
          <div className="mb-4">
            <div className='flex gap-x-2 items-center mb-1'>
              <span className='bg-orange h-6 rounded-full w-1' />
              <Header level={5} className="mb-0">Key Roles & Responsibilities</Header>
            </div>
            <ul className="list-disc list-outside ml-5 space-y-1">
              {description.responsibilities.map((item, index) => (
                <li className="text-lg text-brown" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Skills Badges */}
        {skills && skills.length > 0 && (
          <div>
            <div className='flex gap-x-2 items-center mb-3'>
              <span className='bg-orange h-6 rounded-full w-1' />
              <Header level={5} className="mb-0">Toolkit</Header>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-orange text-brown px-2 py-1 rounded-md text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </CardContainer>
      <BackgroundCircles />
    </div>
  );
}
