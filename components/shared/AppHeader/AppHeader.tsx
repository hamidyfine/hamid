import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container, Avatar, Button } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import DarkModeSwitcher from '@/components/shared/DarkModeSwitcher';
// import LocaleSwitcher from '@/components/shared/LocalSwitcher';

type TNavItem = {
    slug: string;
    href: string;
};

const AppHeader = () => {
    const { t } = useTranslation(['button']);
    const router = useRouter();

    /**
     * Change the locale and direction of the page on locale change
     */
    useEffect(() => {
        let dir = router.locale == 'fa' ? 'rtl' : 'ltr';
        let lang = router.locale == 'fa' ? 'fa' : 'en';
        document.querySelector('html')!.setAttribute('dir', dir);
        document.querySelector('html')!.setAttribute('lang', lang);
    }, [router.locale]);

    const navItems: TNavItem[] = [
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

    return (
        <header className='p-8'>
            <Container maxW='4xl'>
                <div className='flex items-center justify-between'>
                    <Link href='/'>
                        <Avatar
                            name='Hamid Website'
                            src='/h-logo.png'
                            size='md'
                        />
                    </Link>

                    <nav>
                        <ul className='flex items-center justify-end'>
                            {navItems.map((item, index) => {
                                return (
                                    <li
                                        className='ml-2'
                                        key={index}
                                    >
                                        <Link href={item.href}>
                                            <Button variant='ghost'>
                                                {t(`nav.${item.slug}`, { ns: 'button' })}
                                            </Button>
                                        </Link>
                                    </li>
                                );
                            })}
                            {/* <li className='ml-2'>
                                <LocaleSwitcher />
                            </li> */}
                            <li className='ml-2'>
                                <DarkModeSwitcher />
                            </li>
                        </ul>
                    </nav>
                </div>
            </Container>
        </header>
    );
};

export default AppHeader;
