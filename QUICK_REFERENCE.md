# 🚀 Quick Reference - Full Website Ready

## Start Here (3 Commands)

```bash
# 1. Install
npm install

# 2. Run
npm run dev

# 3. Visit
http://localhost:3000
```

---

## 📄 All 8 Pages Ready

| Page | URL | Purpose |
|------|-----|---------|
| Home | `/` | Landing page with highlights |
| Research | `/research` | Projects & lab facilities |
| Teaching | `/teaching` | Courses & mentorship |
| Team | `/team` | Faculty & staff |
| Publications | `/publications` | Papers & research output |
| Outreach | `/outreach` | Community engagement |
| Gallery | `/gallery` | Photo collections |
| Contact | `/contact` | Contact form & info |

---

## 🎨 Font Sizes (Updated)

- **Paragraph**: 1.1rem (Large & readable)
- **H1**: 4rem (64px)
- **H2**: 3rem (48px)
- **H3**: 1.875rem (30px)
- **Strong/Bold**: 700 weight, Navy Blue

---

## 💡 Bold Important Words

### How to Use
```jsx
<p>
  This lab conducts <strong>award-winning research</strong> in smart grids.
</p>
```

### Result
"award-winning research" appears **bold and navy blue**

---

## 📱 Touch Responsive

All buttons and cards have:
- ✅ Hover effects (desktop)
- ✅ Active states (mobile)
- ✅ Touch feedback
- ✅ Clear visual indicators

---

## 📁 Content Files to Edit

### For All Pages (except Research)
**File**: `src/data/pages.ts`

Contains:
- `homeData` - Home page
- `teachingData` - Teaching page
- `teamData` - Team page
- `publicationsData` - Publications page
- `outreachData` - Outreach page
- `galleryData` - Gallery page
- `contactData` - Contact page

### For Research Page
**File**: `src/data/research.ts`

Contains:
- Lab info
- Projects
- Lab facilities

---

## 🎯 Make Important Words Bold

### Option 1: Use `<strong>` tags
```tsx
<p>
  We have <strong>50+ publications</strong> in top journals.
</p>
```

### Option 2: In data files
```typescript
title: 'Our <strong>Award-Winning</strong> Lab'
```

### Styling
- **Color**: Navy Blue (#1F3A93)
- **Weight**: 700 (very bold)
- **Automatic**: Applied to all `<strong>` tags

---

## 🔧 Navigation Setup

**File**: `src/components/Navigation.tsx`

Features:
- ✅ Desktop horizontal menu
- ✅ Mobile hamburger menu
- ✅ Active page highlighting
- ✅ Smooth transitions

---

## 📸 Adding Images

### Step 1: Create Folder
```bash
mkdir public
```

### Step 2: Add Images
Place your images in `public/` folder:
- `public/lab.jpg`
- `public/team.jpg`
- `public/research.jpg`

### Step 3: Use in Components
```jsx
<img src="/lab.jpg" alt="Lab photo" />
```

---

## 🎨 Colors

```
Primary:    #1F3A93 (Navy Blue)
Secondary:  #00A896 (Teal)
Accent:     #D4AF37 (Gold)
Background: #F8F9FA (Light Gray)
White:      #FFFFFF
```

---

## 📧 Contact Form

**Location**: `/contact`

Features:
- ✅ Name field
- ✅ Email field
- ✅ Subject line
- ✅ Message textarea
- ✅ Email integration (mailto)

**No backend needed** - sends via email client

---

## 🚀 Deploy to Vercel

### Step 1: Create GitHub Repo
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

### Step 2: Go to Vercel
- Visit: vercel.com
- Connect GitHub
- Select your repo
- Deploy (automatic!)

### Step 3: Done!
Your site is live!

---

## 📊 Built Files Count

- **8 Pages** (fully functional)
- **6 Components** (reusable)
- **2 Data Files** (centralized content)
- **5 Config files** (Next.js setup)
- **1 Navigation** (global menu)
- **1 Global CSS** (styling)

**Total: 28+ files, all ready**

---

## ✅ Before Going Live

- [ ] All 8 pages work
- [ ] Navigation links work
- [ ] Images added to `public/`
- [ ] Content updated in data files
- [ ] Contact form tested
- [ ] Mobile layout tested
- [ ] Fonts are readable
- [ ] Bold words are visible

---

## 🆘 Quick Fixes

### Problem: Styles not showing
```bash
rm -rf .next
npm run dev
```

### Problem: Port 3000 in use
```bash
npm run dev -- -p 3001
```

### Problem: Module not found
```bash
rm -rf node_modules
npm install
npm run dev
```

---

## 📚 Documentation

- `README.md` - Full documentation
- `SETUP_GUIDE.md` - Setup instructions
- `COMPLETE_WEBSITE_SUMMARY.md` - Detailed overview
- `IMPLEMENTATION_STATUS.md` - Project status
- `DESIGN_OPTIONS.md` - Design specifications

---

## 🎓 Key Features

✅ **8 Complete Pages** with navigation  
✅ **Large Readable Fonts** (1.1rem+)  
✅ **Bold Important Words** in Navy Blue  
✅ **Touch Responsive** with active states  
✅ **Smooth Animations** on scroll  
✅ **Professional Colors** (Blue + Teal)  
✅ **Mobile Menu** with hamburger  
✅ **Contact Form** with email integration  
✅ **Production Ready** code  
✅ **Easy to Customize** data-driven  

---

## 🎉 You're All Set!

1. Run `npm install`
2. Run `npm run dev`
3. Open `http://localhost:3000`
4. Explore all 8 pages
5. Update content
6. Deploy to Vercel

**Your complete research portfolio website is ready!** 🚀

---

## 📞 Need Help?

- **Setup**: See SETUP_GUIDE.md
- **Customization**: See COMPLETE_WEBSITE_SUMMARY.md
- **Design**: See DESIGN_OPTIONS.md
- **Issues**: Check README.md troubleshooting

---

**Status**: ✅ **READY TO RUN & DEPLOY**
