import BlogCard from '@/components/blog-card';
import Container from '@/components/container';
import Heading from '@/components/heading';
import { TPost } from '@/types';
import { getAllPosts } from '@/utils/api';
import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

type TProps = {
    posts: TPost[],
}

const Blog = ({ posts }: TProps) => {
    const { t } = useTranslation(['common', 'button']);

    return (
        <>
            <Head>
                <title>{t('blog.page-title')}</title>
            </Head>
            <main>
                {posts.length > 0 && (
                    <Container root>
                        <Heading
                            title={t('blog.title')}
                            is_large
                        />
                        <Container mb>
                            {posts.map((post, index) => {
                                return (
                                    <BlogCard
                                        post={post}
                                        key={index}
                                    />
                                );
                            })}
                        </Container>
                    </Container>
                )}
            </main>
        </>
    );
};

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
    const posts = getAllPosts(['title', 'excerpt', 'slug', 'date', 'coverImage', 'author', 'readingTime', 'tags', 'category'], 'date');

    return {
        props: {
            ...(await serverSideTranslations(ctx.locale ?? 'en', ['common', 'button'])),
            posts,
        },
    };
};

export default Blog;
