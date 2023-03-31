import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import '@fontsource/ubuntu';
import '@/styles/globals.scss';

const theme = extendTheme({
    fonts: {
        heading: '\'Ubuntu\', sans-serif',
        body   : '\'Ubuntu\', sans-serif',
    },
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}
