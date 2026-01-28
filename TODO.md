# TODO List for Resume Website

## 1. Add Resume Download
- [x] Add a download button/link for the PDF resume
- [x] Added to the header section near the social links
- [x] Ensure the PDF (ElijahBatkoski_resume_SAS_Writer.pdf) is accessible
- [x] Style the download button to match the site theme

## 2. Explore Multi-Page Layout
- [ ] Research converting from single-page to multi-page structure
- [ ] Consider separate pages for:
  - Home/About
  - Experience
  - Projects/Portfolio
  - Contact
- [ ] Update navigation to link to separate pages instead of sections
- [ ] Maintain consistent header/footer across pages
- [ ] Consider SEO implications of multi-page vs single-page

**Note on Multi-Page Layout:**
Converting to multi-page would require:
1. Creating separate layout files for each page
2. Splitting content from `_data/sitetext.yml` into individual page files
3. Updating navigation in `_data/navigation.yml` to use URLs instead of anchor links
4. Creating new markdown files for each page (experience.md, projects.md, etc.)
5. Updating the Jekyll configuration and potentially the theme structure

This is a significant architectural change that would affect the entire site structure. Consider if the benefits (better SEO, cleaner URLs, separate page loading) outweigh the current single-page simplicity.

## Future Enhancements
- [ ] Add animations/transitions
- [ ] Optimize images for web performance
- [ ] Add Google Analytics (if desired)
- [ ] Test mobile responsiveness
- [ ] Add meta tags for social media sharing
