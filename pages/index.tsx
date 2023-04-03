import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { getContentBySlug } from '@/utils/api';
import { TPost } from '@/types';
import Container from '@/components/container';
import ContactCTA from '@/components/contact-cta';
import Intro from '@/components/intro';

type TProps = {
    post: TPost,
}

const Home = ({ post }: TProps) => {
    const { t } = useTranslation(['common', 'button']);

    return (
        <>
            <Head>
                <title>{t('home.page-title')}</title>
            </Head>
            <main>
                <Container>
                    <Intro />
                    <ContactCTA />
                </Container>
            </main>
        </>
    );
};

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
    const post = getContentBySlug('intro', ['title', 'excerpt', 'slug', 'content'], 'content');

    return {
        props: {
            ...(await serverSideTranslations(ctx.locale ?? 'en', ['common', 'button'])),
            post,
        },
    };
};

export default Home;
