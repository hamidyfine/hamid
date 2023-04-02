import {IconProvider, DEFAULT_ICON_CONFIGS} from '@icon-park/react';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import AppHeader from '@/components/header';
import AppFooter from '@/components/footer';
import '@fontsource/ubuntu';
import '@fontsource/nunito';
import '@/styles/globals.scss';
import Head from 'next/head';

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
            <Component {...pageProps} />
            <AppFooter />
        </IconProvider>
    );
};

export default appWithTranslation(App);
