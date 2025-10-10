import { Metadata } from 'next'
import { CaseStudyLayout, Section, Subsection } from '@/components/case-study'
import { List, Paragraph } from '@/components/typography'

export const metadata: Metadata = {
  title: 'Improving Education and Guidance',
  description: 'Enhancing the element menu with contextual help and educational resources'
}

export default function CaseStudy() {
  return (
    <CaseStudyLayout
      title="Improving Education and Guidance"
      description="Enhancing the element menu with contextual help and educational resources"
      imageText="Element+Menu+Update"
    >
      <Section title="The Challenge">
        <Paragraph>
          As the editors evolved with rich features, AWeber customer feedback consistently highlighted 
          a critical need: more guidance and education within the platform. NPS surveys throughout 2023 
          repeatedly emphasized that customers struggled to discover and utilize the platform's capabilities 
          without clear, accessible guidance.
        </Paragraph>
        
        <Paragraph>
          This case study explores how introducing contextual education into the content creation experience
          guides users to create effective messages and send broadcasts more confidently.
        </Paragraph>
        
        <Subsection title="Voice of the Customer">
          <List items={[
            { title: "Q1 2023", description: "Initial feedback highlighted confusion around certain editor features" },
            { title: "Q2 2023", description: "UI/UX focused surveys showed customers specifically requesting more in-context help" },
            { title: "Q3 2023", description: "Continued emphasis on education needs, particularly for newer features" },
            { title: "Q4 2023", description: "Key takeaways pointed directly to the need for integrated guidance during content creation" },
          ]}
          />
        </Subsection>
        
        <Subsection title="Contextual Help Pattern Success">
          <List 
            openingStatement="Throughout 2024, implementation of contextual help patterns in other areas of the application provided promising results:"
            items={[
              { description: "Areas with contextual guidance showed higher feature adoption rates" },
              { description: "Support tickets related to features with integrated help decreased" },
              { description: "User confidence, measured through task completion rates, increased in sections with clear guidance" },
            ]} 
          />
          <Paragraph>
            These observations collectively pointed to a clear opportunity: integrating education directly into the editor would provide customers with the guidance they need to use elements correctly, helping them build the messages and designs they want with clear "how-to" instructions.
          </Paragraph>
        </Subsection>
      </Section>

      <Section title="Solution: Three Key Innovations Through Iteration">
        <Paragraph>
          The Element Menu is one of the most frequently used components in the editor, providing essential building blocks for message creation. Enhancing this critical touchpoint with educational content and feedback mechanisms offered the highest potential impact, enabling customers to create effective designs and send broadcasts more efficiently.
        </Paragraph>
        
        <Subsection title="Element Tooltips">
          <Paragraph>
            The previous Element Menu took a "less is more" UI approach, displaying only labels and icons while assuming clarity between elements and their functions.
          </Paragraph>
          <List
            openingStatement="This minimalist design created several challenges:"
            items={[
              { description: "Users struggled to understand the purpose and capabilities of different elements" },
              { description: "The relationship between elements was unclear" },
              { description: "There was no contextual guidance to help users make appropriate choices" },
              { description: "Learning was dependent on external resources or trial and error" },
            ]} 
            variant="numbered"
          />
          <Paragraph>
            To address these challenges, the Element Menu now features a comprehensive Help Card that displays essential information about each element, including descriptive content, visual examples, and integrated support options such as Knowledge Base article links, instructional videos, and sentiment feedback buttons.
          </Paragraph>
        </Subsection>
        
        <Subsection title="Fixed Headers">
          <Paragraph>
            Elements have been separated into two distinct categories, Basic and Grouped, helping customers quickly distinguish between simple building blocks and more complex components. This logical organization improves navigation while reducing cognitive load. Headers remain fixed during scrolling, ensuring category context remains visible at all times.
          </Paragraph>
        </Subsection>

        <Subsection title="Slash Commands">
          <Paragraph>
            Slash commands (/) enable customers to create text styles and add elements directly to the canvas while typing, streamlining the workflow for faster message creation and design. This efficient feature, common in modern editors, eliminates the need to interrupt typing to navigate menus.
          </Paragraph>
          <Paragraph>
            To educate customers on this functionality, a dedicated Help Tooltip was added to the element menu header providing quick access to slash command usage instructions. An accompanying animated gif shows the commands in action, visually illustrating how this efficiency tool transforms the message creation process.
          </Paragraph>
        </Subsection>
        
        <Subsection title="KB Articles">
          <Paragraph>
            Educational articles currently reside on help.aweber.com, requiring customers to leave the editor and disrupt their workflow to find information. The updated Element Menu integrates direct KB article links within each tooltip, allowing customers to access detailed how-to content without switching contexts.
          </Paragraph>
          <Paragraph>
            This integration reduces search time and keeps customers focused on their primary task of creating effective messages, ultimately improving the time it takes customers to create, schedule, and send broadcasts to their audience.
          </Paragraph>
        </Subsection>
        
        <Subsection title="Help Videos">
          <Paragraph>
            Help videos complement KB articles by providing visual demonstrations of element functionality, offering customers a more dynamic learning experience. While KB articles deliver detailed written explanations, videos show practical applications in action, making complex concepts easier to understand through step-by-step visual walkthroughs.
          </Paragraph>
          <Paragraph>
            This multi-format approach accommodates different learning preferences, ensuring customers can quickly grasp how to effectively use elements regardless of their preferred learning style.
          </Paragraph>
        </Subsection>
        
        <Subsection title="Sentiment Collection">
          <Paragraph>
            A sentiment collection component utilizing the FullStory API has been integrated into help tooltips, enabling direct feedback on educational content effectiveness. This mechanism captures customer reactions to specific guidance materials, providing granular insights into which help content resonates with users and which needs improvement.
          </Paragraph>
          <Paragraph>
            The collected data creates a continuous feedback loop that guides refinement of educational materials, ensuring the guidance evolves based on actual customer needs and preferences, ultimately delivering an increasingly effective learning experience.
          </Paragraph>
        </Subsection>
      </Section>

      <Section title="Outcomes and Impact">
        <List
          openingStatement="The Element Menu Update has delivered significant improvements in both quantitative metrics and qualitative user experience:"
          items={[
            { title: "Accelerated Learning", description: "New users reach proficiency with the editor significantly faster, reducing the time from sign-up to first successful campaign" },
            { title: "Feature Discovery", description: "Existing users are discovering and utilizing advanced features they were previously unaware of" },
            { title: "Confidence Building", description: "Users report higher confidence in their ability to create effective content, leading to more ambitious projects" },
            { title: "Reduced Friction", description: "The integrated guidance has eliminated key points of friction in the content creation workflow" },
            { title: "Support Efficiency", description: "Support staff can focus on more complex issues as basic editor questions have decreased" },
          ]} 
        />
      
        <Paragraph>
          The educational framework has fundamentally changed how users interact with the editor, transforming it from a potentially intimidating tool into an approachable, guided experience that builds user confidence and capability.
        </Paragraph>
      </Section>

      <Section title="Reflections and Future Paths">
        <List
          openingStatement="The Element Menu Update project has reinforced several key principles about effective user education:"
          items={[
            { title: "Context is crucial", description: "Education is most effective when delivered at the moment of need, directly within the workflow" },
            { title: "Progressive disclosure", description: "Information should be layered, with basic guidance immediately available and deeper content accessible on demand" },
            { title: "Show, don't just tell", description: "Interactive demonstrations and examples are more effective than text descriptions alone" },
            { title: "Personalization matters", description: "Users have different needs and learning styles; effective guidance adapts to these differences" },
            { title: "Continuous improvement", description: "User education is never \"complete\" – it requires ongoing refinement based on user feedback and behavior" },
          ]} 
          variant="bullet"
        />
        
        <Paragraph className="text-lg font-medium mt-6">
          The Element Menu Update represents a significant milestone in user education and sets a foundation 
          for platform-wide contextual learning. Through continued refinement of educational patterns, 
          enhanced video integration, and data-driven improvements, the platform can further empower 
          customers to create effective, engaging content with confidence. This update serves as a blueprint 
          for building more intuitive, educational experiences across the entire platform.
        </Paragraph>
      </Section>
    </CaseStudyLayout>
  )
} 