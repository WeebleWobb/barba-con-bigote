---
title: "Streamlining Content Creation with Familiar Shortcuts"
subtitle: "Improving efficiency and discoverability with intuitive editor keyboard shortcuts"
date: "2024-05-18"
author: "Juan D. Bolaños"
---

# Streamlining Content Creation with Familiar Shortcuts
## Improving efficiency and discoverability with intuitive editor keyboard shortcuts

## The Challenge

Creating content efficiently in a digital editor requires mastery of various tools and shortcuts. Users needed a faster way to create and edit content, but existing shortcuts were not easily discoverable.

Between Q2 and Q3 2024, data showed users clicking the Markdown Cheatsheet became the highest performing action in the Message Editor. The Landing Page Editor showed similar performance after implementing the [Element Menu Update](/case-studies/element-menu-update) on October 1, 2024.

Key issues included:
- Low discoverability of existing shortcuts
- Inconsistent shortcut experiences between editors
- Competitors lacked modern editor features and keyboard shortcuts
- Users wanted consistent experiences across different editor types
- Content creators needed better guidance and educational resources

## Observations and Insight

### User Behavior Analysis
Session recordings revealed that content creators spent significant time navigating between menu options and formatting tools. Many experienced users attempted to use keyboard shortcuts, expecting them to work but finding inconsistent implementation.

### Competitive Landscape
Competitive analysis highlighted a significant gap in the email marketing space:

- **Figma**: Displays shortcuts at the bottom of viewport with a persistent floating button
- **Editor X**: Uses a traditional modal accessible via footer menu
- **Webflow**: Shows shortcuts in a modal overlay, accessible via logo click or shift + ?
- **Framer**: Implements a traditional modal accessed through Help menu
- **Notion**: Opens shortcuts in a new page with videos, markdown guides, and command lists
- **GitLab**: Uses a traditional modal accessible via Help menu

Notably, major competitors like Mailchimp, GetResponse, Constant Contact, and Kit do not offer keyboard shortcuts, presenting an opportunity for differentiation.

## Solution

The Editor Keyboard Shortcuts implementation addressed these challenges with three key innovations:

### New Quality of Life (QOL) Shortcuts
The implementation introduced new keyboard commands to speed up content creation workflow and surfaced existing shortcuts for text editing, slash commands, and markdown. These shortcuts were designed to be intuitive and consistent with industry standards.

Key implemented shortcuts included:

| Action | Command | Editor |
|--------|---------|--------|
| Copy | cmd/ctrl + c | Both |
| Cut | cmd/ctrl + x | Both |
| Paste | cmd/ctrl + v | Both |
| Bold | cmd/ctrl + b | Both |
| Italic | cmd/ctrl + i | Both |
| Underline | cmd/ctrl + u | Both |
| Strike through | cmd/ctrl + shift + x | Both |
| Add Link | cmd/ctrl + k | Both |
| Slash Command | / | Both |
| Subject Assistant | cmd/ctrl + shift + a | Message Editor |
| Write with AI | cmd/ctrl + l | Message Editor |
| Undo | cmd/ctrl + z | Both |
| Redo | cmd/ctrl + shift + z | Both |
| Message Settings | cmd/ctrl + option/alt + m | Message Editor |
| Theme Settings | cmd/ctrl + option/alt + t | Message Editor |
| Page Settings | cmd/ctrl + option/alt + m | Landing Page Editor |
| Preview | cmd/ctrl + shift/alt + p | Both |
| Toggle Editor Help Center | cmd/ctrl + / | Both |
| Save | cmd/ctrl + s | Both |
| Save & Exit | cmd/ctrl + shift + s | Both |
| Open Autosaves | cmd/ctrl + option + s | Message Editor |
| Open Plain text modal | cmd/ctrl + option + p | Message Editor |

### Improved Shortcuts Discoverability
The existing Markdown Shortcut Sidebar was enhanced to include both markdown and keyboard commands. This comprehensive Shortcuts Help Center provides:

- Visual demonstrations of shortcut functionality
- Context-sensitive shortcut suggestions
- Tooltips with keyboard command indicators
- Universal access via cmd/ctrl + / from anywhere in the editor

### Cross-Platform Consistency
Consistent shortcut patterns were implemented across both Message Editor and Landing Page Editor experiences. This unified approach allows users to build muscle memory that transfers between different editing contexts.

The implementation also aligned with the 2021 Quick Actions Menu initiative, creating a cohesive navigation experience throughout the platform.

## Outcomes and Impact

The Editor Keyboard Shortcuts feature yielded significant improvements:

- **Faster Content Creation**: Users create content more quickly, leading to faster scheduling and sending
- **Reduced Mouse Dependency**: Keyboard-driven workflows reduce the need for constant mouse interaction
- **Increased User Trust**: Intuitive guidance and education foster greater trust in the platform
- **Competitive Differentiation**: The content experience stands out with modern QOL features absent in competing platforms
- **Power User Development**: The shortcuts create a perception of a comprehensive editor and enable efficient workflows
- **Consistent Experience**: Alignment with the 2021 Quick Actions Menu initiative provides consistent navigation across the platform

## Reflections & Future Paths

The Editor Keyboard Shortcuts project reinforced several key principles about effective user experience:

- **Efficiency drives satisfaction**: Users feel more confident and capable when they can work quickly
- **Discoverability is essential**: Even the most powerful features are worthless if users can't find them
- **Consistency builds trust**: Users transfer knowledge between contexts when patterns are predictable
- **Competitive differentiation matters**: Small UX improvements can create significant perceived value

The Editor Keyboard Shortcuts feature represents a commitment to improving user productivity and satisfaction. It builds upon the previous Element Menu Update and Markdown Cheatsheet features, forming a comprehensive strategy to enhance the content creation experience for all users. 