# Personal Resume Website

A professional resume website built with Jekyll and hosted on GitHub Pages.

## Quick Start

1. **Update Your Information**
   - Edit `_config.yml` to set your name, email, and site details
   - Update `_data/sitetext.yml` with your personal information

2. **Customize Sections**

### Header
Edit the header section in `_data/sitetext.yml`:
```yaml
header:
  title: Hi, I'm [Your Name]
  text: Your tagline here
  button: View My Work
  buttonlink: "#portfolio"
```

### Skills
Update the skills section with your technical abilities:
```yaml
services:
  title: "Skills"
  list:
    - title: "Your Skill"
      desc: "Description of your expertise"
      icon: fas fa-code
```

### Projects
Edit files in `_portfolio/` folder. Each project is a separate markdown file:
- `project1.md` - Already updated as an example
- `project2.md` through `project6.md` - Update with your projects

### Experience
Update the timeline section in `_data/sitetext.yml` with your work history and education.

### About Me
Edit the about section in `_data/sitetext.yml` to tell your story.

### Social Links
Update footer and team sections with your actual social media profiles:
- GitHub
- LinkedIn
- Twitter
- etc.

## Deployment

### GitHub Pages Setup

1. **Repository Name**
   - For `username.github.io` format: Name your repo exactly `YOUR-USERNAME.github.io`
   - For `username.github.io/repo-name` format: Set `baseurl: "/repo-name"` in `_config.yml`

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: main (or master)
   - Folder: / (root)

3. **Custom Domain (Optional)**
   - Add a `CNAME` file with your domain
   - Configure DNS settings with your domain provider

## Local Development

```bash
# Install dependencies
bundle install

# Run local server
bundle exec jekyll serve

# View at http://localhost:4000
```

## File Structure

```
├── _config.yml           # Site configuration
├── _data/
│   └── sitetext.yml     # All content (edit this!)
├── _portfolio/          # Project files
│   ├── project1.md
│   └── ...
├── assets/img/          # Images
│   ├── portfolio/
│   ├── timeline/
│   └── team/
└── index.md             # Homepage
```

## Tips

- Replace placeholder images in `assets/img/` with your own
- Use [Font Awesome](https://fontawesome.com/icons) for icons
- Markdown is supported in all description fields
- Test locally before pushing to GitHub

## Credits

Built with [Agency Jekyll Theme](https://github.com/raviriley/agency-jekyll-theme) by Ravi Riley
