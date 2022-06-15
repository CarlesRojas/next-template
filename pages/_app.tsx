import type { AppProps } from "next/app";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/tailwind-light/theme.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../context/store";
import "../styles/globals.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Component {...pageProps} />
                </PersistGate>
            </Provider>
        </>
    );
}
