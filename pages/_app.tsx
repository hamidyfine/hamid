import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import {IconProvider, DEFAULT_ICON_CONFIGS} from '@icon-park/react';
import type { AppProps } from 'next/app';
import '@fontsource/ubuntu';
import '@/styles/globals.scss';

const IconConfig = {...DEFAULT_ICON_CONFIGS, prefix: 'icon'};
const theme = extendTheme({
    fonts: {
        heading: '\'Ubuntu\', sans-serif',
        body   : '\'Ubuntu\', sans-serif',
    },
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <IconProvider value={IconConfig}>
                <Component {...pageProps} />
            </IconProvider>
        </ChakraProvider>
    );
}
