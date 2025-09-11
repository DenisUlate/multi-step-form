import React, { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

// Define the theme type
type Theme = "light" | "dark";

// Define the context value interface
interface ThemeContextType {
	theme: Theme;
	toggleTheme: () => void;
}

// Create the context with default values
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom hook to use the theme context
export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};

// ThemeProvider component props
interface ThemeProviderProps {
	children: ReactNode;
}

// ThemeProvider component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>("light");

	// Toggle between light and dark themes
	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	// Apply theme to document element
	useEffect(() => {
		const root = document.documentElement;

		// Remove both classes first
		root.classList.remove("light", "dark");

		// Add the current theme class
		root.classList.add(theme);
	}, [theme]);

	const value: ThemeContextType = {
		theme,
		toggleTheme,
	};

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
