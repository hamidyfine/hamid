import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import {IconProvider, DEFAULT_ICON_CONFIGS} from '@icon-park/react';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import AppHeader from '@/components/header';
import AppFooter from '@/components/footer';
import '@fontsource/ubuntu';
import '@/styles/globals.scss';

const IconConfig = {...DEFAULT_ICON_CONFIGS, prefix: 'icon'};
const theme = extendTheme({
    fonts: {
        heading: '\'Ubuntu\', sans-serif',
        body   : '\'Ubuntu\', sans-serif',
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: 'normal',
            },
        }
    }
});

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ChakraProvider theme={theme}>
            <IconProvider value={IconConfig}>
                <AppHeader />
                <Component {...pageProps} />
                <AppFooter />
            </IconProvider>
        </ChakraProvider>
    );
};

export default appWithTranslation(App);
