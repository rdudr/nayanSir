# 🚀 Run Python Image Downloader

## ✅ Prerequisites

Make sure you have **Python 3** installed:

```bash
# Check Python version
python --version

# OR
python3 --version
```

**Should show**: Python 3.x.x (version 3.6 or higher)

If not installed, download from: https://www.python.org/downloads/

---

## 📥 How to Run

### **Windows**

Open Command Prompt or PowerShell in your project folder:

```bash
# Navigate to project folder
cd "C:\Users\risha\Desktop\naran Sir portfolio"

# Run the script
python download_images.py
```

### **Mac/Linux**

Open Terminal in your project folder:

```bash
# Navigate to project folder
cd ~/path/to/naran-portfolio

# Run the script
python3 download_images.py
```

---

## 🎯 What the Script Does

✅ Creates `public/` folder automatically  
✅ Downloads all 11 images from original website  
✅ Saves with correct filenames  
✅ Shows download progress  
✅ Displays file sizes  
✅ Verifies all downloads  
✅ Prints next steps  

**Total time**: ~1 minute

---

## 📊 Expected Output

```
============================================================
Naran Research Portfolio - Image Downloader
============================================================

✓ Created 'public' folder

Downloading 11 images...

[1/11] Downloading: Site Logo
    → logo.png
    ✓ Success (45.2 KB)

[2/11] Downloading: PSSG Lab Overview
    → pssg-lab-overview.png
    ✓ Success (205.8 KB)

[3/11] Downloading: Cyber Physical System (CyberDiSS)
    → cyber-physical-system.png
    ✓ Success (98.5 KB)

... (8 more images)

============================================================
Download Summary:
============================================================

  Total Images:     11
  Successful:       11
  Failed:           0

Files in public/ folder:
  ✓ logo.png (45.2 KB)
  ✓ pssg-lab-overview.png (205.8 KB)
  ✓ cyber-physical-system.png (98.5 KB)
  ✓ kisem-project-1.jpg (150.3 KB)
  ✓ kisem-project-2.png (82.1 KB)
  ✓ ecowet-video-thumbnail.png (120.5 KB)
  ✓ igstc-project.jpg (198.7 KB)
  ✓ smart-agent-p2p.jpg (175.2 KB)
  ✓ dst-ukieri.png (145.9 KB)
  ✓ solar-pv-dashboard.jpg (168.4 KB)
  ✓ pssg-lab-facilities.jpg (245.1 KB)

✓ All images downloaded successfully!

============================================================
Next Steps:
============================================================

1. Copy updated research data file:
   cp src/data/research-with-images.ts src/data/research.ts

2. Start development server:
   npm run dev

3. Open in browser:
   http://localhost:3000/research

4. All images should now appear on the research page!

✨ Your website is now complete with all images!

============================================================
```

---

## ✅ After Download

The script will print the exact next steps, but here's a summary:

### Step 1: Update Data File
```bash
cp src/data/research-with-images.ts src/data/research.ts
```

**Or manually:**
- Copy `src/data/research-with-images.ts` 
- Paste into `src/data/research.ts`

### Step 2: Start Server
```bash
npm run dev
```

### Step 3: View Website
Open: `http://localhost:3000/research`

**All images will appear!** 🎉

---

## 🐛 Troubleshooting

### "python: command not found"
**Solution**: Use `python3` instead
```bash
python3 download_images.py
```

### "HTTPError 404: Not Found"
**Possible cause**: Website URL changed
**Solution**: Check EXTRACT_IMAGES_GUIDE.md for updated URLs

### "Connection timeout"
**Possible cause**: Slow internet or website down
**Solution**: Wait and try again

### "Permission denied"
**Windows**: Run as Administrator
**Mac/Linux**: Use `sudo` or make executable
```bash
chmod +x download_images.py
./download_images.py
```

### Script stops midway
**Possible cause**: Internet connection lost
**Solution**: Run again, it will resume from where it left off

---

## 📋 Checklist

- [ ] Python 3 installed (`python --version`)
- [ ] In project folder (`cd` to folder)
- [ ] Run script (`python download_images.py`)
- [ ] All 11 images downloaded
- [ ] No errors in output
- [ ] `public/` folder created with images
- [ ] Copy `research-with-images.ts` to `research.ts`
- [ ] Run `npm run dev`
- [ ] Open browser and verify images appear

---

## 🎯 Result

After running the script and following the next steps:

✅ All 11 images downloaded  
✅ Images organized in `public/` folder  
✅ Data file updated with image paths  
✅ Research page displays images  
✅ Website looks professional  
✅ Ready to deploy!  

---

## ⏱️ Total Time

- Script execution: ~1 minute
- Update data file: ~1 minute
- Start server: ~10 seconds
- Verify in browser: ~1 minute

**Total: ~3-4 minutes** to have a fully image-enhanced website! 🚀

---

## 🎉 Ready?

Run this command:

```bash
python download_images.py
```

**That's it!** The script handles everything. ✨
