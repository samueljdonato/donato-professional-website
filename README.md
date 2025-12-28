# Donato Consulting Website

This repository shows the development and structures of my professional website built with Next.js 14, TypeScript, and MDX. The idea with this site is to show my overall professional profile and portfolio. The code is all custom for my own personal information but the site should be relatively modular. You can clone the repo and change the information to be pertinent to you if you want to utilize the site.

This project was an exploration into this tech stack. I am no expert but interested in learning. Feel free to offer insight or edits on the quality of this repo.

## Features
- MDX-powered writing system with syntax highlighting
- Responsive design with Tailwind CSS
- Type-safe development with TypeScript

## Tech Stack
- Next.js 14
- TypeScript
- Tailwind CSS
- MDX for content
- GitHub API integration

## Local Development
```bash
npm install
cp .env.example .env.local
# Add your GitHub token to .env.local
npm run dev
```

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.


## Project Structure

## Repository Contents

## Project Structure
```
donato-consulting/
├── src/
│   ├── app/                    # Next.js 14 App Router pages
│   │   ├── layout.tsx          # Root layout with global styles
│   │   ├── page.tsx            # Homepage with bio, services, and contact
│   │   ├── globals.css         # Global styles and Tailwind imports
│   │   ├── writings/           # Blog/writings section
│   │   │   ├── page.tsx        # Writings listing page
│   │   │   └── [slug]/         # Dynamic writing pages
│   │   │       └── page.tsx    # Individual writing template
│   │   └── projects/           # Project showcase section
│   │       ├── page.tsx        # Projects listing page
│   │       └── [slug]/         # Dynamic project pages
│   │           └── page.tsx    # Individual project template
│   │
│   ├── components/             # Reusable React components
│   │   └── mdx-content.tsx     # MDX rendering component
│   │
│   └── lib/                    # Utility functions and data
│       ├── mdx.ts              # MDX processing for writings
│       ├── mdx-projects.ts     # MDX processing for projects
│       ├── projects.ts         # Project data and utilities
│       ├── github.ts           # GitHub API integration
│       └── utils.ts            # Utility functions (from shadcn/ui)
│
├── content/                    # Markdown/MDX content
│   ├── writings/               # Blog posts and articles
│   │   └── *.mdx              # Individual writing files
│   └── projects/               # Project documentation
│       └── *.mdx              # Detailed project writeups
│
├── public/                     # Static assets
│   └── [images, fonts, etc.]
│
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies and scripts
├── components.json             # shadcn/ui configuration
├── .env.local                  # Environment variables (git ignored)
└── .env.example                # Example environment variables
```

### Key Files

- **`src/app/page.tsx`** - Homepage featuring professional bio, consulting services, and contact information
- **`src/lib/projects.ts`** - Defines project data structure and project listing
- **`src/lib/mdx.ts`** - Handles MDX file processing for the writings section
- **`content/`** - All content is written in MDX format, supporting rich markdown with React components

### Adding Content

- **New Writing**: Create an `.mdx` file in `content/writings/`
- **New Project**: Add entry to `projects` array in `src/lib/projects.ts` and optionally create detailed MDX in `content/projects/`








## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
