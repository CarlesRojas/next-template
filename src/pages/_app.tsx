import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/tailwind-light/theme.css';
import '../../styles/globals.scss';
import { ThemeProvider } from '../context/Theme';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
                />
                <title>Next Template</title>
            </Head>

            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

export default MyApp;
