import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeToggle = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button variant="outline" size="icon" onClick={toggleTheme} className="fixed top-4 right-4 z-50">
			{theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
};

export default ThemeToggle;
