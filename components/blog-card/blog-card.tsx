import { TPost } from '@/types';
import classNames from 'classnames';
import Link from 'next/link';
import { format_date } from '@/utils';

type TProps = {
    post: TPost,
    is_last_post?: boolean,
};

const BlogCard = ({ post, is_last_post }: TProps) => {
    return (
        <div className={classNames('mb-8', { 'pb-8 border-b-2': !is_last_post })}>
            <span className="text-gray-400 text-sm mb-1 block">{format_date(post.date)}</span>
            <h2 className="text-lg hover:underline hover:text-purple-600 mb-1">
                <Link href={`/blog/${post.slug}`}>
                    {post.title}
                </Link>
            </h2>
            <p className="text-black text-base font-light mb-2 leading-relaxed cursor-default">
                {post.excerpt}
            </p>
            <div className="flex items-center justify-start">
                {post.tags?.split(',').map((tag, index) => {
                    return (
                        <span
                            className="bg-gray-100 py-1 px-2 rounded-md text-gray-600 text-xs mr-2 capitalize cursor-default"
                            key={index}
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
