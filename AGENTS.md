# AGENTS.md - Development Instructions

This document provides essential information for AI agents and developers working on the multi-step form React project.

## Project Overview

**Project Name:** multi-step-form  
**Type:** React TypeScript Application with Vite  
**Purpose:** Simple 3-step user registration form with dark mode toggle  
**Time Goal:** Complete implementation in under 2 hours

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

**Project Requirements (2-hour implementation goal):**

### Core Features

1. **3 Steps Only**:

   - Step 1: User Info (name, email, phone)
   - Step 2: Account Details (username, password, confirm password)
   - Step 3: Review (display all entered data)

2. **Single State Object**: Use one unified state object for all form data
3. **Navigation**: "Next" and "Back" buttons for step navigation
4. **Data Persistence**: Save to localStorage on submit, log to console
5. **Auto-load**: Use useEffect to load saved data on component mount
6. **Dark Mode**: Implement using useContext for theme switching

### Technical Implementation

- **State Management**: useState for form data, useContext for theme
- **Validation**: Simple required field validation only
- **Storage**: localStorage for data persistence
- **Styling**: Keep it minimal with Tailwind classes
- **Components**: Maximum 4-5 components total for simplicity
- **Theme Colors**: Use the CSS variables defined in index.css for the shadcn/ui theme toggle (not default Tailwind colors)

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
- **Show Complete Code**: Provide the full code implementation for each step, not just hints
- **Code-First Teaching**: Guide the process by showing the exact code to implement
- **Error Checking**: Always check for errors before proceeding to the next step

#### Multi-Step Form Development Process

**Phase 1: Setup & Structure (30 minutes)**

1. **Step 1**: Create ThemeContext and dark mode toggle

   - Provide: Complete code for ThemeContext.tsx and ThemeToggle.tsx
   - Explain: Context API usage, theme switching, and CSS variable management

2. **Step 2**: Create the main form container with step indicator
   - Provide: Complete code for MultiStepForm.tsx and step indicator UI
   - Explain: Component structure, step tracking state, and basic layout

**Phase 2: Form Steps Implementation (60 minutes)**

3. **Step 3**: Build Step 1 - User Info form (name, email, phone)

   - Provide: Complete code for UserInfoStep.tsx with form fields
   - Explain: Controlled inputs, state management, and form structure

4. **Step 4**: Build Step 2 - Account Details (username, password, confirm password)

   - Provide: Complete code for AccountDetailsStep.tsx with validation
   - Explain: Password fields, validation patterns, and security considerations

5. **Step 5**: Build Step 3 - Review page displaying all data
   - Provide: Complete code for ReviewStep.tsx with data display
   - Explain: Data display, formatting, and user confirmation patterns

**Phase 3: Navigation & Logic (20 minutes)**

6. **Step 6**: Implement navigation buttons and step switching logic

   - Provide: Complete code for navigation functions and button handlers
   - Explain: Conditional rendering, step validation, and user flow control

7. **Step 7**: Add simple validation (required fields only)
   - Provide: Complete code for validation functions and error states
   - Explain: Basic form validation, error states, and user feedback

**Phase 4: Data Persistence (10 minutes)**

8. **Step 8**: Implement localStorage save/load functionality

   - Provide: Complete code for data persistence hooks and functions
   - Explain: Browser storage, data serialization, and useEffect patterns

9. **Step 9**: Add form submission with console logging
   - Provide: Complete code for form submission handler and success state
   - Explain: Form submission handling, data processing, and debugging techniques

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
- Wait for confirmation before proceeding to next step
- Offer alternative approaches when relevant
