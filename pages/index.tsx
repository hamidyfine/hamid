import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import MarkdownContent from '@/components/markdown-content';
import { getContentBySlug } from '@/utils/api';
import { TPost } from '@/types';
import AppContainer from '@/components/container';

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
                <AppContainer>
                    <MarkdownContent content={post.content} />
                </AppContainer>
            </main>
        </>
    );
};

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
    const post = getContentBySlug('intro', [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'ogImage',
        'coverImage',
    ], 'content');

    return {
        props: {
            ...(await serverSideTranslations(ctx.locale ?? 'en', ['common', 'button'])),
            post,
        },
    };
};

export default Home;
