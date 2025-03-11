# Modern Portfolio Website

A modern, interactive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and a beautiful user interface.

## Features

- 🎨 Modern and clean design
- ⚡ Fast performance with Next.js
- 📱 Fully responsive layout
- ✨ Smooth animations with Framer Motion
- 🎯 Interactive components
- 🎨 Tailwind CSS for styling
- 📝 TypeScript for type safety
- 🔍 SEO optimized
- 📱 PWA ready

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- React Intersection Observer
- ESLint
- PostCSS
- Autoprefixer

## Getting Started

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
NEXT_PUBLIC_SITE_URL=your-site-url
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── shared/         # Reusable components
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About section
│   │   ├── Achievements.tsx # Achievements section
│   │   ├── Projects.tsx    # Projects section
│   │   ├── TechStack.tsx   # Tech stack section
│   │   ├── Posters.tsx     # Poster designs section
│   │   └── Footer.tsx      # Footer section
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── public/                 # Static assets
├── .eslintrc.json         # ESLint config
├── .gitignore             # Git ignore rules
├── next.config.js         # Next.js config
├── package.json           # Dependencies
├── postcss.config.js      # PostCSS config
├── tailwind.config.js     # Tailwind config
└── tsconfig.json          # TypeScript config
```

## Customization

1. Update metadata in `app/layout.tsx`:
   - Your name
   - Your website URL
   - Your social media links
   - Your portfolio description

2. Add your profile photo:
   - Place your photo in `/public/your-photo.jpg`

3. Add project images:
   - Place project images in `/public/project1.jpg`, `/public/project2.jpg`, etc.

4. Add poster designs:
   - Place poster images in `/public/poster1.jpg`, `/public/poster2.jpg`, etc.

5. Update content in each component:
   - Hero section: Your name and tagline
   - About section: Your bio
   - Achievements: Your accomplishments
   - Projects: Your project details
   - Tech Stack: Your skills
   - Posters: Your design work

6. Customize colors in `tailwind.config.js` if needed

## Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

Or deploy to Vercel:
```bash
vercel
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 