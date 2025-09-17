
# Task 1: Teacher Interface

## Description
Build a Teacher interface in TypeScript with specific constraints and flexible attribute assignment.

## Requirements

### Setup
1. Create a directory `task_1`
2. Copy configuration files:
    - `package.json`
    - `tsconfig.json` 
    - `webpack.config.js`

### Teacher Interface Specifications
- `firstName` (string): Read-only after initialization
- `lastName` (string): Read-only after initialization  
- `fullTimeEmployee` (boolean): Required attribute
- `yearsOfExperience` (number): Optional attribute
- `location` (string): Required attribute
- Support for additional dynamic attributes (e.g., `contract`)

### Example Usage
```typescript
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);
```

### Expected Output
```
Object
contract: false
firstName: "John"
fullTimeEmployee: false
lastName: "Doe"
location: "London"
```

## Files
- `task_1/js/main.ts`
- `task_1/webpack.config.js`
- `task_1/tsconfig.json`
- `task_1/package.json`

## Repository
- **GitHub repository**: alx-frontend-javascript
- **Directory**: 0x04-TypeScript
