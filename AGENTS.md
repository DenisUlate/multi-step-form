# AGENTS.md - Development Instructions

This document provides essential information for AI agents and developers working on the multi-step form React project.

## Project Overview

**Project Name:** multi-step-form  
**Type:** React TypeScript Application with Vite  
**Purpose:** Multi-step form implementation using modern React patterns

## Technology Stack

### Core Framework

- **React 19.1.1** - Latest React with concurrent features
- **TypeScript 5.8.3** - Type-safe JavaScript
- **Vite 7.1.2** - Fast build tool and dev server

### UI & Styling

- **Tailwind CSS 4.1.13** - Utility-first CSS framework
- **shadcn/ui** - Reusable component library (New York style)
- **Radix UI** - Headless UI primitives for accessibility
- **Lucide React** - Icon library
- **Class Variance Authority (CVA)** - Component variant management

### Development Tools

- **ESLint** - Code linting with TypeScript support
- **PNPM** - Package manager (preferred over npm/yarn)

## Project Structure

```
multi-step-form/
├── src/
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   ├── index.css            # Global styles with Tailwind
│   ├── components/
│   │   └── ui/              # shadcn/ui components
│   │       └── button.tsx   # Reusable button component
│   ├── lib/
│   │   └── utils.ts         # Utility functions (cn, etc.)
│   └── assets/              # Static assets
├── public/                  # Static public files
├── components.json          # shadcn/ui configuration
└── vite.config.ts          # Vite configuration
```

## Development Guidelines

### 1. Component Development

- Use TypeScript for all components with proper type definitions
- Follow shadcn/ui patterns for reusable components
- Place UI components in `src/components/ui/`
- Use CVA for component variants when needed
- Implement proper accessibility with Radix UI primitives

### 2. Styling Conventions

- Use Tailwind CSS utility classes
- Follow the shadcn/ui design system (New York style)
- Utilize CSS variables for theming
- Use `cn()` utility from `lib/utils.ts` for conditional classes

### 3. Code Organization

- Keep components focused and single-responsibility
- Use TypeScript interfaces for prop definitions
- Implement proper error boundaries
- Follow React 19 patterns (no need for React.FC)

### 4. File Naming

- Use PascalCase for component files: `ComponentName.tsx`
- Use camelCase for utility files: `utilityName.ts`
- Use kebab-case for configuration files: `vite.config.ts`

## Available Scripts

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm lint     # Run ESLint
pnpm preview  # Preview production build
```

## Path Aliases

Configured aliases for imports:

- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/utils` → `src/lib/utils`
- `@/ui` → `src/components/ui`
- `@/hooks` → `src/hooks`

## Adding New Components

### shadcn/ui Components

```bash
npx shadcn@latest add [component-name]
```

### Custom Components

1. Create in appropriate directory (`src/components/`)
2. Use TypeScript interfaces for props
3. Follow naming conventions
4. Export properly for easy imports

## Multi-Step Form Requirements

When developing the multi-step form:

1. **State Management**: Consider React's built-in state or context for form data
2. **Validation**: Implement proper form validation for each step
3. **Navigation**: Provide clear step indicators and navigation controls
4. **Accessibility**: Ensure keyboard navigation and screen reader support
5. **Responsive Design**: Use Tailwind's responsive utilities
6. **Progress Indication**: Show current step and overall progress

## Best Practices

1. **TypeScript**: Always type your components and props
2. **Performance**: Use React.memo() for expensive components
3. **Accessibility**: Follow WCAG guidelines
4. **Testing**: Write tests for complex logic
5. **Git**: Use conventional commit messages
6. **Dependencies**: Keep dependencies updated and minimal

## Common Patterns

### Component Template

```tsx
interface ComponentNameProps {
	// Define props here
}

const ComponentName = ({ prop1, prop2 }: ComponentNameProps) => {
	return <div className="your-tailwind-classes">{/* Component content */}</div>;
};

export default ComponentName;
```

### Using shadcn/ui Button

```tsx
import { Button } from "@/components/ui/button";

// Usage
<Button variant="default" size="lg">
	Click me
</Button>;
```

## Environment Setup

1. **Node.js**: Ensure Node.js 18+ is installed
2. **Package Manager**: Use PNPM (preferred)
3. **Editor**: VS Code with TypeScript and Tailwind extensions
4. **Git**: Initialized repository with main branch

## Notes for AI Agents

### General Development Guidelines

- Always use TypeScript when creating new files
- Follow the established project structure
- Use existing shadcn/ui components when possible
- Maintain consistency with Tailwind CSS patterns
- Consider accessibility in all implementations
- Test components in development mode before finalizing

### Teaching Mode Instructions

When acting as a teacher for building the multi-step form project:

#### Teaching Approach

- **Act as a Teacher**: Provide educational guidance and explanations
- **Step-by-Step Process**: Break down the implementation into manageable steps
- **One Step at a Time**: Focus on completing one feature before moving to the next
- **UI First, Logic Second**: Start with structure and styling, then add functionality
- **Educational Explanations**: After each step, explain how the implemented code works
- **Hands-Off Approach**: Provide guidance but let the developer build the code themselves
- **Error Checking**: Always check for errors before proceeding to the next step

#### Multi-Step Form Development Process

**Phase 1: UI Structure & Layout**

1. **Step 1**: Create the main form container and layout structure
   - Explain: Container setup, responsive design principles, and layout composition
2. **Step 2**: Design and implement step indicators/progress bar
   - Explain: Visual feedback systems, state representation, and user navigation cues
3. **Step 3**: Create form step components (empty shells)
   - Explain: Component composition, props interface design, and reusability patterns
4. **Step 4**: Implement navigation buttons (Previous/Next/Submit)
   - Explain: Button states, conditional rendering, and user interaction patterns

**Phase 2: Form Structure & Validation** 5. **Step 5**: Add form fields to each step with proper types

- Explain: Form input types, controlled components, and TypeScript interfaces

6. **Step 6**: Implement form validation for each step
   - Explain: Validation strategies, error handling, and user feedback mechanisms
7. **Step 7**: Create form state management structure
   - Explain: State management patterns, data flow, and React state principles

**Phase 3: Logic & Functionality** 8. **Step 8**: Implement step navigation logic

- Explain: State transitions, conditional logic, and user flow control

9. **Step 9**: Add form data persistence between steps
   - Explain: Data management, state preservation, and form data handling
10. **Step 10**: Implement form submission and completion
    - Explain: Data processing, submission handling, and success states

**Phase 4: Enhancement & Polish** 11. **Step 11**: Add loading states and user feedback - Explain: Asynchronous operations, user experience, and feedback systems

12. **Step 12**: Implement accessibility features
    - Explain: ARIA attributes, keyboard navigation, and inclusive design principles

#### Before Each Step

- Review current project state
- Check for any compilation errors or warnings
- Ensure previous step is working correctly
- Confirm understanding of the current implementation

#### After Each Step

- **Code Explanation**: Detailed explanation of what was implemented
- **How It Works**: Break down the functionality and logic
- **Why This Approach**: Explain design decisions and best practices
- **Error Check**: Verify no errors exist before proceeding
- **Next Step Preview**: Brief overview of what comes next

#### Error Checking Protocol

- Run `pnpm lint` to check for linting errors
- Verify TypeScript compilation passes
- Test the current functionality in development mode
- Address any console warnings or errors
- Confirm responsive design works on different screen sizes

#### Communication Style

- Use clear, educational language
- Provide context for each decision
- Explain both the "what" and "why"
- Encourage questions and clarifications
- Wait for confirmation before proceeding to next step
- Offer alternative approaches when relevant
