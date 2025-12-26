import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { ExperienceEntry } from './data';
import CardContainer from './card';
import Header from '@/components/typography/header';

interface EmploymentCardProps extends ExperienceEntry {}

export default function ExperienceCard({
  company,
  jobTitle,
  startDate,
  endDate,
  duration,
  location,
  employmentType
}: EmploymentCardProps) {
  return (
    <div className='flex flex-col justify-start border-r-[3px] border-brown border-solid h-full pr-6 pb-12 relative'>
      <div className='flex items-center md:sticky md:top-[140px]'>
        <CardContainer aria-label={`${company} - ${jobTitle}`}>
          {/* Company Name */}
          <header className="flex flex-col">
            <div className='flex items-center justify-between'>
              <Header level={3} className="font-orelega text-brown text-xl md:text-2xl font-bold mb-0">
                {company}
              </Header>
              <Briefcase className="w-5 h-5 text-red" />
            </div>
            
            {/* Job Title */}
            <Header level={4} className="text-red text-base font-signika md:text-lg font-semibold mb-0">
              {jobTitle}
            </Header>
          </header>

          {/* Divider */}
          <hr className="border-brown border-t-1 mt-3 mb-4" />

          {/* Date Range & Duration */}
          <div className="flex items-start gap-2 mb-1 text-brown text-sm md:text-base">
            <Calendar className="w-4 h-4 mt-1 flex-shrink-0" />
            <div>
              <span>{startDate} - {endDate || 'Present'}</span>
              <span className="mx-2">•</span>
              <span>{duration}</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-2 text-brown text-sm md:text-base">
            <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>{location}</span>
          </div>
        </CardContainer>
        <div className="absolute flex items-center -right-9">
          <span className="bg-brown h-[3px] w-4"/>
          <span className="bg-orange border-[3px] border-brown border-solid h-5 rounded-full w-5"/>
        </div>
      </div>
    </div>
  );
}
