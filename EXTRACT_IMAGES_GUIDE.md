# 📸 Extract & Organize All Images from Website

## Found Images (11 Total)

All images are from: https://naran.people.iitgn.ac.in/newsite/

---

## 📋 Image List with Locations

| # | Original Name | New Name | URL | Purpose |
|---|---|---|---|---|
| 1 | logo.png | logo.png | https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2021/04/logo.png | Site logo |
| 2 | PSSG_site-1-1024x610.png | pssg-lab-overview.png | https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2022/01/PSSG_site-1-1024x610.png | Lab overview |
| 3 | CPS-1.png | cyber-physical-system.png | https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/12/CPS-1.png | CyberDiSS project |
| 4 | Picture1-1.jpg | kisem-project-1.jpg | https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/12/Picture1-1.jpg | KISEM project |
| 5 | pg1.png | kisem-project-2.png | https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/12/pg1.png | KISEM project |
| 6 | Untitled-1024x576.png | ecowet-video-thumbnail.png | https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/11/Untitled-1024x576.png | ECO-WET video |
| 7 | IGSTC-Project_Picture.jpg | igstc-project.jpg | https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/12/IGSTC-Project_Picture.jpg | ECO-WET project |
| 8 | P2P.jpg | smart-agent-p2p.jpg | https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/12/P2P.jpg | SMART Agent P2P |
| 9 | DST-2-.png | dst-ukieri.png | https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2021/04/DST-2-.png | DST-UKIERI project |
| 10 | Solar-PV-dashboard.jpg | solar-pv-dashboard.jpg | https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/12/Solar-PV-dashboard.jpg | Solar PV monitoring |
| 11 | PSSG-Lab-nw...jpg | pssg-lab-facilities.jpg | https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2021/04/PSSG-Lab-nw1xd4uxt58xd0bzkk5oamgjzwxfke3gt8kr9w7oc0.jpg | Lab facilities |

---

## 🔗 Direct Download Links

### Research Page Images

#### 1. Lab Overview
```
https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2022/01/PSSG_site-1-1024x610.png
Save as: pssg-lab-overview.png
Used for: Research page hero
```

#### 2. Cyber Physical System (CyberDiSS)
```
https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/12/CPS-1.png
Save as: cyber-physical-system.png
Used for: CyberDiSS project section
```

#### 3. KISEM Project Image 1
```
https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/12/Picture1-1.jpg
Save as: kisem-project-1.jpg
Used for: KISEM project section
```

#### 4. KISEM Project Image 2
```
https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/12/pg1.png
Save as: kisem-project-2.png
Used for: KISEM project section
```

#### 5. ECO-WET Video Thumbnail
```
https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/11/Untitled-1024x576.png
Save as: ecowet-video-thumbnail.png
Used for: ECO-WET project video
```

#### 6. IGSTC Project
```
https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/12/IGSTC-Project_Picture.jpg
Save as: igstc-project.jpg
Used for: ECO-WET/IGSTC section
```

#### 7. SMART Agent P2P
```
https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/12/P2P.jpg
Save as: smart-agent-p2p.jpg
Used for: DST Smart Grid project
```

#### 8. DST-UKIERI
```
https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2021/04/DST-2-.png
Save as: dst-ukieri.png
Used for: D-DIEM project section
```

#### 9. Solar PV Dashboard
```
https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/12/Solar-PV-dashboard.jpg
Save as: solar-pv-dashboard.jpg
Used for: DST-SERB project
```

#### 10. PSSG Lab Facilities
```
https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2021/04/PSSG-Lab-nw1xd4uxt58xd0bzkk5oamgjzwxfke3gt8kr9w7oc0.jpg
Save as: pssg-lab-facilities.jpg
Used for: Lab facilities section
```

### Logo

#### 11. Site Logo
```
https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2021/04/logo.png
Save as: logo.png
Used for: Navigation bar
```

---

## 💾 How to Download All Images

### Method 1: Using Python (Automated)

Create a file `download_images.py`:

```python
import urllib.request
import os

# Create public folder if it doesn't exist
os.makedirs('public', exist_ok=True)

# List of images to download
images = [
    ('https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2021/04/logo.png', 'public/logo.png'),
    ('https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2022/01/PSSG_site-1-1024x610.png', 'public/pssg-lab-overview.png'),
    ('https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/12/CPS-1.png', 'public/cyber-physical-system.png'),
    ('https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/12/Picture1-1.jpg', 'public/kisem-project-1.jpg'),
    ('https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/12/pg1.png', 'public/kisem-project-2.png'),
    ('https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/11/Untitled-1024x576.png', 'public/ecowet-video-thumbnail.png'),
    ('https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/12/IGSTC-Project_Picture.jpg', 'public/igstc-project.jpg'),
    ('https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/12/P2P.jpg', 'public/smart-agent-p2p.jpg'),
    ('https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2021/04/DST-2-.png', 'public/dst-ukieri.png'),
    ('https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/12/Solar-PV-dashboard.jpg', 'public/solar-pv-dashboard.jpg'),
    ('https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2021/04/PSSG-Lab-nw1xd4uxt58xd0bzkk5oamgjzwxfke3gt8kr9w7oc0.jpg', 'public/pssg-lab-facilities.jpg'),
]

# Download each image
for url, filename in images:
    try:
        print(f'Downloading {filename}...')
        urllib.request.urlretrieve(url, filename)
        print(f'✓ {filename} downloaded')
    except Exception as e:
        print(f'✗ Error downloading {filename}: {e}')

print('\nAll images downloaded!')
```

**Run it**:
```bash
python download_images.py
```

---

### Method 2: Manual Download (Windows)

1. Create `public` folder in your project
2. Open each link below in browser
3. Right-click → "Save image as"
4. Save to your `public` folder with the new name

**Links**:
- Logo: https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2021/04/logo.png
- PSSG Lab: https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2022/01/PSSG_site-1-1024x610.png
- CPS: https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/12/CPS-1.png
- KISEM 1: https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/12/Picture1-1.jpg
- KISEM 2: https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/12/pg1.png
- ECO-WET: https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/11/Untitled-1024x576.png
- IGSTC: https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/12/IGSTC-Project_Picture.jpg
- P2P: https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/12/P2P.jpg
- DST: https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2021/04/DST-2-.png
- Solar: https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/12/Solar-PV-dashboard.jpg
- Lab: https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2021/04/PSSG-Lab-nw1xd4uxt58xd0bzkk5oamgjzwxfke3gt8kr9w7oc0.jpg

---

### Method 3: Using cURL (Mac/Linux)

```bash
# Create public folder
mkdir -p public

# Download all images
curl -o public/logo.png "https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2021/04/logo.png"
curl -o public/pssg-lab-overview.png "https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2022/01/PSSG_site-1-1024x610.png"
curl -o public/cyber-physical-system.png "https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/12/CPS-1.png"
curl -o public/kisem-project-1.jpg "https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/12/Picture1-1.jpg"
curl -o public/kisem-project-2.png "https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/12/pg1.png"
curl -o public/ecowet-video-thumbnail.png "https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/11/Untitled-1024x576.png"
curl -o public/igstc-project.jpg "https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/12/IGSTC-Project_Picture.jpg"
curl -o public/smart-agent-p2p.jpg "https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/12/P2P.jpg"
curl -o public/dst-ukieri.png "https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2021/04/DST-2-.png"
curl -o public/solar-pv-dashboard.jpg "https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/12/Solar-PV-dashboard.jpg"
curl -o public/pssg-lab-facilities.jpg "https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2021/04/PSSG-Lab-nw1xd4uxt58xd0bzkk5oamgjzwxfke3gt8kr9w7oc0.jpg"

echo "All images downloaded!"
```

---

## 📁 Folder Structure After Download

```
your-project/
├── app/
├── src/
├── public/                      ← Images folder
│   ├── logo.png                 (Logo)
│   ├── pssg-lab-overview.png    (Lab overview)
│   ├── cyber-physical-system.png (CyberDiSS)
│   ├── kisem-project-1.jpg      (KISEM)
│   ├── kisem-project-2.png      (KISEM)
│   ├── ecowet-video-thumbnail.png (ECO-WET video)
│   ├── igstc-project.jpg        (IGSTC)
│   ├── smart-agent-p2p.jpg      (P2P)
│   ├── dst-ukieri.png           (DST)
│   ├── solar-pv-dashboard.jpg   (Solar)
│   ├── pssg-lab-facilities.jpg  (Lab)
│   └── professor-naran.jpg      (Professor - you add this)
├── package.json
└── README.md
```

---

## 📝 Where Images Are Used

### **Home Page** (`/`)
- No research images (profile photo when added)

### **Research Page** (`/research`)
1. **Hero Section**: None
2. **Ongoing Projects**:
   - CyberDiSS → `cyber-physical-system.png`
   - KISEM → `kisem-project-1.jpg` & `kisem-project-2.png`
3. **Completed Projects**:
   - ECO-WET → `igstc-project.jpg` & `ecowet-video-thumbnail.png`
   - SMART Grid → `smart-agent-p2p.jpg`
   - D-DIEM → `dst-ukieri.png`
   - Campus Energy → `solar-pv-dashboard.jpg`
4. **Lab Facilities**:
   - Lab overview → `pssg-lab-facilities.jpg`

### **Teaching Page** (`/teaching`)
- No images in current design

### **Team Page** (`/team`)
- No images in current design

### **Publications Page** (`/publications`)
- No images in current design

### **Outreach Page** (`/outreach`)
- No images in current design

### **Gallery Page** (`/gallery`)
- Could use any/all images in album previews

### **Contact Page** (`/contact`)
- No images in current design

---

## 🔧 Update Image Paths in Code

After downloading, update the data file to use the correct paths:

**File**: `src/data/research.ts`

```typescript
ongoingProjects: [
  {
    id: 1,
    title: 'CyberDiSS...',
    image: 'cyber-physical-system.png',  // ← Add this
    imageAlt: 'Cyber Physical System',
  },
  {
    id: 2,
    title: 'KISEM...',
    image: 'kisem-project-1.jpg',  // ← Add this
  },
],
completedProjects: [
  {
    id: 1,
    title: 'ECO-WET...',
    image: 'igstc-project.jpg',  // ← Add this
  },
  {
    id: 2,
    title: 'SMART Grid...',
    image: 'smart-agent-p2p.jpg',  // ← Add this
  },
  {
    id: 3,
    title: 'D-DIEM...',
    image: 'dst-ukieri.png',  // ← Add this
  },
  {
    id: 4,
    title: 'Campus Energy...',
    image: 'solar-pv-dashboard.jpg',  // ← Add this
  },
],
labFacilities: {
  // ...
  hardwareImages: 'pssg-lab-facilities.jpg',  // ← Add this
}
```

---

## ✅ Quick Checklist

**Download**:
- [ ] Create `public` folder
- [ ] Download all 11 images
- [ ] Save with correct filenames
- [ ] Verify all files in `public/` folder

**Update Code**:
- [ ] Update `src/data/research.ts` with image paths
- [ ] Update components to display images
- [ ] Test on localhost
- [ ] Verify all images display correctly

**Additional**:
- [ ] Add professor photo (`professor-naran.jpg`)
- [ ] Add any additional images for gallery

---

## 🎯 Total Images

- **Downloaded from website**: 11 images
- **Add yourself**: 1 image (professor photo)
- **Total for complete site**: 12 images

---

## 🚀 After Downloading

1. Place all images in `public/` folder
2. Update image paths in data files
3. Run `npm run dev`
4. Verify all images display
5. Deploy!

---

**Ready to download all images!** 📸
