/* eslint-disable react/jsx-max-props-per-line */
import type { TNavItem, TSocials } from '@/types';
import { GithubOne, InstagramOne, Twitter, EmailSuccessfully, Telegram } from '@icon-park/react';

/**
 * Navigation constants
 */
export const NAVIGATION: TNavItem[] = [
    {
        slug: 'blog',
        href: '/blog',
    },
    {
        slug: 'projects',
        href: '/projects',
    },
    {
        slug: 'resume',
        href: '/resume',
    },
    {
        slug: 'contact',
        href: '/contact',
    },
];

/**
 * Social constants
 */
export const SOCIAL: TSocials = {
    github: {
        href: 'https://github.com/hamidyfine',
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
