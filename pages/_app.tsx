import {IconProvider, DEFAULT_ICON_CONFIGS} from '@icon-park/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import AppHeader from '@/components/header';
import AppFooter from '@/components/footer';
import ContactCTA from '@/components/contact-cta';
import '@/styles/globals.scss';

const IconConfig = {...DEFAULT_ICON_CONFIGS, prefix: 'icon'};

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <IconProvider value={IconConfig}>
            <Head>
                <meta
                    name="viewport"
                    content="viewport-fit=cover"
                />
            </Head>
      
            <AppHeader />
            <Component
                className="min-h-screen"
                {...pageProps}
            />
            <ContactCTA />
            <AppFooter />
        </IconProvider>
    );
};

export default appWithTranslation(App);
