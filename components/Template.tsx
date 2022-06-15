import type { NextPage } from "next";
import { Button } from "primereact/button";
import { ColorPicker } from "primereact/colorpicker";
import { useThemeContext } from "../context/Theme";

const Template: NextPage = () => {
    const { themeState, themeActions } = useThemeContext();

    const { accentColor, dark, status } = themeState;
    const { switchAccentColor, changeThemeAsync } = themeActions;

    const style = {
        "--accent-color": `#${accentColor}`,
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
    } as const;

    return (
        <div className="h-full flex flex-column justify-content-center align-items-center flex-grow-1" style={style}>
            <h1 className={"mb-5"} style={{ color: "var(--accent-color)" }}>
                NextJS Template
            </h1>

            {dark ? (
                <Button
                    label={status === "loading" ? "Loading..." : "Switch to Light Mode"}
                    onClick={() => changeThemeAsync(false)}
                    className="p-button-secondary  mb-5"
                    loading={status === "loading"}
                />
            ) : (
                <Button
                    label={status === "loading" ? "Loading..." : "Switch to Dark Mode"}
                    onClick={() => changeThemeAsync(true)}
                    className="p-button-secondary  mb-5"
                    loading={status === "loading"}
                />
            )}

            <p className="mb-2">Change Accent Color:</p>
            <ColorPicker value={accentColor} onChange={(e) => switchAccentColor(e.value as string)} />
        </div>
    );
};

export default Template;
