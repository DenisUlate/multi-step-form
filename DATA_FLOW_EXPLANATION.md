````markdown
# Data Flow Explanation - How Your Multi-Step Form Works

## **1. Central State Management**

### **Single Source of Truth**

```tsx
const [formData, setFormData] = useState<FormData>(initialFormData);
```
````

**How it works:**

- **One State Object**: All form data is stored in a single `formData` state in `MultiStepForm.tsx`
- **Unified Interface**: The `FormData` interface defines all fields across all steps
- **State Persistence**: Data persists as you navigate between steps because it's stored at the parent level

**Why this approach:**

- ✅ **Data Integrity**: No risk of losing data when switching steps
- ✅ **Simple Management**: One place to manage all form state
- ✅ **Easy Validation**: Can validate across steps if needed

## **2. Props-Based Data Flow**

### **Parent → Child Data Flow**

```tsx
{
	currentStep === 1 && (
		<UserInfoStep
			formData={{
				name: formData.name,
				email: formData.email,
				phone: formData.phone,
			}}
			onDataChange={(data) => setFormData((prev) => ({ ...prev, ...data }))}
			onNext={() => setCurrentStep(2)}
		/>
	);
}
```

**How it works:**

- **Data Down**: Parent passes current values as props to child components
- **Events Up**: Child components call `onDataChange` to update parent state
- **Controlled Components**: Each input is controlled by the parent state

### **Child → Parent Communication**

```tsx
// In UserInfoStep.tsx
const handleChange = (field: keyof FormData, value: string) => {
	onDataChange({ [field]: value }); // Updates parent state
};
```

**The Flow:**

1. User types in input → `handleChange` called
2. `onDataChange({ name: "John" })` called
3. Parent receives partial update
4. `setFormData(prev => ({ ...prev, name: "John" }))` merges new data
5. Component re-renders with updated value

## **3. State Updates with Object Spreading**

### **Partial State Updates**

```tsx
onDataChange={(data) => setFormData(prev => ({ ...prev, ...data }))}
```

**How this works:**

- **Spread Operator**: `...prev` keeps all existing data
- **Override**: `...data` overwrites only the changed fields
- **Immutable Updates**: Creates new object, doesn't mutate existing state

**Example:**

```tsx
// Current state: { name: '', email: '', phone: '', username: '', password: '', confirmPassword: '' }
// User types "John" in name field
onDataChange({ name: "John" });
// Result: { name: 'John', email: '', phone: '', username: '', password: '', confirmPassword: '' }
```

## **4. Step Navigation Flow**

### **Navigation Logic**

```tsx
const [currentStep, setCurrentStep] = useState(1);
```

**How navigation works:**

- **Step State**: Separate state tracks current step (1, 2, or 3)
- **Conditional Rendering**: Each step component renders based on `currentStep`
- **Navigation Callbacks**: `onNext` and `onBack` change the step

**Navigation Flow:**

1. User completes Step 1 validation
2. `onNext={() => setCurrentStep(2)}` called
3. `currentStep` becomes 2
4. Component re-renders showing Step 2
5. **Important**: `formData` remains intact!

## **5. Form Validation Flow**

### **Step-by-Step Validation**

```tsx
// In UserInfoStep.tsx
const validateForm = (): boolean => {
	const newErrors: Partial<FormData> = {};

	if (!formData.name.trim()) {
		newErrors.name = "Name is required";
	}

	setErrors(newErrors);
	return Object.keys(newErrors).length === 0;
};
```

**Validation Flow:**

1. User clicks "Next" → `handleSubmit` called
2. `validateForm()` checks all fields
3. If valid: `onNext()` advances to next step
4. If invalid: Errors shown, stay on current step

## **6. Data Persistence & Submission**

### **localStorage Integration**

```tsx
const handleSubmit = () => {
	// Save to localStorage
	localStorage.setItem("multiStepFormData", JSON.stringify(formData));
	console.log("Form submitted successfully!:", formData);
};
```

**Submission Flow:**

1. User reaches Review step (Step 3)
2. All data displayed for confirmation
3. User clicks "Submit Registration"
4. `handleSubmit()` called
5. Data serialized to JSON and saved to localStorage
6. Data logged to console for debugging
7. Success message shown

## **7. Component Communication Pattern**

### **Unidirectional Data Flow**

```
MultiStepForm (Parent)
├── formData state
├── currentStep state
└── renders child based on step
    ├── UserInfoStep
    │   ├── receives: formData subset + onDataChange
    │   └── calls: onDataChange({ field: value })
    ├── AccountDetailsStep
    │   ├── receives: formData subset + onDataChange + onBack
    │   └── calls: onDataChange, onNext, onBack
    └── ReviewStep
        ├── receives: formData subsets + onSubmit + onBack
        └── calls: onSubmit, onBack
```

## **Key Design Patterns Used:**

### **1. Controlled Components**

- All inputs controlled by parent state
- Single source of truth
- Predictable data flow

### **2. Callback Props**

- Children communicate with parent via callbacks
- Clean separation of concerns
- Reusable components

### **3. State Lifting**

- Form state lives in common parent
- Shared between all steps
- Enables data persistence

### **4. Conditional Rendering**

- Show different components based on step
- Maintain state while switching views
- Clean user experience

## **Benefits of This Architecture:**

✅ **Data Integrity**: Never lose user input when navigating  
✅ **Validation Control**: Each step validates independently  
✅ **Maintainable**: Easy to add new steps or modify existing ones  
✅ **Type Safety**: TypeScript ensures data consistency  
✅ **User Experience**: Smooth navigation with data persistence  
✅ **Debugging**: Clear data flow makes issues easy to track

This is a robust, scalable pattern that follows React best practices for multi-step forms!

## **Visual Data Flow Diagram**

```
User Input
    ↓
Child Component (UserInfoStep/AccountDetailsStep/ReviewStep)
    ↓ (onDataChange callback)
Parent Component (MultiStepForm)
    ↓ (setFormData with spread operator)
Updated State
    ↓ (re-render)
All Components with New Data
    ↓ (on final submit)
localStorage + Console Log
```

## **Implementation Notes**

### **State Management Choice**

- **Why useState over Context**: For this simple form, prop drilling is manageable and keeps the data flow explicit
- **Why not Redux**: Overkill for a single form with 3 steps
- **Scalability**: If adding more complex features, consider Context or state management library

### **Validation Strategy**

- **Client-side only**: Suitable for demo/learning purposes
- **Step-by-step**: Prevents invalid data from progressing
- **Real-world**: Would include server-side validation

### **Performance Considerations**

- **Re-renders**: Minimal because state updates are targeted
- **Optimization**: Could use React.memo for step components if needed
- **Large forms**: Consider field-level optimization with libraries like React Hook Form

```

**Your task**: Copy this entire content and paste it into your `DATA_FLOW_EXPLANATION.md` file, then save it.

This gives you a comprehensive reference document that explains your multi-step form's architecture!**Your task**: Copy this entire content and paste it into your `DATA_FLOW_EXPLANATION.md` file, then save it.

This gives you a comprehensive reference document that explains your multi-step form's architecture!
```
