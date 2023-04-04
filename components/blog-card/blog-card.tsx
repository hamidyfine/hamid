import { TPost } from '@/types';
import { Dot } from '@icon-park/react';
import Link from 'next/link';

type TProps = {
    post: TPost,
};

const BlogCard = ({ post }: TProps) => {
    return (
        <div className="mb-8 rounded-md transition-all">
            <h2 className="text-lg hover:underline hover:text-purple-600">
                <Link href={`/blog/${post.slug}`}>
                    {post.title}
                </Link>
            </h2>
            <div className="text-gray-400 text-xs flex items-center justify-start my-1 cursor-default">
                <span className="capitalize">
                    {post.category}
                </span>
                <Dot
                    theme="outline"
                    className="mx-2"
                />
                {post.date}
                <Dot
                    theme="outline"
                    className="mx-2"
                />
                {post.readingTime}
            </div>
            <p className="text-black text-base font-light mb-2 leading-relaxed cursor-default">
                {post.excerpt}
            </p>
            <div className="flex items-center justify-start">
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
        </div>
    );
};

export default BlogCard;
