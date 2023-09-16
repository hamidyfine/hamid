/* eslint-disable react/jsx-max-props-per-line */
import type { TNavigation, TSocials } from '@/types';
import { GithubOne, InstagramOne, Twitter, EmailSuccessfully, Telegram } from '@icon-park/react';

export const GITHUB_LINK: string = 'https://api.github.com/users/hamidyfine/repos';
export const BLOG_POST_TITLE_PREFIX: string = ' | Hamid Yaftian | Front-end Developer | Blog';
export const IGNORED_PROJECTS: string[] = ['hamidyfine', 'vuex-issue'];

export const NAVIGATION: TNavigation = {
    blog: {
        slug: 'blog',
        href: '/blog',
    },
    projects: {
        slug: 'projects',
        href: '/projects',
    },
    resume: {
        slug: 'resume',
        href: '/resume',
    },
    contact: {
        slug: 'contact',
        href: 'mailto:hamid.yaftian@gmail.com'
    },
};

export const SOCIAL: TSocials = {
    github: {
        href: 'https://github.com/hamidyfine',
        icon: <GithubOne theme="outline" size="18" />,
    },
    deriv: {
        href: 'https://github.com/hamid-deriv',
        icon: <GithubOne theme="outline" size="18" />,
    },
    linkedin: {
        href: 'https://www.linkedin.com/in/hamidyaftian/',
        icon: <InstagramOne theme="outline" size="18" />,
    },
    twitter: {
        href: '',
        icon: <Twitter theme="outline" size="18" />,
    },
    email: {
        href: 'mailto:hamid.yaftian@gmail.com',
        icon: <EmailSuccessfully theme="outline" size="18" />,
    },
    telegram: {
        href: 'https://t.me/hamidyfine',
        icon: <Telegram theme="outline" size="18" />,
    },
};

