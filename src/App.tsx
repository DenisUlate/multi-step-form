import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
	return (
		<ThemeProvider>
			<div className="min-h-screen bg-background text-foreground transition-colors duration-300">
				<ThemeToggle />
				<div className="container mx-auto py-8">
					<h1 className="text-2xl font-bold text-center mb-8">Multi-Step Form</h1>
					<p className="text-center text-muted-foreground">
						Theme toggle is working! Try clicking the button in the top-right corner.
					</p>
				</div>
			</div>
		</ThemeProvider>
	);
};
export default App;
