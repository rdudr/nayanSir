# 📸 How to Add Professor's Photo to Home Page

## Step 1: Prepare Your Photo

1. Get a high-quality photo of Prof. Naran M. Pindoriya
2. Recommended specs:
   - **Format**: JPG or PNG
   - **Size**: 500x600px to 1000x1200px (portrait orientation)
   - **File size**: Under 500KB (for fast loading)
   - **Quality**: High resolution professional photo

## Step 2: Optimize the Photo (Optional)

### Using Online Tools:
- **TinyPNG**: tinypng.com (compress without losing quality)
- **Pixlr**: pixlr.com (resize if needed)
- **ImageCompressor**: imagecompressor.com

### Recommended Dimensions:
- **Width**: 500px minimum
- **Height**: 600-800px (portrait)
- **Aspect Ratio**: 2:3 (portrait orientation)

## Step 3: Add Photo to Project

### Option A: Using File Manager (Easy)
1. Open your project folder: `C:\Users\risha\Desktop\naran Sir portfolio`
2. Create a new folder called `public` (if it doesn't exist)
3. Place your photo in the `public` folder
4. Name it: `professor-naran.jpg` or `professor-naran.png`

### Option B: Using Terminal (Advanced)
```bash
mkdir public
# Copy your photo to the public folder
cp /path/to/your/photo.jpg public/professor-naran.jpg
```

## Step 4: Verify It Works

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open: `http://localhost:3000`

3. Scroll down to the **"Meet Our Lab Director"** section

4. Your photo should appear! 🎉

## Troubleshooting

### Photo not showing?

**Solution 1**: Check file location
- Photo should be in: `public/professor-naran.jpg`
- Not in `public/images/` or any subfolder
- It should be directly in `public/` folder

**Solution 2**: Check file name
- File name must match exactly: `professor-naran.jpg`
- Case-sensitive on Linux/Mac
- Use `.jpg` or `.png` extension

**Solution 3**: Clear browser cache
- Press `Ctrl+Shift+Delete` or `Cmd+Shift+Delete`
- Clear browser cache
- Reload the page

**Solution 4**: Check file format
- Use JPG or PNG only
- Not BMP, GIF, or WEBP
- You can convert formats at: convertio.co

### Photo looks blurry?

**Solution**: Use higher resolution
- Minimum: 500x600px
- Better: 1000x1200px
- Recommended: 1200x1500px

### Photo takes too long to load?

**Solution**: Compress the file
- Use TinyPNG to reduce size
- Keep under 300KB
- Target quality level: 80%

## File Structure

```
your-project/
├── app/
├── src/
├── public/                    ← Put images here
│   └── professor-naran.jpg    ← Your photo (THIS FILE)
├── package.json
└── README.md
```

## How to Change Photo Details

If you want to change the name or URL, edit this file:

**File**: `src/data/pages.ts`

**Find this line**:
```typescript
photo: '/professor-naran.jpg',
```

**Change to your file name**:
```typescript
photo: '/your-photo-name.jpg',
```

## Section Details

The professor overview section on the home page includes:

✅ **Photo** (left side)  
✅ **Name**: Prof. Naran M. Pindoriya  
✅ **Title**: Faculty & Lab Director  
✅ **Biography**: Professional overview  
✅ **Expertise Areas**: 6 key areas (tagged)  
✅ **Achievements**: 6 major accomplishments  
✅ **Contact Info**: Email and phone  

## Customization Tips

### To Edit Professor Info:
**File**: `src/data/pages.ts`

```typescript
professorOverview: {
  name: 'Prof. Naran M. Pindoriya',  // Change name
  title: 'Faculty, Department of Electrical Engineering',  // Change title
  bio: 'Prof. Pindoriya is a faculty...',  // Change biography
  expertise: [...],  // Change expertise areas
  achievements: [...],  // Change achievements
  photo: '/professor-naran.jpg',  // Change photo path
  email: 'naran@iitgn.ac.in',  // Change email
  phone: '+91-XXXX-XXX-XXXX',  // Change phone
}
```

### To Add More Expertise Areas:
```typescript
expertise: [
  'Power Systems & Smart Grids',
  'Renewable Energy Integration',
  'Your New Area Here',  // Add new area
  // ... more areas
],
```

### To Add More Achievements:
```typescript
achievements: [
  'Award-winning researcher with 50+ publications',
  'Your new achievement here',  // Add new achievement
  // ... more achievements
],
```

## Photo Visibility on Different Devices

- **Desktop (>1024px)**: Photo on left, info on right (2-column)
- **Tablet (768px-1024px)**: Photo on left, info on right (2-column)
- **Mobile (<768px)**: Photo on top, info below (1-column)

All responsive automatically!

## Quick Checklist

- [ ] Photo saved as `professor-naran.jpg` or `.png`
- [ ] Photo placed in `public/` folder (root level)
- [ ] Photo dimensions 500x600px minimum
- [ ] Photo file size under 500KB
- [ ] Filename matches exactly in code
- [ ] npm run dev started
- [ ] Browser cache cleared
- [ ] Visited http://localhost:3000
- [ ] Photo appears on home page
- [ ] All details look correct

## Done! ✅

Your professor's photo is now displayed on the home page!

The section includes:
- Professional photo display
- Complete biography
- Expertise areas (clickable badges)
- Key achievements (with stars)
- Contact information

Scroll down on the home page to see it! 📸
