import { useState } from "react";
import { Button } from "@/components/ui/button";

interface FormData {
	name: string;
	email: string;
	phone: string;
}

interface UserInfoStepProps {
	formData: FormData;
	onDataChange: (data: Partial<FormData>) => void;
	onNext: () => void;
}

const UserInfoStep: React.FC<UserInfoStepProps> = ({ formData, onDataChange, onNext }) => {
	const [errors, setErrors] = useState<Partial<FormData>>({});

	// Handle input changes
	const handleChange = (field: keyof FormData, value: string) => {
		onDataChange({ [field]: value });

		// Clear error when user starts typing
		if (errors[field]) {
			setErrors((prev) => ({ ...prev, [field]: "" }));
		}
	};

	// Validate the form
	const validateForm = (): boolean => {
		const newErrors: Partial<FormData> = {};

		if (!formData.name.trim()) {
			newErrors.name = "Name is required";
		}

		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = "Please enter a valid email address";
		}

		if (!formData.phone.trim()) {
			newErrors.phone = "Phone number is required";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	// Handle form submission
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (validateForm()) {
			onNext();
		}
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			{/* Name Field */}
			<div>
				<label htmlFor="name" className="block text-sm font-medium mb-2">
					Full Name *
				</label>
				<input
					type="text"
					id="name"
					value={formData.name}
					onChange={(e) => handleChange("name", e.target.value)}
					className={`w-full px-3 py-2 border rounded-md bg-background text-foreground transition-colors ${
						errors.name
							? "border-destructive focus:border-destructive focus:ring-destructive/20"
							: "border-input focus:border-ring focus:ring-ring/20"
					} focus:outline-none focus:ring-2`}
					placeholder="Enter your full name"
				/>
				{errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
			</div>

			{/* Email Field */}
			<div>
				<label htmlFor="email" className="block text-sm font-medium mb-2">
					Email Address *
				</label>
				<input
					type="email"
					id="email"
					value={formData.email}
					onChange={(e) => handleChange("email", e.target.value)}
					className={`w-full px-3 py-2 border rounded-md bg-background text-foreground transition-colors ${
						errors.email
							? "border-destructive focus:border-destructive focus:ring-destructive/20"
							: "border-input focus:border-ring focus:ring-ring/20"
					} focus:outline-none focus:ring-2`}
					placeholder="Enter your email address"
				/>
				{errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
			</div>

			{/* Phone Field */}
			<div>
				<label htmlFor="phone" className="block text-sm font-medium mb-2">
					Phone Number *
				</label>
				<input
					type="tel"
					id="phone"
					value={formData.phone}
					onChange={(e) => handleChange("phone", e.target.value)}
					className={`w-full px-3 py-2 border rounded-md bg-background text-foreground transition-colors ${
						errors.phone
							? "border-destructive focus:border-destructive focus:ring-destructive/20"
							: "border-input focus:border-ring focus:ring-ring/20"
					} focus:outline-none focus:ring-2`}
					placeholder="Enter your phone number"
				/>
				{errors.phone && <p className="mt-1 text-sm text-destructive">{errors.phone}</p>}
			</div>

			{/* Submit Button */}
			<div className="flex justify-end pt-4">
				<Button type="submit" size="lg">
					Next Step →
				</Button>
			</div>
		</form>
	);
};

export default UserInfoStep;
