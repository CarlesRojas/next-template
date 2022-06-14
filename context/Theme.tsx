import { createContext, useContext, useState } from "react";

interface ContextInterface {
    theme: string;
    accentColor: string;
    switchAccentColor: (color: string) => void;
    switchToLightMode: () => void;
    switchToDarkMode: () => void;
}

const Context = createContext<ContextInterface | null>(null);

export function TodoProvider({ children }: React.PropsWithChildren) {
    const [theme, setTheme] = useState("light");
    const [accentColor, setAccentColor] = useState("cyan");

    const switchAccentColor = (color: string) => setAccentColor(color);
    const switchToLightMode = () => setTheme("light");
    const switchToDarkMode = () => setTheme("dark");

    return (
        <Context.Provider
            value={{
                theme,
                accentColor,
                switchAccentColor,
                switchToLightMode,
                switchToDarkMode,
            }}
        >
            {children}
        </Context.Provider>
    );
}

export function useThemeContext() {
    return useContext(Context);
}
