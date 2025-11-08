# Contributing Guidelines

### Branch Strategy

**Always create a new branch for significant changes.** This keeps the main branch stable and allows for proper code review.

#### When to Create a Branch
- Adding new features or pages
- Making substantial UI/layout changes
- Refactoring existing code
- Fixing bugs that require multiple file changes

#### How to Create and Use Branches

1. **Create a new branch from main:**
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/your-feature-name
   ```

2. **Use descriptive branch names:**
   - `feature/contact-form` - for new features
   - `fix/navbar-responsive` - for bug fixes
   - `refactor/css-structure` - for refactoring
   - `docs/update-readme` - for documentation

3. **Make your changes and commit regularly:**
   ```bash
   git add .
   git commit -m "Add contact form with validation"
   ```

4. **Push your branch to GitHub:**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request:**
   - Go to the repository on GitHub
   - Click "Compare & pull request"
   - Describe your changes clearly
   - Wait for review before merging

6. **Delete your branch after merging:**
   
   Once your pull request is merged, clean up by deleting the branch:
   
   ```bash
   # Switch back to main branch
   git checkout main
   
   # Pull the latest changes (including your merged code)
   git pull origin main
   
   # Delete the local branch
   git branch -d feature/your-feature-name
   
   # Delete the remote branch on GitHub
   git push origin --delete feature/your-feature-name
   ```
   
   **Tip:** GitHub often provides a "Delete branch" button right on the pull request page after merging, which is the easiest way to delete the remote branch!

### Pull Request Guidelines

- Provide a clear description of what your changes do
- Reference any related issues
- Ensure your code works and doesn't break existing functionality
- Be responsive to feedback during code review

### Code Quality

- Write clean, readable code
- Comment complex logic
- Test your changes across different browsers when possible
- Keep commits focused and atomic

## Getting Started

[Add instructions for setting up the project locally]

## Questions?

If you have questions about the contribution process, feel free to open an issue or reach out to the maintainers.

---

Thank you for contributing to this project!