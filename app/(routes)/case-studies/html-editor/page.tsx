import Link from 'next/link'
import { Metadata } from 'next'
import { CaseStudyLayout, Section, Subsection, Table } from '@/components/case-study'
import { List, Paragraph } from '@/components/typography'

export const metadata: Metadata = {
  title: 'Reimagining Raw HTML: Creating Clarity Through Separation',
  description: 'Transforming email editing with a purpose-built HTML development environment'
}

export default function CaseStudy() {
  return (
    <CaseStudyLayout
      title="Creating Clarity Through Separation"
      description="Transforming email editing with a purpose-built HTML development environment"
      imageText="HTML+Editor"
    >
      <Section title="The Challenge">
        <Paragraph>
          The email editing interface created confusion for users by blending visual editing and HTML coding 
          into a single ambiguous experience. This dual-purpose approach frustrated both non-technical users 
          seeking simplicity and developers requiring precise HTML control.
        </Paragraph>
        <List 
          openingStatement="User feedback indicated three critical issues:"
          items={[
            { description: "The Source and WYSIWYG mode duality created incorrect impressions of editor capabilities" },
            { description: "HTML-savvy users reported inefficient workflows with limited development tools" },
            { description: "94% of users accessed the editor via desktop devices, yet the interface wasn't optimized for development workflows" },
          ]} 
          variant="numbered"
        />
        <Paragraph>
          These issues directly impacted message creation time and reduced adoption rates among technical users, with many developers expressing frustration about the lack of clear separation between visual and code-based editing experiences.
        </Paragraph>
      </Section>

      <Section title="Observations and Insight">
        <List 
          openingStatement="Analytics revealed distinct usage patterns dividing the user base into two clear segments:"
          items={[
            { description: "94% desktop usage with primarily Chrome (72%) and Firefox (10%) browsers" },
            { description: "Desktop users frequently switched between code and preview views" },
            { description: "Mobile users primarily interacted with the WYSIWYG interface" },
          ]} 
        />
        <Paragraph>
          Competitive analysis of leading email and web design tools revealed a consistent pattern: 
          successful platforms maintained clear separation between visual and code-based editing experiences,
          treating them as distinct workflows rather than modes within a single interface.
        </Paragraph>
        <Paragraph className="italic border-l-4 border-gray-300 pl-4">
          "I don't need WYSIWYG when I'm working with HTML. I need powerful code tools and a reliable 
          preview that shows me exactly how my code will render."
          <span className="block mt-2 font-bold not-italic">
            — From user interviews
          </span>
        </Paragraph>
        <Paragraph>
          Fullstory data further confirmed that HTML-focused users primarily worked on desktop devices with larger screen resolutions, indicating an opportunity to optimize the experience for development workflows without compromising mobile accessibility.
        </Paragraph>
      </Section>

      <Section title="Solution">
        <Paragraph>
          The solution focused on creating a clear separation between visual and code editing experiences,
          delivering a purpose-built HTML development environment for technically proficient users.
        </Paragraph>

        <Subsection title="1. Developer-First Code Environment">
          <List 
            openingStatement="The dedicated HTML coding interface featured:"
            items={[
              { description: "Syntax highlighting with automatic error detection" },
              { description: "Code assistance including auto tag closing and predictive suggestions" },
              { description: "Code formatting to ensure proper indentation and structure" },
            ]} 
          />
          <Paragraph>
            These enhancements reduced coding errors and accelerated the development process
            while providing clarity about the editor's primary purpose.
          </Paragraph>
        </Subsection>

        <Subsection title="2. Advanced Preview System">
          <List 
            openingStatement="Implemented a live preview pane with responsive testing capabilities:"
            items={[
              { description: "Syntax highlighting with automatic error detection" },
              { description: "Code assistance including auto tag closing and predictive suggestions" },
              { description: "Code formatting to ensure proper indentation and structure" },
            ]} 
          />
          <Paragraph>
            The preview system enabled developers to confidently create responsive email templates
            while maintaining full control over the HTML implementation.
          </Paragraph>
        </Subsection>

        <Subsection title="3. Specialized Format Support">
          <List 
            openingStatement="Extended the editor's capabilities beyond basic HTML:"
            items={[
              { description: "AMP editor with built-in validation and error reporting" },
              { description: "Plaintext editor with automatic generation or manual customization" },
              { description: "Personalization support with variable insertion and preview" },
            ]} 
          />
          <Paragraph>
            These specialized features elevated the editor from a basic HTML tool to a comprehensive
            email development environment supporting modern standards and techniques.
          </Paragraph>
        </Subsection>
      </Section>

      <Section title="Outcomes and Impact">
        <List 
          openingStatement="The redesigned HTML editor delivered measurable improvements:"
          items={[
            { 
              title: "Increased clarity", 
              description: "Clear separation between editing experiences eliminated user confusion" 
            },
            { 
              title: "Enhanced productivity", 
              description: "Developer-focused tools streamlined HTML creation workflows" 
            },
            { 
              title: "Improved quality", 
              description: "Live validation and preview capabilities reduced errors in final output" 
            },
          ]} 
        />
        <Paragraph>
          Most significantly, usage patterns shifted toward appropriate tool selection, with technically proficient users 
          embracing the HTML editor and less technical users gravitating toward the Drag & Drop interface. This natural separation improved satisfaction in both user segments.
        </Paragraph>
      </Section>

      <Section title="Reflections & Future Paths">
        <List 
          openingStatement="The HTML editor redesign established several key principles:"
          items={[
            { 
              title: "Clear purpose", 
              description: "Tools should have a defined focus rather than attempting to serve multiple user types" 
            },
            { 
              title: "Environment alignment", 
              description: "Interface design should match the expected workflow and user expertise" 
            },
            { 
              title: "Responsive adaptation", 
              description: "Features should adjust intelligently across device sizes" 
            },
          ]} 
        />
        <Paragraph>
          Future development opportunities include:
        </Paragraph>
        <List 
          openingStatement="Future development opportunities include:"
          items={[
            { description: "Integration with version control systems for advanced code management" },
            { description: "Expanded template libraries and code snippets for rapid development" },
            { description: "Enhanced collaboration features for team-based email creation" },
            { description: "Automated testing tools for accessibility and email client compatibility" },
          ]} 
        />
        <Paragraph>
          The separation strategy employed in this redesign serves as a model for addressing other areas 
          of the platform where distinct user needs have been artificially combined into compromised interfaces.
          By recognizing the specific needs of different user groups and creating purpose-built experiences for each, 
          the platform can deliver better experiences without forcing users into workflows that don't match their skills or objectives.
        </Paragraph>
      </Section>
    </CaseStudyLayout>
  )
} 