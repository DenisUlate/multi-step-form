import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import MultiStepForm from "./components/MultiStepForm";

const App = () => {
	return (
		<ThemeProvider>
			<ThemeToggle />
			<MultiStepForm />
		</ThemeProvider>
	);
};
export default App;
