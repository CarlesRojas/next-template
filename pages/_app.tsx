import type { AppProps } from "next/app";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/tailwind-light/theme.css";
import { ThemeProvider } from "../context/Theme";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
