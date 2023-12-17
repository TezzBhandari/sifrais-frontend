# Sifaris System

## Contributing Guidelines

Thank you for considering working in the project! To ensure a smooth collaboration, please follow these guidelines when making contributions.

### Typesafe TypeScript Code

- Write all code in TypeScript.
- "Ensure that your code is typesafe", and leverage TypeScript interfaces and types effectively.
- Write consitent, clean and simple code
- strictly don't use "any" type 😁

### Headless Design Pattern

- Adopt a headless design pattern for better modularity and flexibility.
- Separate logic from ui presentation, making components more versatile and easier to maintain.
- I can't mention all. feel free to explore other pattern as well like hoc, separation of concern etc.

### Reusable Components

- Design components to be reusable across different parts of the application.
- Ensure that components are self-contained and do not have unnecessary dependencies.

### Reusable CSS

- Write modular and reusable CSS to promote a consistent look and feel.

### Good Comments with JSDoc Structure

- Provide clear and concise comments using the JSDoc structure to document your code.
- Explain the purpose of functions, and complex logic.
- Include information on parameters, return values, and any important details that will aid understanding.

#### Example:

```typescript
/**
 * Calculate the sum of two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The sum of the two numbers.
 */
function add(a: number, b: number): number {
  // Implementation details...
}
```

## Git Guidelines

### Separate Branches for New Features

- clone the development branch "sifaris-development"
- (Important point): Create a separate branch for each new feature or bug fix.
- Branch names should be descriptive and follow a consistent naming convention.
- (Important point) Naming Convention: new feature: feature/(feature-name), bug: bugfix/(bug-fix-description), refactoring: refactor/(refactoring-name)

### Pull Requests for Feature Completion

- Make a pull request once the feature is completed.
- Provide a detailed description of the changes made and the purpose of the pull request.
- pull the main branch before making PR so that you won't have merge conflicts
- Make PR (pull request) to the development branch not "main"

### Commit Messages

- Write meaningful commit messages that concisely describe the changes made.
- Follow the conventional commit message format for clarity.

# Thank You all for your Contribution. ❤️❤️❤️❤️❤️❤️❤️
