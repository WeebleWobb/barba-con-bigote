---
title: "Reimagining Raw HTML: Creating Clarity Through Separation"
subtitle: "Transforming email editing with a purpose-built HTML development environment"
date: "2024-05-20"
author: "Juan D. Bolaños"
---

## The Challenge

The email editing interface created confusion for users by blending visual editing and HTML coding into a single ambiguous experience. This dual-purpose approach frustrated both non-technical users seeking simplicity and developers requiring precise HTML control.

User feedback indicated three critical issues:
- The Source and WYSIWYG mode duality created incorrect impressions of editor capabilities
- HTML-savvy users reported inefficient workflows with limited development tools
- 94% of users accessed the editor via desktop devices, yet the interface wasn't optimized for development workflows

These issues directly impacted message creation time and reduced adoption rates among technical users, with many developers expressing frustration about the lack of clear separation between visual and code-based editing experiences.

## Observations and Insight

Analytics revealed distinct usage patterns dividing the user base into two clear segments:
- **94% desktop usage** with primarily Chrome (72%) and Firefox (10%) browsers
- Desktop users frequently switched between code and preview views
- Mobile users primarily interacted with the WYSIWYG interface

Competitive analysis of leading email and web design tools revealed a consistent pattern: successful platforms maintained clear separation between visual and code-based editing experiences, treating them as distinct workflows rather than modes within a single interface.

> "I don't need WYSIWYG when I'm working with HTML. I need powerful code tools and a reliable preview that shows me exactly how my code will render."
> — From user interviews

Fullstory data further confirmed that HTML-focused users primarily worked on desktop devices with larger screen resolutions, indicating an opportunity to optimize the experience for development workflows without compromising mobile accessibility.

## Solution

The solution focused on creating a clear separation between visual and code editing experiences, delivering a purpose-built HTML development environment for technically proficient users.

An education plan guided customers to the appropriate editor through notice bars announcing the HTML editor updates, KB articles explaining which editor best suited different purposes, and timeline communications about upcoming improvements. This directed users wanting visual experiences to the drag and drop editor while focusing the HTML editor on technical users who needed full control.

### 1. Developer-First Code Environment

Replaced the dual-mode editor with a dedicated HTML coding interface featuring:
- **Syntax highlighting** with automatic error detection
- **Code assistance** including auto tag closing and predictive suggestions
- **Code formatting** to ensure proper indentation and structure

These enhancements reduced coding errors and accelerated the development process while providing clarity about the editor's primary purpose.

### 2. Advanced Preview System

Implemented a live preview pane with responsive testing capabilities:
- **Split view layout** with resizable panes to optimize for different workflows
- **Device-specific previews** for testing across multiple screen sizes
- **Real-time updates** to immediately visualize code changes

The preview system enabled developers to confidently create responsive email templates while maintaining full control over the HTML implementation.

### 3. Specialized Format Support

Extended the editor's capabilities beyond basic HTML:
- **AMP editor** with built-in validation and error reporting
- **Plaintext editor** with automatic generation or manual customization
- **Personalization support** with variable insertion and preview

These specialized features elevated the editor from a basic HTML tool to a comprehensive email development environment supporting modern standards and techniques.

## Outcomes and Impact

The redesigned HTML editor delivered measurable improvements:
- **Increased clarity:** Clear separation between editing experiences eliminated user confusion
- **Enhanced productivity:** Developer-focused tools streamlined HTML creation workflows
- **Improved quality:** Live validation and preview capabilities reduced errors in final output
- **Better responsiveness:** Dedicated device testing ensured consistent email rendering

Most significantly, usage patterns shifted toward appropriate tool selection, with technically proficient users embracing the HTML editor and less technical users gravitating toward the Drag & Drop interface. This natural separation improved satisfaction in both user segments.

## Reflections & Future Paths

The HTML editor redesign established several key principles:
- **Clear purpose:** Tools should have a defined focus rather than attempting to serve multiple user types
- **Environment alignment:** Interface design should match the expected workflow and user expertise
- **Responsive adaptation:** Features should adjust intelligently across device sizes

The separation strategy employed in this redesign serves as a model for addressing other areas of the platform where distinct user needs have been artificially combined into compromised interfaces. By recognizing the specific needs of different user groups and creating purpose-built experiences for each, the platform can deliver better experiences without forcing users into workflows that don't match their skills or objectives. 