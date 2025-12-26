export interface ExperienceDescription {
  heading: string;
  summary: string;
  responsibilities: string[];
}

export interface ExperienceEntry {
  id: string;
  company: string;
  companyIcon?: string;
  jobTitle: string;
  startDate: string;
  endDate: string | null;
  duration: string;
  location: string;
  employmentType?: string;
  description: ExperienceDescription;
  skills?: string[];
  order: number;
}

export const experienceEntries: ExperienceEntry[] = [
  {
    id: 'aweber-sr-ui-designer',
    company: 'AWeber',
    jobTitle: 'Sr. UI Designer',
    startDate: 'Nov 2022',
    endDate: null,
    duration: '3 yrs',
    location: 'Chalfont, Pennsylvania, United States',
    employmentType: 'Full-time',
    description: {
      heading: 'Leading design innovation for email marketing platform serving 100,000+ businesses',
      summary: 'Strategic design leader responsible for AWeber\'s content creation product suite, including Message Editor, Landing Page Editor, and Campaign Builder. Led mobile design initiatives and emerging AI product development while mentoring junior designers and co-leading the company\'s design system. Balanced independent end-to-end design ownership with hands-on implementation and development.',
      responsibilities: [
        'Led complete redesign of Campaign Builder to Workflow Builder, reducing workflow creation time by approximately 25% and transforming complex automation tool into streamlined user experience for 100,000+ customers',
        'Served as lead designer for AI-powered Sign Up Form Builder, pioneering company\'s AI-driven product experience from concept through implementation',
        'Spearheaded mobile optimization strategy for content creation tools, establishing responsive design patterns adopted across product suite',
        'Expanded design system by creating 25+ reusable components with comprehensive documentation, ensuring consistency across entire platform',
        'Provided design guidance and mentorship to team of 4 designers, conducting weekly design reviews and establishing critique processes',
        'Independently owned design process from conception to implementation for three major product lines, collaborating directly with engineering on feature development',
        'Leveraged AI prototyping tools (Make, Lovable, Claude Code) to accelerate initial concept development and user testing workflows',
        'Contributed to front-end implementation of features using React and Tailwind CSS, ensuring design vision translated accurately to production'
      ]
    },
    skills: ['Figma', 'Make', 'Lovable', 'v0', 'Claude', 'Claude Code', 'Cursor', 'VS Code', 'Design Systems', 'React', 'Tailwind CSS', 'Accessibility', 'HTML/CSS', 'JavaScript', 'Jira', 'Confluence'],
    order: 100
  },
  {
    id: 'aweber-ui-designer',
    company: 'AWeber',
    jobTitle: 'UI Designer',
    startDate: 'Sep 2019',
    endDate: 'Nov 2022',
    duration: '3 yrs 3 mos',
    location: 'Chalfont, Pennsylvania',
    employmentType: 'Full-time',
    description: {
      heading: 'Modernizing content creation tools through accessibility-first design',
      summary: 'Designed user interfaces and interactions for AWeber\'s content creation tools, focusing on email and landing page editors. Facilitated user research initiatives and delivered accessible, production-ready features while collaborating with cross-functional teams in an agile environment. Contributed to product development through both design leadership and hands-on implementation.',
      responsibilities: [
        'Redesigned Message Editor and Landing Page Editor, increasing mobile editing sessions by 22% and modernizing core product experiences used by thousands of customers daily',
        'Facilitated user interviews and usability testing sessions, creating functional prototypes to validate design concepts before development',
        'Implemented WCAG 2.1 AA accessibility standards across content creation tools, improving usability for keyboard-only users and ensuring inclusive design for all users',
        'Delivered multiple feature releases for content creation products, working closely with engineering to resolve technical constraints',
        'Led design and concept reviews with stakeholders, presenting design rationale and iterating based on feedback',
        'Assisted in product bug fixes and front-end development, bridging design and engineering to accelerate feature delivery',
        'Developed high-fidelity interactive prototypes for user testing, enabling rapid iteration and validation of design solutions'
      ]
    },
    skills: ['Adobe XD', 'Figma', 'React', 'Tailwind CSS', 'HTML/CSS', 'JavaScript', 'Accessibility', 'Prototyping'],
    order: 90
  },
  {
    id: 'morgan-lewis-ux-designer',
    company: 'Morgan, Lewis & Bockius LLP',
    jobTitle: 'UX Designer',
    startDate: 'Dec 2018',
    endDate: 'Sep 2019',
    duration: '10 mos',
    location: 'Greater Philadelphia Area',
    description: {
      heading: 'Designing specialized legal tools for global law firm with 2,000+ attorneys',
      summary: 'Led UX design direction for internal products and legal tools serving global law firm with 2,000+ attorneys across multiple offices. Conducted user research with legal professionals, collaborated with developers in agile sprints, and delivered design solutions that improved productivity for specialized legal workflows. Contributed motion design and video editing skills to enhance product communications.',
      responsibilities: [
        'Designed tools that streamlined legal workflows, reducing document processing time by approximately 20% and simplifying case management processes',
        'Established design direction for suite of internal legal tools used across global departments, serving attorneys in complex case management and research workflows',
        'Conducted comprehensive UX research and user testing with legal professionals, synthesizing insights to inform design decisions for specialized tools',
        'Led team design reviews and critiques, establishing design standards and fostering collaboration across multidisciplinary team',
        'Collaborated with developers in agile sprint environment, translating legal requirements into intuitive interfaces for technical and non-technical users',
        'Developed interactive prototypes for user feedback and iterative refinement, ensuring designs met unique needs of legal profession',
        'Created motion graphics and video content to support product training and feature communications'
      ]
    },
    skills: ['Sketch', 'InVision', 'Axure', 'User Research', 'Usability Testing', 'Prototyping', 'Video Editing', 'Motion Graphics', 'Adobe After Effects'],
    order: 80
  },
  {
    id: 'synchrony-interactive-designer',
    company: 'Synchrony Group',
    jobTitle: 'Interactive Designer',
    startDate: 'Aug 2016',
    endDate: 'Aug 2018',
    duration: '2 yrs 1 mo',
    location: 'West Chester, PA',
    description: {
      heading: 'Leading digital strategy and design for healthcare and pharmaceutical clients',
      summary: 'Led interactive design and development for medical, pharmaceutical, and healthcare clients, establishing digital best practices and creative direction company-wide. Independently designed and developed websites and interactive experiences while providing strategic guidance to leadership on digital initiatives. Served as primary creative resource for both client work and internal company redesigns.',
      responsibilities: [
        'Led complete website redesigns for Synchrony Group, Synchrony Medical, and Synchrony Healthcare, establishing cohesive brand presence across three business units',
        'Independently designed and developed interactive experiences for medical, pharmaceutical, and healthcare clients, managing projects from concept through launch',
        'Established interactive best practices and digital direction company-wide, elevating quality standards for all digital deliverables',
        'Designed marketing materials that directly impacted lead generation and client conversion for B2B healthcare services',
        'Provided strategic guidance to company leadership on digital initiatives, contributing to business development and client acquisition efforts',
        'Led creative and digital strategic planning sessions, aligning interactive work with broader business objectives',
        'Delivered work in fast-paced agency environment, managing multiple concurrent client projects with varying requirements'
      ]
    },
    skills: ['HTML/CSS', 'JavaScript', 'WordPress', 'UX/UI Design', 'Responsive Design', 'Strategic Planning', 'Adobe Creative Suite'],
    order: 70
  },
  {
    id: 'qvc-contracted-interactive-designer',
    company: 'QVC',
    jobTitle: 'Contracted Interactive Designer',
    startDate: 'May 2016',
    endDate: 'Aug 2016',
    duration: '4 mos',
    location: 'West Chester, PA',
    employmentType: 'Contracted',
    description: {
      heading: 'Delivering high-volume e-commerce creative in fast-paced entertainment environment',
      summary: 'Designed e-commerce and email marketing assets for high-volume retail environment, supporting product conversion campaigns across digital channels. Collaborated with cross-functional teams including e-commerce, marketing, and on-air entertainment in fast-paced, deadline-driven atmosphere.',
      responsibilities: [
        'Designed email campaigns and e-commerce digital assets optimized for product conversion in high-volume retail environment',
        'Delivered creative assets in fast-paced entertainment environment, often producing work on tight deadlines to align with on-air programming',
        'Collaborated with leadership to establish creative vision for e-commerce initiatives, ensuring brand consistency across digital touchpoints',
        'Worked across multiple disciplines including interactive design, email marketing, and on-air entertainment integration'
      ]
    },
    skills: ['Adobe Creative Suite', 'Email Design', 'E-commerce Design', 'Responsive Design', 'HTML/CSS'],
    order: 60
  },
  {
    id: 'smartacre-senior-designer',
    company: 'SmartAcre',
    jobTitle: 'Senior Designer',
    startDate: 'Jul 2015',
    endDate: 'May 2016',
    duration: '11 mos',
    location: 'Bethlehem, PA',
    description: {
      heading: 'Leading interactive creative direction for B2B agency clients',
      summary: 'Held creative responsibility for interactive design direction, managing both client work and internal company branding initiatives. Led design efforts for digital and print projects while fostering team collaboration through structured critique and feedback processes.',
      responsibilities: [
        'Directed interactive creative strategy for agency, establishing design standards and quality benchmarks for client deliverables',
        'Led comprehensive company branding and website redesign for SmartAcre, modernizing digital presence and improving lead generation',
        'Designed interactive experiences for diverse B2B client base, delivering solutions across manufacturing and professional services industries',
        'Managed both digital and print design projects, ensuring cohesive brand experiences across all customer touchpoints',
        'Established design quality standards and critique processes for agency client deliverables',
        'Collaborated with development and marketing teams to deliver integrated campaigns that met client business objectives'
      ]
    },
    skills: ['Adobe Creative Suite', 'UX/UI Design', 'HTML/CSS', 'WordPress', 'Print Design', 'Brand Development', 'Client Management', 'Team Leadership'],
    order: 50
  },
  {
    id: 'smartacre-interactive-designer',
    company: 'SmartAcre',
    jobTitle: 'Interactive Designer',
    startDate: 'May 2014',
    endDate: 'Jul 2015',
    duration: '1 yr 3 mos',
    location: 'Bethlehem, PA',
    description: {
      heading: 'Executing integrated marketing campaigns for B2B manufacturing clients',
      summary: 'Collaborated with inbound marketing and development teams to execute multi-channel marketing campaigns for B2B clients. Contributed to website redesigns and created digital assets supporting lead generation and client engagement initiatives.',
      responsibilities: [
        'Partnered with marketing team to design and execute integrated campaigns including landing pages, banner ads, email templates, and social media assets',
        'Collaborated with development team on client website redesigns, creating designs that balanced aesthetics with technical feasibility',
        'Contributed to comprehensive branding packages for B2B clients, ensuring consistency across digital and traditional marketing materials',
        'Designed conversion-focused marketing assets that supported client lead generation and engagement goals'
      ]
    },
    skills: ['Adobe Creative Suite', 'HTML/CSS', 'Email Design', 'Landing Page Design', 'Social Media Design', 'WordPress'],
    order: 40
  },
  {
    id: 'webpagefx-freelance-designer',
    company: 'WebpageFX',
    jobTitle: 'Freelance Digital Designer',
    startDate: 'Jun 2013',
    endDate: 'Aug 2014',
    duration: '1 yr 3 mos',
    location: 'Carlisle, PA',
    employmentType: 'Freelance',
    description: {
      heading: 'Crafting data-driven infographic experiences as freelance specialist',
      summary: 'Provided creative design expertise for infographic projects, collaborating with project management to deliver data visualization solutions for diverse client base.',
      responsibilities: [
        'Led design direction for infographic projects, creating both interactive and static data visualizations',
        'Partnered with project management to develop strategic approach for information design and storytelling',
        'Delivered data-driven design solutions that simplified complex information for client audiences'
      ]
    },
    skills: ['Adobe Illustrator', 'Data Visualization', 'Infographic Design', 'Adobe Creative Suite'],
    order: 30
  },
  {
    id: 'allied-global-design-intern',
    company: 'Allied Global Marketing',
    jobTitle: 'Design Intern',
    startDate: 'Jan 2014',
    endDate: 'Apr 2014',
    duration: '4 mos',
    location: 'New York City Metropolitan Area',
    description: {
      heading: 'Supporting Broadway marketing campaigns',
      summary: 'Supported interactive marketing team in creating digital campaigns for Broadway theatrical productions. Collaborated with copywriters on social media content and assisted in conceptual design development.',
      responsibilities: [
        'Provided creative support for interactive marketing campaigns targeting Broadway audiences',
        'Collaborated with copywriters to execute social media campaigns for theatrical productions',
        'Assisted design team in conceptual and strategic design development for entertainment marketing'
      ]
    },
    skills: ['Adobe Creative Suite', 'Social Media Design', 'Interactive Design'],
    order: 20
  },
  {
    id: 'neo-pangea-interactive-intern',
    company: 'Neo-Pangea',
    jobTitle: 'Interactive Intern',
    startDate: 'Dec 2012',
    endDate: 'May 2013',
    duration: '6 mos',
    location: 'West Reading, PA',
    description: {
      heading: 'Designing for Viacom and National Geographic brands',
      summary: 'Contributed design work for high-profile clients including Viacom and National Geographic. Created social media campaigns, digital assets, and production design for interactive experiences.',
      responsibilities: [
        'Designed social media campaigns for Viacom intellectual properties',
        'Created digital assets for National Geographic interactive projects',
        'Contributed production design work for interactive campaigns and online gaming experiences'
      ]
    },
    skills: ['Adobe Creative Suite', 'Social Media Design', 'Interactive Design', 'Production Design'],
    order: 15
  },
  {
    id: 'kutztown-web-technician',
    company: 'Kutztown University',
    jobTitle: 'Web Technician and Designer',
    startDate: 'Aug 2012',
    endDate: 'Dec 2012',
    duration: '5 mos',
    location: 'Kutztown, PA',
    description: {
      heading: 'Managing university web presence',
      summary: 'Assisted senior web technician with university website management and digital marketing initiatives. Maintained daily content updates and designed interactive experiences for campus departments.',
      responsibilities: [
        'Assisted Senior Web Technician with university marketing campaigns and digital initiatives',
        'Designed interactive experiences for university departments and programs',
        'Maintained daily and weekly CMS content updates for Kutztown University website'
      ]
    },
    skills: ['CMS Management', 'Web Design', 'Adobe Creative Suite', 'HTML/CSS'],
    order: 10
  }
];
