# Naran M. Pindoriya - Complete Research Portfolio Website

A modern, professional, multi-page research portfolio website for the **Power Systems and Smart Grid Lab @ IIT Gandhinagar**.

## 🌟 Features

- ✅ **8 Complete Pages** (Home, Research, Teaching, Team, Publications, Outreach, Gallery, Contact)
- ✅ **Clean Academic Professional** design aesthetic
- ✅ **Large, readable fonts** for better accessibility
- ✅ **Bold important words** in sentences for emphasis
- ✅ **Touch-responsive** with hover and active states
- ✅ **Smooth animations** using Framer Motion
- ✅ **Fully responsive** on mobile, tablet, and desktop
- ✅ **Professional color scheme**: Navy Blue + Teal + Gold
- ✅ **Fast performance** with Next.js optimization

## 📄 Page Overview

| Page | Purpose | Content |
|------|---------|---------|
| **Home** | Landing page with highlights | Lab overview, quick links to all sections |
| **Research** | Research projects & facilities | Ongoing/completed projects, lab equipment, software |
| **Teaching** | Academic courses & mentorship | Course listings, student opportunities |
| **Team** | Team members & staff | Faculty, PhD students, researchers |
| **Publications** | Research output | Journal papers, conferences, patents |
| **Outreach** | Community engagement | Initiatives, impact, partnerships |
| **Gallery** | Visual content | Photo albums and collections |
| **Contact** | Get in touch | Contact form, lab information, inquiry types |

## 🎨 Design Features

- **Bold Important Text**: Key words automatically bolded for emphasis
- **Large Readable Fonts**: All text sizes increased for accessibility (p: 1.1rem, headings: 1.875rem+)
- **Touch-Friendly**: Active/hover states on all interactive elements
- **Professional Colors**: Navy Blue (#1F3A93), Teal (#00A896), Gold accents
- **Smooth Animations**: Staggered transitions, hover effects, scroll animations
- **Gradient Backgrounds**: Modern gradient headers and sections

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom colors
- **Animations**: Framer Motion 10+
- **Forms**: Native HTML with email integration
- **Deployment**: Vercel (recommended)

## 📦 Installation

### Prerequisites
- Node.js 18+ or higher
- npm or yarn package manager

### Setup Steps

1. **Navigate to project directory**
   ```bash
   cd "C:\Users\risha\Desktop\naran Sir portfolio"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   - Visit `http://localhost:3000`
   - The site will auto-refresh when you make changes

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx                    # Global layout with navigation
│   ├── page.tsx                      # Home page
│   ├── research/
│   │   └── page.tsx                  # Research page
│   ├── teaching/
│   │   └── page.tsx                  # Teaching page
│   ├── team/
│   │   └── page.tsx                  # Team page
│   ├── publications/
│   │   └── page.tsx                  # Publications page
│   ├── outreach/
│   │   └── page.tsx                  # Outreach page
│   ├── gallery/
│   │   └── page.tsx                  # Gallery page
│   └── contact/
│       └── page.tsx                  # Contact page
├── src/
│   ├── components/
│   │   ├── Navigation.tsx            # Main navigation (all pages)
│   │   ├── Hero.tsx                  # Hero component
│   │   ├── ProjectCard.tsx           # Project card
│   │   ├── OngoingProjects.tsx        # Ongoing projects section
│   │   ├── CompletedProjects.tsx      # Completed projects section
│   │   └── LabFacilities.tsx          # Lab facilities section
│   ├── data/
│   │   ├── research.ts               # Research page data
│   │   └── pages.ts                  # All other pages data
│   └── styles/
│       └── globals.css               # Global styles (with large fonts)
├── public/                           # Images folder (create this)
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── .gitignore
```

## 📝 Content Management

All content is centralized in `src/data/research.ts`. Update this file to:
- Change lab title and description
- Add/remove research projects
- Update facilities and software list
- Modify any text content

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
- Primary: `#1F3A93` (Navy Blue)
- Secondary: `#00A896` (Teal)
- Accent: `#D4AF37` (Gold)

### Content
Edit `src/data/research.ts` to update:
- Lab information
- Project details and achievements
- Equipment specifications
- Software features

### Components
Each component in `src/components/` can be customized:
- `Hero.tsx` - Welcome section
- `ProjectCard.tsx` - Individual project display
- `OngoingProjects.tsx` - Current research section
- `CompletedProjects.tsx` - Finished projects section
- `LabFacilities.tsx` - Equipment and software listing

## 📸 Adding Images

1. **Create public folder** (if not exists)
   ```bash
   mkdir public
   ```

2. **Add images** to `public/` folder
   - Store research project images
   - Store facility/equipment photos

3. **Reference in components**
   ```tsx
   <img src="/image-name.jpg" alt="Description" />
   ```

## 🚀 Building & Deployment

### Local Build
```bash
npm run build
npm start
```

### Deploy to Vercel
1. Push code to GitHub repository
2. Connect GitHub to Vercel
3. Vercel auto-deploys on push

Or use Vercel CLI:
```bash
npm install -g vercel
vercel
```

## 📱 Responsive Design

The site is fully responsive:
- **Mobile**: Single column layout, optimized for touch
- **Tablet**: Two-column layout with proper spacing
- **Desktop**: Full three-column grid layout

## ⚡ Performance Tips

- Images are lazy-loaded
- CSS is automatically minified
- JavaScript is optimized and bundled
- Server-side rendering for fast initial load

## 🔍 SEO

Metadata is configured in `app/layout.tsx`:
- Title: "Research - Naran M. Pindoriya"
- Description and keywords
- Open Graph tags can be added

## 🐛 Troubleshooting

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### Port already in use
```bash
# Use different port
npm run dev -- -p 3001
```

### TypeScript errors
- Check `tsconfig.json` is correct
- Run `npm run build` to see all errors
- Verify all imports use correct paths

## 📚 Components Documentation

### Hero
Main banner with animated background and focus areas
- Takes: title, subtitle, description, focusAreas
- Features: Animated background, smooth transitions

### ProjectCard
Expandable project card with achievements and details
- Takes: title, period, funding, description, achievements, award
- Features: Expand/collapse, award badges, staggered animations

### OngoingProjects
Grid of current research projects
- Takes: array of projects
- Features: Automatic animation staggering

### CompletedProjects
Expandable list of finished projects with full details
- Takes: array of projects
- Features: Expandable cards, partner logos, objectives

### LabFacilities
Hardware and software equipment display
- Takes: description, hardware array, software array
- Features: Tabbed layout, feature lists, specifications

## 📞 Support

For issues or questions:
1. Check the component files for documentation
2. Review Framer Motion docs: https://www.framer.com/motion/
3. Review Tailwind CSS docs: https://tailwindcss.com/docs
4. Review Next.js docs: https://nextjs.org/docs

## 📄 License

All content is the property of Naran M. Pindoriya and IIT Gandhinagar.

## 🎯 Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Start dev server: `npm run dev`
3. ⬜ Add research images to `public/` folder
4. ⬜ Update content in `src/data/research.ts`
5. ⬜ Customize colors in `tailwind.config.js`
6. ⬜ Deploy to Vercel
