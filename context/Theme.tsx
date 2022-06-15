import { createContext, useContext, useState } from "react";

interface ContextInterface {
    themeState: {
        dark: boolean;
        accentColor: string;
        status: string;
    };
    themeActions: {
        switchAccentColor: (color: string) => void;
        changeThemeAsync: (dark: boolean) => void;
    };
}

const INITIAL_CONTEXT = {
    themeState: {
        dark: false,
        accentColor: "ed0022",
        status: "idle",
    },
    themeActions: {
        switchAccentColor: () => null,
        changeThemeAsync: () => null,
    },
};

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const Context = createContext<ContextInterface>(INITIAL_CONTEXT);

export function ThemeProvider({ children }: React.PropsWithChildren) {
    const [dark, setDark] = useState(INITIAL_CONTEXT.themeState.dark);
    const [accentColor, setAccentColor] = useState(INITIAL_CONTEXT.themeState.accentColor);
    const [status, setStatus] = useState(INITIAL_CONTEXT.themeState.status);

    const switchAccentColor = (color: string) => setAccentColor(color);

    const changeThemeAsync = async (dark: boolean) => {
        setStatus("loading");
        await sleep(500);
        setStatus("idle");

        setDark(dark);
    };

    return (
        <Context.Provider
            value={{
                themeState: {
                    dark,
                    accentColor,
                    status,
                },
                themeActions: {
                    switchAccentColor,
                    changeThemeAsync,
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
