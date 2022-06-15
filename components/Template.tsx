import type { NextPage } from "next";
import { Button } from "primereact/button";
import { ColorPicker } from "primereact/colorpicker";
import { themeActions } from "../context";
import { useAppDispatch, useAppSelector } from "../context/hooks";

const Template: NextPage = () => {
    const dispatch = useAppDispatch();
    const accentColor = useAppSelector((state) => state.theme.accentColor);
    const dark = useAppSelector((state) => state.theme.dark);
    const status = useAppSelector((state) => state.theme.status);

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
                    onClick={() => dispatch(themeActions.changeThemeAsync(false))}
                    className="p-button-secondary  mb-5"
                    loading={status === "loading"}
                />
            ) : (
                <Button
                    label={status === "loading" ? "Loading..." : "Switch to Dark Mode"}
                    onClick={() => dispatch(themeActions.changeThemeAsync(true))}
                    className="p-button-secondary  mb-5"
                    loading={status === "loading"}
                />
            )}

            <p className="mb-2">Change Accent Color:</p>
            <ColorPicker
                value={accentColor}
                onChange={(e) => dispatch(themeActions.changeAccentColor(e.value as string))}
            />
        </div>
    );
};

export default Template;
