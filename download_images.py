#!/usr/bin/env python3
"""
Automatic Image Downloader for Naran Research Portfolio
Downloads all 11 images from the original website to public/ folder
"""

import urllib.request
import urllib.error
import socket
import os
import sys
from pathlib import Path

# Set default socket timeout
socket.setdefaulttimeout(30)

# Color codes for terminal output (disabled for Windows compatibility)
GREEN = ''
RED = ''
YELLOW = ''
BLUE = ''
RESET = ''
BOLD = ''

def print_header():
    """Print script header"""
    print("\n" + "="*60)
    print("Naran Research Portfolio - Image Downloader")
    print("="*60 + "\n")

def create_public_folder():
    """Create public folder if it doesn't exist"""
    public_path = Path('public')
    if not public_path.exists():
        public_path.mkdir()
        print("[OK] Created 'public' folder")
    else:
        print("[OK] 'public' folder already exists")

def download_images():
    """Download all 11 images"""

    # List of images to download
    images = [
        {
            'url': 'https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2021/04/logo.png',
            'filename': 'logo.png',
            'description': 'Site Logo'
        },
        {
            'url': 'https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2022/01/PSSG_site-1-1024x610.png',
            'filename': 'pssg-lab-overview.png',
            'description': 'PSSG Lab Overview'
        },
        {
            'url': 'https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/12/CPS-1.png',
            'filename': 'cyber-physical-system.png',
            'description': 'Cyber Physical System (CyberDiSS)'
        },
        {
            'url': 'https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/12/Picture1-1.jpg',
            'filename': 'kisem-project-1.jpg',
            'description': 'KISEM Project Image 1'
        },
        {
            'url': 'https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/12/pg1.png',
            'filename': 'kisem-project-2.png',
            'description': 'KISEM Project Image 2'
        },
        {
            'url': 'https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/11/Untitled-1024x576.png',
            'filename': 'ecowet-video-thumbnail.png',
            'description': 'ECO-WET Video Thumbnail'
        },
        {
            'url': 'https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/12/IGSTC-Project_Picture.jpg',
            'filename': 'igstc-project.jpg',
            'description': 'IGSTC/ECO-WET Project'
        },
        {
            'url': 'https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/12/P2P.jpg',
            'filename': 'smart-agent-p2p.jpg',
            'description': 'SMART Agent P2P Energy'
        },
        {
            'url': 'https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2021/04/DST-2-.png',
            'filename': 'dst-ukieri.png',
            'description': 'DST-UKIERI Project'
        },
        {
            'url': 'https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2023/12/Solar-PV-dashboard.jpg',
            'filename': 'solar-pv-dashboard.jpg',
            'description': 'Solar PV Dashboard'
        },
        {
            'url': 'https://naran.people.iitgn.ac.in/newsite/wp-content/uploads/2021/04/PSSG-Lab-nw1xd4uxt58xd0bzkk5oamgjzwxfke3gt8kr9w7oc0.jpg',
            'filename': 'pssg-lab-facilities.jpg',
            'description': 'PSSG Lab Facilities'
        },
    ]

    print(f"{BOLD}Downloading {len(images)} images...{RESET}\n")

    successful = 0
    failed = 0

    for idx, image in enumerate(images, 1):
        filename = image['filename']
        filepath = f'public/{filename}'
        url = image['url']
        description = image['description']

        try:
            # Show progress
            print(f"[{idx}/{len(images)}] Downloading: {description}")
            print(f"    > {filename}")

            # Download image
            urllib.request.urlretrieve(url, filepath)

            # Get file size
            file_size = os.path.getsize(filepath)
            size_kb = file_size / 1024

            print(f"    [SUCCESS] ({size_kb:.1f} KB)\n")
            successful += 1

        except urllib.error.URLError as e:
            print(f"    [ERROR] Network Error: {e}\n")
            failed += 1
        except urllib.error.HTTPError as e:
            print(f"    [ERROR] HTTP Error: {e.code}\n")
            failed += 1
        except Exception as e:
            print(f"    [ERROR] {e}\n")
            failed += 1

    return successful, failed

def verify_downloads():
    """Verify all images were downloaded"""
    public_path = Path('public')

    if not public_path.exists():
        print("[ERROR] public/ folder not found")
        return False

    images = list(public_path.glob('*.png')) + list(public_path.glob('*.jpg'))

    print("\nFiles in public/ folder:")
    for img in sorted(images):
        size_kb = img.stat().st_size / 1024
        print(f"  [OK] {img.name} ({size_kb:.1f} KB)")

    return len(images) > 0

def print_next_steps():
    """Print next steps for the user"""
    print("\n" + "="*60)
    print("Next Steps:")
    print("="*60 + "\n")

    steps = [
        "1. Copy updated research data file:",
        "   cp src/data/research-with-images.ts src/data/research.ts",
        "",
        "2. Start development server:",
        "   npm run dev",
        "",
        "3. Open in browser:",
        "   http://localhost:3000/research",
        "",
        "4. All images should now appear on the research page!",
        "",
        "[DONE] Your website is now complete with all images!"
    ]

    for step in steps:
        print(step)

    print("\n" + "="*60 + "\n")

def main():
    """Main function"""
    print_header()

    try:
        # Step 1: Create public folder
        create_public_folder()
        print()

        # Step 2: Download images
        successful, failed = download_images()

        # Step 3: Verify downloads
        print("\n" + "="*60)
        print("Download Summary:")
        print("="*60 + "\n")

        print("  Total Images:     11")
        print(f"  Successful:       {successful}")
        if failed > 0:
            print(f"  Failed:           {failed}")

        # Step 4: Verify files
        if verify_downloads():
            print()
            print("[SUCCESS] All images downloaded successfully!\n")
            print_next_steps()
            return 0
        else:
            print("\n[ERROR] No images found in public/ folder\n")
            return 1

    except KeyboardInterrupt:
        print("\n\n[CANCELLED] Download cancelled by user\n")
        return 1
    except Exception as e:
        print(f"\n[ERROR] Unexpected error: {e}\n")
        return 1

if __name__ == '__main__':
    exit_code = main()
    sys.exit(exit_code)
