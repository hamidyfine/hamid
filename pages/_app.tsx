import {IconProvider, DEFAULT_ICON_CONFIGS} from '@icon-park/react';
import type { AppProps } from 'next/app';
import ReactGA from 'react-ga';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import AppHeader from '@/components/header';
import AppFooter from '@/components/footer';
import ContactCTA from '@/components/contact-cta';
import '@/styles/globals.scss';

const IconConfig = {...DEFAULT_ICON_CONFIGS, prefix: 'icon'};

const App = ({ Component, pageProps }: AppProps) => {
    // Initialize Google Analytics
    ReactGA.initialize('G-5RTRXFSCMV');
    if (typeof window !== 'undefined') {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    return (
        <IconProvider value={IconConfig}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
      
            <AppHeader />
            <div>
                <Component
                    className="min-h-screen"
                    {...pageProps}
                />
            </div>
            <ContactCTA />
            <AppFooter />
        </IconProvider>
    );
};

export default appWithTranslation(App);
