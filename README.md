# CNU UAS Website

Official website for the Christopher Newport University Unmanned Aircraft Systems (UAS) club.

View the website here: https://cnuuas.github.io/

## 📁 Project Structure

```
CNUUAS.GITHUB.IO/
├── index.html              # Home page with 360° viewer
├── drone.html              # Drone information page
├── team.html               # Team members page
├── fullTeam.html           # Full team page
├── sponsers.html           # Sponsors page
├── css/
│   ├── fullTeamDefault.css
│   ├── styles.css          # All CSS styles (mobile-responsive)
│   ├── teamDefault.css
│   └── alumniDefault.css
├── js/
│   ├── fullTeam.js  
|   ├── teamMembers.js      # Holds member information
│   ├── main.js             # Loads navbar/footer components
│   ├── team.js             
│   ├── viewer.js           # 360° viewer initialization (optional)
│   └── alumni.js
├── components/
│   ├── navbar.html         # Shared navigation bar
│   └── footer.html         # Shared footer
└── assets/
    ├── homepage/
    │   ├── carousel_images/
    │   │    │ ... (carousel images)
    │   ├── navbar.html
    │   └── view360.jpg         # 360° panoramic image
    ├── team + fullTeam images/
    │   ├── left_arrow.png
    │   ├── right_arrow.png
    │   └── Members Photos
    │       │ ... (Member Photos)
``` └ (other images)

## Getting Started

### Prerequisites
- GitHub account (for GitHub Pages hosting)
- Text editor (VS Code recommended)
- Basic knowledge of HTML/CSS/JavaScript

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/cnu-uas-website.git
   cd cnu-uas-website
   ```

2. **Open with Live Server** (recommended)
   - Install "Live Server" extension in VS Code
   - Right-click `index.html` → "Open with Live Server"
   - OR just open `index.html` in your browser

3. **Make changes**
   - Edit files as needed
   - Changes appear automatically with Live Server

## Making Changes

### To Update Styles (Colors, Fonts, Spacing)
**File:** `css/styles.css`

```css
/* Change colors in CSS variables at the top */
:root {
    --navbar-height: 56px;
    --section-padding: 40px;
}
```

- All pages use this one CSS file
- Changes apply to all pages automatically
- Test on mobile (F12 → Toggle device toolbar)

### To add new Team Members to Team Pages
 - Edit the list found in the file `js\teamMembers.js`
 - Follow the formula of the other Team Members
 - The Team Members will be exported and created dynamically

 ### To add new Alumni to alumni Page
 - Same as above, but for alumni variable


### To Update Navigation Menu
**File:** `components/navbar.html`

```html
<!-- Add a new menu item -->
<li class="nav-item">
    <a href="newpage.html" class="nav-link">NEW PAGE</a>
</li>
```

- Edit once, updates on all pages
- Remember to create the corresponding HTML page

### To Update Footer
**File:** `components/footer.html`

```html
<p class="mb-0">&copy; 2025 CNU UAS. All rights reserved.</p>
```

- Change copyright year, add social links, etc.

### To Add a New Page

1. **Create new HTML file** (e.g., `newpage.html`)
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1">
       <title>New Page - CNU UAS</title>
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
       <link rel="stylesheet" href="css/styles.css">
   </head>
   <body>
       <div id="navbar-placeholder"></div>
       
       <main>
           <!-- Your content here -->
       </main>
       
       <div id="footer-placeholder"></div>
       
       <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
       <script src="js/main.js"></script>
   </body>
   </html>
   ```

2. **Add link to navbar** in `components/navbar.html`

3. **Test locally** before pushing to GitHub

### To Update 360° Viewer Image
**File:** `js/viewer.js` (or inline script in `index.html`)

```javascript
image: "assets/your-new-image.jpg",  // Change this path
```

**Requirements for 360° images:**
- Must be equirectangular projection
- Recommended ratio: 2:1 (e.g., 4096×2048 pixels)
- Supported formats: JPG, PNG

## Mobile Responsive

The site is fully responsive with breakpoints:
- **Mobile:** < 768px (stacked layout, simplified navigation)
- **Tablet:** 768px - 991px
- **Desktop:** ≥ 992px

Test mobile view: Press F12 → Click device toolbar icon

## Team Workflow

### Git Workflow

1. **Pull latest changes** before starting work
   ```bash
   git pull origin main
   ```

2. **Create a branch** for your changes
   ```bash
   git checkout -b your-name/feature-description
   ```

3. **Make changes** and test locally

4. **Commit and push**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin your-name/feature-description
   ```

5. **Create Pull Request** on GitHub
   - Have teammate review
   - Merge to main

### Division of Responsibilities

| Person | Responsibilities |
|--------|-----------------|
| Eva G. | `components/navbar.html`, `components/footer.html`, `css/styles.css`, `index.html` content (home page) |
| Jeremy J. | `drone.html` content |
| Jacob B. | `team.html`, `fullteam.html` content, `css/fullTeamDefault.css`, `css/fullTeamMobile.css`|
| Ka'Veon R.| `sponsers.html` content

## Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling (mobile-first responsive design)
- **Bootstrap 5.3.3** - UI framework
- **JavaScript (ES6+)** - Interactivity
- **egjs View360** - 360° panoramic viewer
- **GitHub Pages** - Hosting

## Common Issues

### Navbar/Footer Not Showing
- **Problem:** Missing `<script src="js/main.js"></script>`
- **Solution:** Add script tag before `</body>`

### CSS Not Loading
- **Problem:** File named `style.css` instead of `styles.css`
- **Solution:** Check spelling in both filename and `<link>` tag

### 360° Viewer Not Working
- **Problem:** Image path incorrect or image not equirectangular
- **Solution:** Check console (F12) for errors, verify image path

## Debugging

1. **Open browser console** (F12 → Console tab)
2. **Check for errors** (red text)
3. **Check Network tab** to see if files are loading (404 errors)
4. **Test in incognito mode** to rule out caching issues

## Resources

- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/)
- [egjs View360 Documentation](https://naver.github.io/egjs-view360/)
- [GitHub Pages Guide](https://docs.github.com/en/pages)
- [Markdown Guide](https://www.markdownguide.org/)

## Notes

- Always test changes locally before pushing
- Keep commits small and descriptive
- Comment your code when adding complex functionality
- Use meaningful variable and file names
- File and folder names are case-sensitive on Linux/GitHub Pages

© 2025 CNU UAS. All rights reserved.

---

**Questions?** Open an issue or contact the team lead.
