---
title: "Modernizing the Editing Experience with a Friendlier Interface"
subtitle: "Enhancing usability and user satisfaction through thoughtful editor redesign"
date: "2024-07-30"
author: "Juan D. Bolaños"
---

# Modernizing the Editing Experience with a Friendlier Interface
## Enhancing usability and user satisfaction through thoughtful editor redesign

## The Challenge

NPS feedback from 2024 consistently highlighted opportunities to improve the editor's user-friendliness. While "user-friendliness" can be subjective, the feedback revealed several key issues:

- **Complex interface** that created a high learning curve for new users
- **Visual clutter** that made it difficult to focus on content creation
- **Static UI elements** that felt outdated compared to industry alternatives
- **Poor responsiveness** on mid-sized viewports (between 640px and 1280px)
- **Inconsistent experience** across different screen sizes and contexts

These issues were directly impacting user satisfaction and productivity, as evidenced by multiple quarters of NPS feedback (Q1-Q3 2024) mentioning the editor interface as an area for improvement.

## Observations and Insights

Analysis of user feedback and behavior revealed three core design principles that would guide the approach:

- **Space**: Creating breathing room between elements to reduce visual noise
- **Contrast**: Improving distinction between canvas and supporting elements
- **Movement**: Adding subtle animations to create a dynamic, responsive feel

These insights led to a "less is more" approach centered on reducing visual complexity while maintaining all necessary functionality. A key observation was that users found the persistent panels and menus to be visually overwhelming, particularly on smaller screens.

User research identified that competitors in the industry were moving toward more dynamic, contextual interfaces that adapted to the user's current task, which informed many of the design decisions.

## Solution

### 1. Redesigned Element Menu and Properties Panel

![Redesigned Element Menu and Properties Panel](friendly-ui-panels.gif)

**Problem Solved**: The static, always-visible panels created visual clutter and reduced the available canvas space.

**Implementation**: Transformed the static panels into floating menus with subtle shadows and softer corners. These menus adapt to any background color and can be collapsed to maximize canvas space.

**User Benefit**: Creates a more customizable and spacious editing environment, allowing users to focus on content while keeping tools accessible when needed.

### 2. Streamlined Element Editing

![Streamlined Element Editing](friendly-ui-edit-button.gif)

**Problem Solved**: Property editing required constant visual attention even when not in use.

**Implementation**: Properties panels are no longer persistently visible. Instead, a new "Edit" button in the element action menu toggles the associated properties panel.

**User Benefit**: Puts the focus back on content creation while keeping editing tools accessible, reducing cognitive load during the design process.

### 3. Improved Navigation with Collapsible Breadcrumbs

**Problem Solved**: Navigation between nested elements was cumbersome and took up valuable screen space.

**Implementation**: Updated the element breadcrumb to be collapsible, serving as both a quick reference and a secondary navigation method.

**User Benefit**: Creates a cleaner interface while maintaining context awareness for complex designs, allowing users to easily navigate between elements without visual distraction.

## Reflections & Future Paths

### Key Learnings

- The principle of "progressive disclosure" proved extremely effective in simplifying the interface without removing functionality
- Micro-interactions and subtle animations significantly improved the perceived responsiveness of the interface
- A flexible, adaptable UI can accommodate diverse user preferences and work environments

### Established Principles

- Design for space and breathing room
- Use animation purposefully to indicate state changes
- Layer UI elements to create visual hierarchy
- Allow user control over interface density

### Future Opportunities

The Friendly UI initiative has established a foundation for future improvements:

- Extending the flexible floating menu pattern to support block layouts
- Further refinements to the contextual preview and testing experience
- Additional customization options for editor theming
- Enhanced accessibility features integrated into the new UI patterns

### Broader Implications

This redesign demonstrates how thoughtful UI improvements can significantly impact user satisfaction and productivity without compromising on functionality. The principles established here can be applied across other parts of the product to create a more consistent and enjoyable user experience.