import Container from '@/components/container/container';
import Heading from '@/components/heading';
import MarkdownContent from '@/components/markdown-content';
import { TPost } from '@/types';
import { format_date } from '@/utils';
import { getPostSlugs } from '@/utils/api';
import { getContentBySlug } from '@/utils/api';
import { BLOG_POST_TITLE_PREFIX } from '@/utils/constants';
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Image from 'next/image';

type TProps = {
    post: TPost,
}

const Post = ({ post }: TProps) => {
    return (
        <>
            <Head>
                <title>{`${post.title}${BLOG_POST_TITLE_PREFIX}`}</title>
            </Head>
            
            <Image
                src={post.coverImage!}
                alt={post.title!}
                width={2000}
                height={600}
                className="max-w-full block"
            />
            <Container>
                <span className="text-gray-400 text-sm mb-2 block mt-12">{format_date(post.date)}</span>
                <Heading
                    title={post.title!}
                    className="mb-4"
                    has_default_mb={false}
                />
                <div className="flex items-center justify-start mb-12">
                    {post.tags?.split(',').map((tag) => {
                        return (
                            <span
                                className="bg-gray-100 py-1 px-2 rounded-md text-gray-600 text-xs mr-2 capitalize cursor-default"
                                key={tag}
                            >
                                {tag}
                            </span>
                        );
                    })}
                </div>
                <MarkdownContent
                    content={post.content}
                    className="mb-10"
                />
            </Container>
        </>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getPostSlugs().map((slug: string) => ({
        params: { slug }
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
    const post = getContentBySlug(ctx.params?.slug, ['title', 'excerpt', 'slug', 'date', 'coverImage', 'author', 'readingTime', 'tags', 'category', 'content']);

    return {
        props: {
            ...(await serverSideTranslations(ctx.locale ?? 'en', ['common', 'button'])),
            post,
        },
    };
};

export default Post;
