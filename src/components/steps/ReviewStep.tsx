import { Button } from "@/components/ui/button";

interface UserInfo {
	name: string;
	email: string;
	phone: string;
}

interface AccountDetails {
	username: string;
	password: string;
}

interface ReviewStepProps {
	userInfo: UserInfo;
	accountDetails: AccountDetails;
	onBack: () => void;
	onSubmit: () => void;
}

const ReviewStep: React.FC<ReviewStepProps> = ({ userInfo, accountDetails, onBack, onSubmit }) => {
	return (
		<div className="space-y-6">
			<div className="text-center mb-6">
				<p className="text-muted-foreground">Please review your information before submitting</p>
			</div>

			{/* User Information Section */}
			<div className="bg-muted/30 rounded-lg p-4">
				<h3 className="font-semibold text-lg mb-4 text-foreground">User Information</h3>
				<div className="space-y-3">
					<div className="flex justify-between items-center py-2 border-b border-border/50">
						<span className="font-medium text-muted-foreground">Full Name:</span>
						<span className="text-foreground">{userInfo.name}</span>
					</div>
					<div className="flex justify-between items-center py-2 border-b border-border/50">
						<span className="font-medium text-muted-foreground">Email:</span>
						<span className="text-foreground">{userInfo.email}</span>
					</div>
					<div className="flex justify-between items-center py-2">
						<span className="font-medium text-muted-foreground">Phone:</span>
						<span className="text-foreground">{userInfo.phone}</span>
					</div>
				</div>
			</div>

			{/* Account Details Section */}
			<div className="bg-muted/30 rounded-lg p-4">
				<h3 className="font-semibold text-lg mb-4 text-foreground">Account Details</h3>
				<div className="space-y-3">
					<div className="flex justify-between items-center py-2 border-b border-border/50">
						<span className="font-medium text-muted-foreground">Username:</span>
						<span className="text-foreground">{accountDetails.username}</span>
					</div>
					<div className="flex justify-between items-center py-2">
						<span className="font-medium text-muted-foreground">Password:</span>
						<span className="text-foreground">{"•".repeat(accountDetails.password.length)}</span>
					</div>
				</div>
			</div>

			{/* Terms and Conditions */}
			<div className="bg-accent/20 border border-accent rounded-lg p-4">
				<div className="flex items-start space-x-3">
					<input
						type="checkbox"
						id="terms"
						className="mt-1 h-4 w-4 text-primary focus:ring-primary border-input rounded"
						defaultChecked={false}
					/>
					<label htmlFor="terms" className="text-sm text-muted-foreground">
						I agree to the{" "}
						<a href="#" className="text-primary hover:underline">
							Terms of Service
						</a>{" "}
						and{" "}
						<a href="#" className="text-primary hover:underline">
							Privacy Policy
						</a>
					</label>
				</div>
			</div>

			{/* Action Buttons */}
			<div className="flex justify-between pt-6">
				<Button type="button" variant="outline" onClick={onBack} size="lg">
					← Previous
				</Button>

				<Button type="button" onClick={onSubmit} size="lg" className="bg-green-600 hover:bg-green-700 text-white">
					Submit Registration
				</Button>
			</div>

			{/* Info Note */}
			<div className="text-center pt-4">
				<p className="text-xs text-muted-foreground">
					By submitting, your data will be saved to localStorage and logged to the console
				</p>
			</div>
		</div>
	);
};

export default ReviewStep;
