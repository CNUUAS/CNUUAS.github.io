# Contributing Guidelines

---

## Getting Started

### Cloning the Repository

If you haven't cloned the repository yet, follow the official guide:
- [How to Clone a Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

### Pulling Latest Changes

**Always pull the latest changes before starting work** to avoid merge conflicts.

```bash
git pull
```

Run this command from the branch you're working on to sync remote changes to your local machine.

---

## Making Changes

### 1. Create a Branch

Create a new branch for each feature or fix you're working on. **Do not work directly on the main branch.**

**Branch Naming Convention:**
```
[first_name][last_initial]/[description_of_change]
```

**Example:**
```
evag/update_contributing_docs
```

**Creating a branch (Option 1 - GitHub Web):**
1. Go to the repository on GitHub
2. Click the **Code** tab
3. Click **Branches** (below the repository title)
4. Click **New Branch** on the right
5. Enter your branch name following the format above

**Creating a branch (Option 2 - Command Line):**
```bash
git checkout -b [your_branch_name]
```

### 2. Stage Your Changes

Add your changes to the staging area:

```bash
git add .
```

This stages all modified and new files. To stage specific files, use `git add [filename]`.

### 3. Commit Your Changes

Commit your staged changes with a descriptive message:

```bash
git commit -m "Brief description of your changes"
```

**Tip:** Commit frequently with clear, concise messages that explain *what* changed and *why*.

### 4. Push Your Changes

Push your commits to the remote repository:

```bash
git push
```

If this is your first push on a new branch, you may need to set the upstream:

```bash
git push -u origin [your_branch_name]
```

---

## Best Practices

- **Pull before you start:** Always run `git pull` before making changes
- **Commit often:** Make small, logical commits rather than large, monolithic ones
- **Write clear commit messages:** Describe what you changed and why
- **One branch per feature:** Create a separate branch for each feature or bug fix
- **Keep branches up to date:** Regularly pull changes from the main branch into your feature branch

---

## What is a Branch?

A branch is an independent line of development in Git. It allows you to work on features, fixes, or experiments without affecting the main codebase. Once your work is complete and tested, your branch can be merged back into the main branch through a pull request.

**Benefits of using branches:**
- Isolate your work from others
- Experiment safely without breaking the main code
- Organize development by feature or task
- Enable parallel development across the team