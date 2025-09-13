import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import UserInfoStep from "./steps/UserInfoStep";
import AccountDetailsStep from "./steps/AccountDetailsStep";
import ReviewStep from "./steps/ReviewStep";

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

	const handleSubmit = () => {
		// Save to localStorage
		localStorage.setItem("multiStepFormData", JSON.stringify(formData));

		console.log("Form submitted successfully!:", formData);

		// Show sucess message or redirect as needed
		alert(
			"Registration completed successfully!\n\nData has been saved to localStorage and logged to console.\n\nCheck the browser console to see your data."
		);
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
							<AccountDetailsStep
								formData={{
									username: formData.username,
									password: formData.password,
									confirmPassword: formData.confirmPassword,
								}}
								onDataChange={(data) => setFormData((prev) => ({ ...prev, ...data }))}
								onNext={() => setCurrentStep(3)}
								onBack={() => setCurrentStep(1)}
							/>
						)}

						{currentStep === 3 && (
							<ReviewStep
								userInfo={{
									name: formData.name,
									email: formData.email,
									phone: formData.phone,
								}}
								accountDetails={{
									username: formData.username,
									password: formData.password,
								}}
								onBack={() => setCurrentStep(2)}
								onSubmit={handleSubmit}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MultiStepForm;
