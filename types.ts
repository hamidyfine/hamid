/**
 * Navigation item
 */
export type TNavItem = {
    slug: string;
    href: string;
};

/**
 * Post fields
 */
export type TFields = 'slug' | 'title' | 'date' | 'content' | 'excerpt' | 'coverImage' | 'ogImage' | 'author';

/**
 * Post type
 */
export type TPost = {
    slug: string;
    title?: string;
    date?: string | Date;
    content?: string;
    excerpt?: string;
    coverImage?: string;
    author?: {
        name: string;
        avatar: string;
    };
    ogImage?: {
        url: string;
    };
}

/**
 * Social item
 */
export type TSocialItem = {
    href: string;
    icon: JSX.Element;
};

/**
 * Socials List
 */
export type TSocials = {
    [k: string]: TSocialItem;
}
