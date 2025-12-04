# Image Download Guide for Local Development

## Why images are broken locally

The `figma:asset/...` imports only work in Figma Make. When you download and run this code in VSCode, you need to replace them with regular image files.

## Step-by-Step Instructions

### 1. Download ALL Images from Figma Make

Right-click on each image displayed in the Figma Make preview and select **"Save Image As..."**

Save them to your desktop with the exact names listed below.

### 2. Create the Images Folder

In your VSCode project root, create this folder structure:
```
/public/images/
```

### 3. Save Images with These EXACT Names

**About Section (2 images):**
- `professional-photo.png` - Paula's professional headshot  
- `personality-photo.png` - Paula's fun personality photo

**Mona Project (23 images):**
- `mona-welcome.png`
- `mona-home.png`
- `mona-ai.png`
- `mona-wireframes.png`
- `mona-lofi.png`
- `mona-budget.png`
- `mona-trips.png`
- `mona-spending.png`
- `mona-challenges.png`
- `mona-settings.png`
- `mona-create-account.png`
- `mona-onboarding-question.png`
- `mona-bank-connection.png`

**Brown Shuttle Project (14 images):**
- `shuttle-stops.png`
- `shuttle-routes.png`
- `shuttle-oncall.png`
- `shuttle-screenshot-2.png`
- `shuttle-screenshot-4.png`
- `shuttle-screenshot-5.png`
- `shuttle-screenshot-7.png`
- `shuttle-hifi-stops.png`
- `shuttle-hifi-stop-details.png`
- `shuttle-hifi-routes.png`
- `shuttle-hifi-oncall.png`
- `shuttle-welcome-stops.png`
- `shuttle-routes-view.png`
- `shuttle-oncall-view.png`

### 4. Verify Your Setup

✅ All images are in `/public/images/`  
✅ Image names match exactly (case-sensitive!)  
✅ No typos or extra characters

### 5. Run Your Project

```bash
npm install
npm run dev
```

## Notes

- The code has already been updated to use `/images/...` paths
- Make sure image names are **exactly** as listed (case-sensitive)
- If an image doesn't load, check the filename spelling