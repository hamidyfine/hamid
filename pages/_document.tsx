import Document, { Html, Main, NextScript, Head, DocumentContext } from 'next/document';

type TProps = {
    locale: string;
};

const MyDocument = (props: TProps) => {
    return (
        <Html
            dir={props.locale === 'fa' ? 'rtl' : 'ltr'}
            lang={props.locale}
        >
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="title"
                    content="Hamid Yaftian | Full Stack Developer"
                />
                <meta
                    name="description"
                    content="I'm full stack developer, creating open-source projects and writing about web development, code, testing, tools, and sometimes life."
                />
                <meta
                    name="keywords"
                    content="frontend, code, javascript, react"
                />
                <meta
                    name="robots"
                    content="index,follow"
                />
                <meta
                    http-equiv="Content-Type"
                    content="text/html; charset=utf-8"
                />
                <meta
                    name="language"
                    content="English"
                />
                <link
                    rel="icon"
                    href="/favicon/favicon.ico"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon/favicon-16x16.png"
                />
                <link
                    rel="manifest"
                    href="/favicon/site.webmanifest"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, locale: ctx?.locale || 'en' };
};

export default MyDocument;
