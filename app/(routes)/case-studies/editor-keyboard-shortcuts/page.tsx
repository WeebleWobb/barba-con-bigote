import Link from 'next/link'
import { Metadata } from 'next'
import { CaseStudyLayout, Section, Subsection, Table  } from '@/components/case-study'
import { List, Paragraph } from '@/components/typography'

export const metadata: Metadata = {
  title: 'Enhancing Content Creation Workflows',
  description: 'Enhancing productivity through intuitive keyboard shortcuts'
}

export default function CaseStudy() {
  return (
    <CaseStudyLayout
      title="Enhancing Content Creation Workflows"
      description="Enhancing productivity through intuitive keyboard shortcuts"
      imageText="Editor+Keyboard+Shortcuts"
    >
      <Section title="The Challenge">
        <Paragraph>Creating content efficiently in a digital editor requires mastery of various tools and shortcuts. 
          Users needed a faster way to create and edit content, but existing shortcuts were not easily discoverable.
        </Paragraph>
        <Paragraph>
          Between Q2 and Q3 2024, data showed users clicking the Markdown Cheatsheet became the highest performing action 
          in the Message Editor. The Landing Page Editor showed similar performance after implementing the{' '}
          <Link href="/case-studies/element-menu-update" className="text-red hover:text-red/80">
            Element Menu Update
          </Link>{' '}
          on October 1, 2024.
        </Paragraph>
          <div>
            <Paragraph className="font-semibold mb-1">Key issues included:</Paragraph>
            <List items={[
              { description: "Low discoverability of existing shortcuts" },
              { description: "Inconsistent shortcut experiences between editors" },
              { description: "Competitors lacked modern editor features and keyboard shortcuts" },
              { description: "Users wanted consistent experiences across different editor types" },
              { description: "Content creators needed better guidance and educational resources" },
            ]} />
          </div>
      </Section>

      <Section title="Observations and Insight">
        <Subsection title="User Behavior Analysis">
          <Paragraph>
            Session recordings revealed that content creators spent significant time navigating between menu options 
            and formatting tools. Many experienced users attempted to use keyboard shortcuts, expecting them to work 
            but finding inconsistent implementation.
          </Paragraph>
        </Subsection>
        
        <Subsection title="Competitive Landscape">
          <Paragraph>Competitive analysis highlighted a significant gap in the email marketing space:</Paragraph>
          <List items={[  
            { 
              title: "Figma", 
              description: "Displays shortcuts at the bottom of viewport with a persistent floating button" 
            },
            { 
              title: "Editor X", 
              description: "Uses a traditional modal accessible via footer menu" 
            },
            { 
              title: "Webflow", 
              description: "Shows shortcuts in a modal overlay, accessible via logo click or shift + ?" 
            },
            { 
              title: "Notion", 
              description: "Opens shortcuts in a new page with videos, markdown guides, and command lists" 
            },
            { 
              title: "GitLab", 
              description: "Uses a traditional modal accessible via Help menu" 
            },
          ]} />
          <Paragraph>
            Notably, major competitors like Mailchimp, GetResponse, Constant Contact, and Kit do not offer 
            keyboard shortcuts, presenting an opportunity for differentiation.
          </Paragraph>
        </Subsection>
        
        <Subsection title="User Expectations">
          <Paragraph>User feedback consistently highlighted three key expectations:</Paragraph>
          <List 
            items={[
              { description: "Faster content creation workflows" },
              { description: "Reduced dependence on mouse navigation" },
              { description: "More discoverable productivity features" },
            ]}
            variant="numbered"
           />
        </Subsection>
      </Section>

      <Section title="Solution">
        <Paragraph>The Editor Keyboard Shortcuts implementation addressed these challenges with three key innovations:</Paragraph>
        
        <Subsection title="New Quality of Life (QOL) Shortcuts">
          <Paragraph>
            The implementation introduced new keyboard commands to speed up content creation workflow and surfaced existing 
            shortcuts for text editing, slash commands, and markdown. These shortcuts were designed to be intuitive 
            and consistent with industry standards.
          </Paragraph>
          <div>
            <Paragraph>Key implemented shortcuts included:</Paragraph>
            <Table 
              columns={[
                { 
                  header: "Action", 
                  key: "action" 
                },
                { 
                  header: "Command", 
                  key: "command" 
                },
                { 
                  header: "Editor", 
                  key: "editor" 
                }
              ]}
              data={[
                { 
                  action: "Bold", 
                  command: "cmd/ctrl + b", 
                  editor: "Both" 
                },
                { 
                  action: "Italic", 
                  command: "cmd/ctrl + i", 
                  editor: "Both" 
                },
                { 
                  action: "Add Link", 
                  command: "cmd/ctrl + k", 
                  editor: "Both" 
                },
                { 
                  action: "Slash Command", 
                  command: "/", 
                  editor: "Both" 
                },
                { 
                  action: "Subject Assistant", 
                  command: "cmd/ctrl + shift + a", 
                  editor: "Message Editor" 
                },
              ]}
            />
          </div>
        </Subsection>
        
        <Subsection title="Improved Shortcuts Discoverability">
          <Paragraph>
            The existing Markdown Shortcut Sidebar was enhanced to include both markdown and keyboard commands. 
          </Paragraph>
          <div>
            <Paragraph>
              This comprehensive Shortcuts Help Center provides:
            </Paragraph>
            <List 
              items={[
                { 
                  title: "Visual demonstrations of shortcut functionality",
                  description: "Visual demonstrations of shortcut functionality" 
                },
                { 
                  title: "Context-sensitive shortcut suggestions",
                  description: "Context-sensitive shortcut suggestions" 
                },
                { 
                  title: "Tooltips with keyboard command indicators",
                  description: "Tooltips with keyboard command indicators" 
                },
              ]}
              variant="numbered"
            />
          </div>
        </Subsection>
        
        <Subsection title="Cross-Platform Consistency">
          <Paragraph>
            Consistent shortcut patterns were implemented across both Message Editor and Landing Page Editor experiences. 
            This unified approach allows users to build muscle memory that transfers between different editing contexts.
          </Paragraph>
          <Paragraph>
            The implementation also aligned with the 2021 Quick Actions Menu initiative, creating a 
            cohesive navigation experience throughout the platform.
          </Paragraph>
        </Subsection>
      </Section>

      <Section title="Outcomes and Impact">
        <Paragraph>The Editor Keyboard Shortcuts feature yielded significant improvements:</Paragraph>
        <List 
          items={[
            { 
              title: "Faster Content Creation", 
              description: "Users create content more quickly, leading to faster scheduling and sending" 
            },
            { 
              title: "Reduced Mouse Dependency", 
              description: "Keyboard-driven workflows reduce the need for constant mouse interaction" 
            },
            { 
              title: "Increased User Trust", 
              description: "Intuitive guidance and education foster greater trust in the platform" },
            { 
              title: "Competitive Differentiation", 
              description: "The content experience stands out with modern QOL features absent in competing platforms" 
            },
            { 
              title: "Power User Development", 
              description: "The shortcuts create a perception of a comprehensive editor and enable efficient workflows" 
            },
            { title: "Consistent Experience", 
              description: "Alignment with the 2021 Quick Actions Menu initiative provides consistent navigation across the platform" 
            }
          ]} 
        />
      </Section>

      <Section title="Reflections & Future Paths">
        <Paragraph>The Editor Keyboard Shortcuts project reinforced several key principles about effective user experience:</Paragraph>
        <List 
          items={[
            { 
              title: "Efficiency drives satisfaction", 
              description: "Users feel more confident and capable when they can work quickly" 
            },
            { title: "Discoverability is essential", 
              description: "Even the most powerful features are worthless if users can't find them" 
            },
            { title: "Consistency builds trust", 
              description: "Users transfer knowledge between contexts when patterns are predictable" 
            },
            { title: "Competitive differentiation matters", 
              description: "Small UX improvements can create significant perceived value" 
            }
          ]}
          variant="numbered"
        />
        <Paragraph>
          The Editor Keyboard Shortcuts feature represents a commitment to improving user productivity and satisfaction. 
          It builds upon the previous Element Menu Update and Markdown Cheatsheet features, forming a comprehensive 
          strategy to enhance the content creation experience for all users.
        </Paragraph>
      </Section>
    </CaseStudyLayout>
  )
} 