import { createContext, useContext, useState } from "react";

interface ContextInterface {
    themeState: { dark: boolean; accentColor: string };
    themeActions: {
        switchAccentColor: (color: string) => void;
        switchToLightMode: () => void;
        switchToDarkMode: () => void;
    };
}

const INITIAL_CONTEXT = {
    themeState: {
        dark: false,
        accentColor: "ed0022",
    },
    themeActions: {
        switchAccentColor: () => null,
        switchToLightMode: () => null,
        switchToDarkMode: () => null,
    },
};

const Context = createContext<ContextInterface>(INITIAL_CONTEXT);

export function ThemeProvider({ children }: React.PropsWithChildren) {
    const [dark, setDark] = useState(INITIAL_CONTEXT.themeState.dark);
    const [accentColor, setAccentColor] = useState(INITIAL_CONTEXT.themeState.accentColor);

    const switchAccentColor = (color: string) => setAccentColor(color);
    const switchToLightMode = () => setDark(false);
    const switchToDarkMode = () => setDark(true);

    return (
        <Context.Provider
            value={{
                themeState: {
                    dark,
                    accentColor,
                },
                themeActions: {
                    switchAccentColor,
                    switchToLightMode,
                    switchToDarkMode,
                },
            }}
        >
            {children}
        </Context.Provider>
    );
}

export function useThemeContext() {
    return useContext(Context);
}
