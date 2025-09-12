import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

interface FormData {
	username: string;
	password: string;
	confirmPassword: string;
}

interface AccountDetailsStepProps {
	formData: FormData;
	onDataChange: (data: Partial<FormData>) => void;
	onNext: () => void;
	onBack: () => void;
}

const AccountDetailsStep: React.FC<AccountDetailsStepProps> = ({ formData, onDataChange, onNext, onBack }) => {
	const [errors, setErrors] = useState<Partial<FormData>>({});
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	// handle input changes
	const handleChange = (field: keyof FormData, value: string) => {
		onDataChange({ [field]: value });

		// Clear error for the field being edited
		if (errors[field]) {
			setErrors((prev) => ({ ...prev, [field]: "" }));
		}
	};

	// validate the form fields
	// Validate the form
	const validateForm = (): boolean => {
		const newErrors: Partial<FormData> = {};

		if (!formData.username.trim()) {
			newErrors.username = "Username is required";
		} else if (formData.username.length < 3) {
			newErrors.username = "Username must be at least 3 characters long";
		}

		if (!formData.password.trim()) {
			newErrors.password = "Password is required";
		} else if (formData.password.length < 6) {
			newErrors.password = "Password must be at least 6 characters long";
		}

		if (!formData.confirmPassword.trim()) {
			newErrors.confirmPassword = "Please confirm your password";
		} else if (formData.password !== formData.confirmPassword) {
			newErrors.confirmPassword = "Passwords do not match";
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
			{/* Username Field */}
			<div>
				<label htmlFor="username" className="block text-sm font-medium mb-2">
					Username *
				</label>
				<input
					type="text"
					id="username"
					value={formData.username}
					onChange={(e) => handleChange("username", e.target.value)}
					className={`w-full px-3 py-2 border rounded-md bg-background text-foreground transition-colors ${
						errors.username
							? "border-destructive focus:border-destructive focus:ring-destructive/20"
							: "border-input focus:border-ring focus:ring-ring/20"
					} focus:outline-none focus:ring-2`}
					placeholder="Choose a username"
				/>
				{errors.username && <p className="mt-1 text-sm text-destructive">{errors.username}</p>}
			</div>

			{/* Password Field */}
			<div>
				<label htmlFor="password" className="block text-sm font-medium mb-2">
					Password *
				</label>
				<div className="relative">
					<input
						type={showPassword ? "text" : "password"}
						id="password"
						value={formData.password}
						onChange={(e) => handleChange("password", e.target.value)}
						className={`w-full px-3 py-2 pr-10 border rounded-md bg-background text-foreground transition-colors ${
							errors.password
								? "border-destructive focus:border-destructive focus:ring-destructive/20"
								: "border-input focus:border-ring focus:ring-ring/20"
						} focus:outline-none focus:ring-2`}
						placeholder="Create a password"
					/>
					<button
						type="button"
						onClick={() => setShowPassword(!showPassword)}
						className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
						{showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
					</button>
				</div>
				{errors.password && <p className="mt-1 text-sm text-destructive">{errors.password}</p>}
			</div>

			{/* Confirm Password Field */}
			<div>
				<label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
					Confirm Password *
				</label>
				<div className="relative">
					<input
						type={showConfirmPassword ? "text" : "password"}
						id="confirmPassword"
						value={formData.confirmPassword}
						onChange={(e) => handleChange("confirmPassword", e.target.value)}
						className={`w-full px-3 py-2 pr-10 border rounded-md bg-background text-foreground transition-colors ${
							errors.confirmPassword
								? "border-destructive focus:border-destructive focus:ring-destructive/20"
								: "border-input focus:border-ring focus:ring-ring/20"
						} focus:outline-none focus:ring-2`}
						placeholder="Confirm your password"
					/>
					<button
						type="button"
						onClick={() => setShowConfirmPassword(!showConfirmPassword)}
						className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
						{showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
					</button>
				</div>
				{errors.confirmPassword && <p className="mt-1 text-sm text-destructive">{errors.confirmPassword}</p>}
			</div>

			{/* Navigation Buttons */}
			<div className="flex justify-between pt-4">
				<Button type="button" variant="outline" onClick={onBack}>
					← Previous
				</Button>

				<Button type="submit" size="lg">
					Next Step →
				</Button>
			</div>
		</form>
	);
};

export default AccountDetailsStep;
