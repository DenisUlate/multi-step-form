import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import UserInfoStep from "./steps/UserInfoStep";

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

					{/* Form Steps Content */}
					<div className="min-h-[400px]">
						{currentStep === 1 && (
							<UserInfoStep
								formData={{
									name: formData.name,
									email: formData.email,
									phone: formData.phone,
								}}
								onDataChange={(data) => setFormData((prev) => ({ ...prev, ...data }))}
								onNext={() => setCurrentStep(2)}
							/>
						)}

						{currentStep === 2 && (
							<div className="flex items-center justify-center h-[300px] text-muted-foreground">
								<p>Account Details form (Step 4 implementation)</p>
							</div>
						)}

						{currentStep === 3 && (
							<div className="flex items-center justify-center h-[300px] text-muted-foreground">
								<p>Review page (Step 5 implementation)</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MultiStepForm;
