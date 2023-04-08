import Container from '@/components/container/container';
import Heading from '@/components/heading';
import MarkdownContent from '@/components/markdown-content';
import { TPost } from '@/types';
import { format_date } from '@/utils';
import { getPostSlugs } from '@/utils/api';
import { getContentBySlug } from '@/utils/api';
import { BLOG_POST_TITLE_PREFIX } from '@/utils/constants';
import classNames from 'classnames';
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

type TProps = {
    post: TPost,
}

const Post = ({ post }: TProps) => {
    return (
        <>
            <Head>
                <title>{`${post.title}${BLOG_POST_TITLE_PREFIX}`}</title>
            </Head>

            <div
                style={{ backgroundImage: `url(${post.coverImage})` }}
                className="flex items-center justify-center max-w-full h-96 bg-cover bg-center bg-no-repeat bg-purple-900 mb-12"
            >
                {!post.coverImage && (
                    <div className="flex flex-col items-center justify-start">
                        <span className="text-white block">{format_date(post.date)}</span>
                        <h1 className="text-5xl font-medium text-white leading-relaxed mb-2">
                            {post.title}
                        </h1>
                        <div className="flex items-center justify-start">
                            {post.tags?.split(',').map((tag, index) => {
                                return (
                                    <span
                                        className={classNames('bg-gray-100 py-1 px-2 rounded-md text-gray-600 text-xs capitalize cursor-default', { 'mr-2': post.tags && index !== post.tags?.split(',').length - 1 })}
                                        key={index}
                                    >
                                        {tag}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>

            <Container>
                {post.coverImage && (
                    <>
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
                    </>
                )}
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
