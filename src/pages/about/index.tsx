import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { useAppSelector } from "../../context/hooks";

const About: NextPage = () => {
    const router = useRouter();

    // Theme context
    const { accentColor, dark } = useAppSelector((state) => state.theme);

    const style = {
        "--accent-color": `#${accentColor}`,
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
    } as const;

    return (
        <div className="h-full flex flex-column justify-content-center align-items-center flex-grow-1" style={style}>
            <h1 className={"mb-5"} style={{ color: "var(--accent-color)" }}>
                About Page
            </h1>

            <p>The theme and accend color should be mantained</p>

            <Button label="Go to Home" onClick={() => router.push("/")} className="p-button-text mt-5" />
        </div>
    );
};

export default About;