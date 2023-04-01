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
            <Head />
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
