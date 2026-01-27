# Contributing to StackStruct

First off, thank you for considering contributing to StackStruct! It's people like you that make StackStruct such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible.
* **Provide specific examples to demonstrate the steps**.
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why**.
* **Include screenshots and animated GIFs** if possible.
* **Include your environment details** (OS, Node version, npm/pnpm version, etc.).

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**.
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Explain why this enhancement would be useful** to most StackStruct users.

### Pull Requests

* Fill in the required template
* Do not include issue numbers in the PR title
* Follow the JavaScript/React styleguides
* Include thoughtfully-worded, well-structured tests
* Document new code
* End all files with a newline

## Development Setup

1. Fork and clone the repository
```bash
git clone https://github.com/your-username/StackStruct.git
cd StackStruct/my-app
```

2. Install dependencies
```bash
pnpm install
```

3. Create a branch for your changes
```bash
git checkout -b feature/your-feature-name
```

4. Make your changes and test them
```bash
pnpm dev
```

5. Run linting
```bash
pnpm lint
```

6. Commit your changes
```bash
git add .
git commit -m "Description of your changes"
```

7. Push to your fork and submit a pull request
```bash
git push origin feature/your-feature-name
```

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* Consider starting the commit message with an applicable emoji:
    * 🎨 `:art:` when improving the format/structure of the code
    * 🐛 `:bug:` when fixing a bug
    * ✨ `:sparkles:` when introducing new features
    * 📝 `:memo:` when writing docs
    * 🚀 `:rocket:` when improving performance
    * ♻️ `:recycle:` when refactoring code
    * ✅ `:white_check_mark:` when adding tests
    * 🔒 `:lock:` when dealing with security

### JavaScript Styleguide

* Use 2 spaces for indentation
* Prefer `const` over `let`. Never use `var`
* Use template literals instead of string concatenation
* Use arrow functions when possible
* Use meaningful variable names
* Add comments for complex logic

### React/JSX Styleguide

* Use functional components with hooks
* One component per file
* Use PascalCase for component names
* Use camelCase for prop names
* Always use PropTypes or TypeScript for type checking
* Keep components small and focused

## Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help us track and manage issues and pull requests.

* `bug` - Issues for bugs in the code
* `enhancement` - Issues for new features or improvements
* `documentation` - Issues related to documentation
* `good first issue` - Good for newcomers
* `help wanted` - Extra attention is needed
* `question` - Further information is requested

## Questions?

Feel free to open an issue with your question or contact the maintainers directly.

Thank you for contributing! 🎉
