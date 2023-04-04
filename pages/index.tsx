import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { getAllPosts } from '@/utils/api';
import { TPost } from '@/types';
import Container from '@/components/container';
import Intro from '@/components/intro';
import Heading from '@/components/heading';
import BlogCard from '@/components/blog-card';
import { NAVIGATION } from '@/utils/constants';

type TProps = {
    posts: TPost[],
}

const Home = ({ posts }: TProps) => {
    const { t } = useTranslation(['common', 'button']);

    return (
        <>
            <Head>
                <title>{t('home.page-title')}</title>
            </Head>
            <main>
                <Container>
                    <Intro />

                    {/* Latest Blog Items */}
                    <Heading
                        title={t('blog.latest.title')}
                        subtitle={t('blog.latest.subtitle')}
                        more_button_text={t('blog.latest.more_posts')}
                        more_button_link={NAVIGATION.blog.href}
                    />
                    <Container
                        fluid
                        mb
                    >
                        {posts.map((post, index) => {
                            return (
                                <BlogCard
                                    post={post}
                                    key={index}
                                />
                            );
                        })}
                    </Container>

                    {/* Latest Projects */}
                    <Heading
                        title={t('projects.latest.title')}
                        subtitle={t('projects.latest.subtitle')}
                        more_button_text={t('projects.latest.more_posts')}
                        more_button_link={NAVIGATION.projects.href}
                    />
                    <Container
                        fluid
                        mb
                    >
                        Projects Card
                    </Container>

                    {/* Timeline */}
                    <Heading
                        title={t('resume.timeline.title')}
                        subtitle={t('resume.timeline.subtitle')}
                        more_button_text={t('resume.view')}
                        more_button_link={NAVIGATION.resume.href}
                    />
                    <Container
                        fluid
                        mb
                    >
                        Timeline
                    </Container>
                </Container>
            </main>
        </>
    );
};

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
    const posts = getAllPosts(['title', 'excerpt', 'slug', 'date', 'coverImage', 'author', 'readingTime', 'tags', 'category']);

    return {
        props: {
            ...(await serverSideTranslations(ctx.locale ?? 'en', ['common', 'button'])),
            posts,
        },
    };
};

export default Home;
