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

- Always use TypeScript when creating new files
- Follow the established project structure
- Use existing shadcn/ui components when possible
- Maintain consistency with Tailwind CSS patterns
- Consider accessibility in all implementations
- Test components in development mode before finalizing
