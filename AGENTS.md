# AGENTS.md - Portfolio Project Guidelines

## Overview & Architecture
This project is a high-performance single-page portfolio website for Natanael Metio Panjaitan (S.Sos.). It is built using Vue 3 (Composition API with `<script setup lang="ts">`), Vite, TypeScript, and Tailwind CSS, deployed to GitHub Pages via GitHub Actions.

## STRICT NO EM/EN DASH RULE (HARD CONSTRAINT)
CRITICAL: Absolutely DO NOT use em dash (\u2014) or en dash (\u2013) characters anywhere in this repository!
This restriction applies to:
- Content text in Vue templates
- Titles, subtitles, descriptions, and metric labels
- Data files and TypeScript contracts
- Code comments and commit messages
- Documentation files including AGENTS.md and README.md

Replacements: Use commas, colons, parentheses, or fluid sentence structures instead of dashes.

## Visual Design & Aesthetics System (Dark Studio Luxury)
1. Exclusive Dark Mode Theme:
   - Primary Background: `#121212` (Matte Black / Hitam Dove)
   - Card Surface: `#1A1A1A`
2. Accent Palette:
   - Primary Text: Clean White `#F8FAFC`, Soft Gray `#94A3B8`
   - Primary Accent: Sky Blue `#38BDF8` (Sky-400) for focus indicators, active states, and badges.
   - Interaction Accent (Hover): Soft Yellow `#FEF08A` (Yellow-200) for subtle glows or text highlights.
   - Structural Accent: Dove Green `#86EFAC` with 20% to 30% opacity for thin borders (`border-white/10` transitioning to dove green or soft yellow on hover).
3. Typography:
   - Headings & Titles: `'Playfair Display', serif`
   - Body & UI: `'Plus Jakarta Sans', 'Inter', sans-serif`
4. Motion & Tactile Feel:
   - Ample negative space (`py-24`, `px-6`, `max-w-6xl mx-auto`).
   - Smooth transitions (`transition-all duration-700 ease-out`).
   - Bento project cards with subtle scale (`hover:scale-[1.03] hover:-translate-y-1 transition-all duration-500`).

## Directory Structure
- `src/types/portfolio.ts`: TypeScript contracts (`PortfolioItem`, `ProjectCategory`)
- `src/data/portfolioData.ts`: Centralized portfolio content dataset
- `src/components/`: Modular Vue 3 components
  - `Navbar.vue`: Floating dark glassmorphism navigation
  - `HeroSection.vue`: Greeting, headline, subheadline, profile frame with studio lighting fallback
  - `AboutSection.vue`: Qualitative sociological evolution narrative and asymmetrical photo collage
  - `ProjectGallery.vue`: Bento grid with filtering
  - `ProjectModal.vue`: Modal dialog with detailed project sections
  - `FooterSection.vue`: Persuasive summary narrative, primary CTA email, secondary resume download CTA, and philosophical easter egg
- `.github/workflows/deploy.yml`: GitHub Pages CI/CD workflow

## Verification Requirements
- `npm run build` must compile without any TypeScript or Vite errors.
- Relative base paths (`base: './'`) must be maintained in `vite.config.ts`.
- Zero em dash or en dash characters in any file.
