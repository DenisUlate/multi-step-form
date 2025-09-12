import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

// Define the form data interface
interface FormData {
	// Step 1: User Info
	name: string;
	email: string;
	phone: string;

	// Step 2: Account Details
	username: string;
	password: string;
	confirmPassword: string;
}

// Initial form data
const initialFormData: FormData = {
	name: "",
	email: "",
	phone: "",
	username: "",
	password: "",
	confirmPassword: "",
};

const MultiStepForm = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const [formData, setFormData] = useState<FormData>(initialFormData);

	const totalSteps = 3;

	// Step indicator component
	const StepIndicator = () => (
		<div className="flex justify-center mb-8">
			<div className="flex items-center space-x-4">
				{[1, 2, 3].map((step) => (
					<div key={step} className="flex items-center">
						<div
							className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
								currentStep >= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
							}`}>
							{step}
						</div>
						{step < 3 && (
							<div className={`w-12 h-0.5 mx-2 transition-colors ${currentStep > step ? "bg-primary" : "bg-muted"}`} />
						)}
					</div>
				))}
			</div>
		</div>
	);

	// Step titles
	const getStepTitle = () => {
		switch (currentStep) {
			case 1:
				return "User Information";
			case 2:
				return "Account Details";
			case 3:
				return "Review & Submit";
			default:
				return "";
		}
	};

	return (
		<div className="min-h-screen bg-background text-foreground">
			<div className="container mx-auto py-8 max-w-2xl">
				<h1 className="text-3xl font-bold text-center mb-8">Multi-Step Registration</h1>

				<StepIndicator />

				<div className="bg-card border rounded-lg p-6 shadow-sm">
					<h2 className="text-xl font-semibold mb-6 text-center">
						Step {currentStep}: {getStepTitle()}
					</h2>

					{/* Form content will go here */}
					<div className="min-h-[300px] flex items-center justify-center text-muted-foreground">
						<p>Form step {currentStep} content will be implemented in the next steps</p>
					</div>

					{/* Navigation buttons placeholder */}
					<div className="flex justify-between mt-8">
						<div>
							{currentStep > 1 && (
								<button
									type="button"
									className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
									onClick={() => setCurrentStep(currentStep - 1)}>
									← Previous
								</button>
							)}
						</div>
						<div>
							{currentStep < totalSteps ? (
								<button
									type="button"
									className="px-6 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
									onClick={() => setCurrentStep(currentStep + 1)}>
									Next →
								</button>
							) : (
								<button
									type="button"
									className="px-6 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors">
									Submit
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MultiStepForm;
