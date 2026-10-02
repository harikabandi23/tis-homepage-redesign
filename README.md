# Tulas International School — Homepage Redesign

A modern, responsive and animated redesign of the Tulas International School homepage, built as a frontend developer assessment project.

## Live Website

https://tis-homepage-redesign-mocha.vercel.app/

## GitHub Repository

https://github.com/harikabandi23/tis-homepage-redesign

## Tech Stack

- React.js
- Vite
- CSS
- Framer Motion
- Lucide React
- Git & GitHub
- Vercel

## Standout Features

- Scroll-triggered reveal animations
- Scroll progress indicator
- Responsive mobile navigation
- Interactive hover micro-interactions
- Smooth scrolling
- Responsive layouts for desktop, tablet and mobile
- Accessible keyboard focus states
- `prefers-reduced-motion` support for selected animations

## Design Approach

The redesign keeps the school's core identity while introducing a more premium and modern visual system:

- Deep navy and warm gold visual palette
- Editorial-style typography
- Spacious layouts
- Rounded content cards
- Clear calls to action
- Subtle motion and interaction feedback

## Component Architecture

```text
src/
├── components/
│   ├── animation/
│   │   ├── Reveal.jsx
│   │   ├── ScrollProgress.jsx
│   │   └── ScrollProgress.css
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   └── sections/
│       ├── HeroSection.jsx
│       ├── AboutSection.jsx
│       ├── AcademicsSection.jsx
│       ├── AdmissionsSection.jsx
│       ├── ContactSection.jsx
│       └── corresponding CSS files
├── App.jsx
├── App.css
├── index.css
└── main.jsx