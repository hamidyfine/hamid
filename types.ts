type TNavItem = {
    slug: string;
    href: string;
};

export type TNavigation = {
    [k: string]: TNavItem;
}

export type TFields = 'slug' | 'title' | 'date' | 'content' | 'excerpt' | 'coverImage' | 'ogImage' | 'author' | 'tags' | 'category' | 'readingTime';

export type TPost = {
    slug: string;
    title?: string;
    date?: string;
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
    tags?: string;
    category?: string;
    readingTime?: string;
}

export type TSocialItem = {
    href: string;
    icon: JSX.Element;
};

export type TSocials = {
    [k: string]: TSocialItem;
}
