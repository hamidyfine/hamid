import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import markdownToHtml from './markdownToHtml';
import type { TFields, TPost } from '@/types';

const contentDirectory = join(process.cwd(), 'public/content');
const postsDirectory = join(process.cwd(), 'posts');

/**
 * Return the content of the given slug
 * @param slug slug of the post
 * @param fields fields to return
 * @returns post
 */
export const getContentBySlug = (slug: string, fields: TFields[] = [], dir: 'posts' | 'content' = 'posts') => {
    const directory = dir === 'posts' ? postsDirectory : contentDirectory;
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = join(directory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const items: TPost = {
        slug: realSlug,
    };

    fields.forEach((field) => {
        if (field === 'content') {
            markdownToHtml(content).then((html) => {
                items[field] = html;
            });
        }

        if (typeof data[field] !== 'undefined') {
            items[field] = data[field];
        }
    });

    return items;
};

/**
 * Get all posts slugs
 * 
 * @returns {string[]}
 */
export const getPostSlugs = (): string[] => {
    return fs.readdirSync(postsDirectory);
};

/**
 * 
 * @param fields fields to return
 * @returns 
 */
export const getAllPosts = (fields: TFields[] = [], sort_by?: keyof TPost) => {
    const slugs = getPostSlugs();
    const posts = slugs.map((slug) => getContentBySlug(slug, fields));

    /**
     * Sort posts by sort_by field
     */
    if (sort_by) {
        posts.sort((post1, post2) => {
            const val1 = post1[sort_by]?.toString();
            const val2 = post2[sort_by]?.toString();
            if (!!val1 && !!val2) {
                return val1 > val2 ? -1 : 1;
            } else {
                return val1 ? -1 : 1;
            }
        });
    }
    return posts;
};
