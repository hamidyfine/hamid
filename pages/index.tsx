import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { getContentBySlug } from '@/utils/api';
import { TPost } from '@/types';
import Container from '@/components/container';
import ContactCTA from '@/components/contact-cta';

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
                    <div className="py-16">
                        <p className="text-lg font-semibold mb-2">
                            {t('home.intro.title')}
                        </p>
                        <h1 className="text-5xl font-extrabold mb-4">
                            {t('home.intro.job-title-pre')} <span className="text-purple-600">{t('home.intro.job-title')}</span>
                        </h1>
                        <p className="text-xl leading-relaxed">
                            {t('home.intro.body')}
                        </p>
                    </div>

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
