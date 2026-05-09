import { useEffect, useState, useRef } from 'react';
import type { ExperienceEntry } from '@/data/experience';
import CardContainer from './card';

interface TimelineProps {
  readonly entries: ExperienceEntry[];
}

interface TimelineNode {
  id: string;
  startDate: string;
  endDate: string;
}

export default function ExperienceTimeline({ entries }: TimelineProps) {
  const [activeId, setActiveId] = useState<string>(entries[0]?.id);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [mounted, setMounted] = useState(false);
  const nodeRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const nodes: TimelineNode[] = entries.map(entry => ({
    id: entry.id,
    startDate: entry.startDate,
    endDate: entry.endDate ? entry.startDate : 'Present'
  }));

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Find which employment card is in view
      entries.forEach((entry, index) => {
        const element = document.getElementById(`experience-${entry.id}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          const inView = rect.top >= 0 && rect.top <= window.innerHeight / 2;

          if (inView) {
            setActiveId(entry.id);
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [entries]);

  // Calculate position for the moving circle
  const getCirclePosition = () => {
    const activeNode = nodeRefs.current[activeIndex];
    if (!activeNode || !mounted) return { left: 0, opacity: 0 };

    return {
      left: activeNode.offsetLeft + activeNode.offsetWidth / 2 - 8, // Center the circle (8px = half of 16px width)
      opacity: 1
    };
  };

  const scrollToExperience = (id: string) => {
    const element = document.getElementById(`experience-${id}`);
    if (element) {
      const offset = 140; // Adjust this value to align with timeline
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <CardContainer aria-label="Professional Experience Timeline">
      <nav className="flex items-center justify-between relative">
        {nodes.map((node, index) => (
          <button
            key={node.id}
            onClick={() => scrollToExperience(node.id)}
            ref={el => { nodeRefs.current[index] = el; }}
            className="flex flex-col items-center z-10 group hover:cursor-pointer"
          >
            <div
              className="bg-tan border-2 border-brown border-solid transition-colors duration-300 h-4 rounded-full w-4 group-hover:bg-orange"
              aria-label={`${node.startDate} - ${node.endDate}`}
            />
            <p
              className={`mt-2 text-brown font-signika transition-colors duration-300 cursor-pointer group-hover:text-orange ${activeId === node.id && 'text-orange font-semibold'}
            `}>
              {node.endDate}
            </p>
          </button>
        ))}

        {/* Background line */}
        <div className='absolute border-0 border-x-[3px] border-brown border-solid py-1 w-full top-0.5'>
          <div className=" bg-brown h-[3px] w-full"/>
        </div>

        {/* Moving orange circle */}
        <div
          className="absolute top-0 z-20 transition-all duration-500 ease-in-out"
          style={getCirclePosition()}
        >
          <div className="bg-orange border-2 border-brown border-solid h-4 rounded-full w-4" />
        </div>
      </nav>
    </CardContainer>
  );
}
