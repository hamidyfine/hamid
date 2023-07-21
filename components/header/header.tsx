import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { NAVIGATION } from '@/utils/constants';
import Container from '../container';
import { Close, HamburgerButton } from '@icon-park/react';
// import DarkModeSwitcher from '../dark-mode-switcher';
// import LocaleSwitcher from '../locale-switcher';

const AppHeader = () => {
    const { t } = useTranslation(['button']);
    const [is_menu_open, setIsMenuOpen] = useState(false);
    const router = useRouter();
    const navSlug = Object.keys(NAVIGATION);

    /**
     * Change the locale and direction of the page on locale change
     */
    useEffect(() => {
        let dir = router.locale == 'fa' ? 'rtl' : 'ltr';
        let lang = router.locale == 'fa' ? 'fa' : 'en';
        document.querySelector('html')!.setAttribute('dir', dir);
        document.querySelector('html')!.setAttribute('lang', lang);
    }, [router.locale]);

    useEffect(() => {
        const handleRouteChange = () => {
            setIsMenuOpen(false);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return (
        <header className="p-8">
            <Container>
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <h1 className="font-logo text-2xl transition-all hover:text-purple-500">
                            {'<Hamid />'}
                        </h1>
                    </Link>

                    <nav>
                        <button
                            className="flex md:hidden"
                            onClick={() => setIsMenuOpen(old => !old)}
                        >
                            <HamburgerButton
                                theme="outline"
                                size="36"
                            />
                        </button>

                        {is_menu_open && (
                            <div className="fixed top-0 bottom-0 left-0 right-0 bg-white z-10 flex items-center justify-center">
                                <button
                                    className="fixed top-10 right-14"
                                    onClick={() => setIsMenuOpen(old => !old)}
                                >
                                    <Close
                                        theme="outline"
                                        size="48"
                                    />
                                </button>
                                <ul className="">
                                    {navSlug.map((slug, index) => {
                                        return (
                                            <li
                                                className="block text-center my-3"
                                                key={index}
                                            >
                                                <Link
                                                    className="hover:bg-gray-200 py-2 px-4 rounded-md transition-all block text-2xl"
                                                    href={NAVIGATION[slug].href}
                                                >
                                                    {t(`nav.${NAVIGATION[slug].slug}`, { ns: 'button' })}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        )}

                        <ul className="hidden md:flex items-center justify-end">
                            {navSlug.map((slug, index) => {
                                return (
                                    <li
                                        className="ml-2"
                                        key={index}
                                    >
                                        <Link
                                            className="hover:bg-gray-200 py-2 px-4 rounded-md transition-all"
                                            href={NAVIGATION[slug].href}
                                        >
                                            {t(`nav.${NAVIGATION[slug].slug}`, { ns: 'button' })}
                                        </Link>
                                    </li>
                                );
                            })}
                            {/* <li className='ml-2'>
                                <LocaleSwitcher />
                            </li> */}
                            {/* <li className="ml-2">
                                <DarkModeSwitcher />
                            </li> */}
                        </ul>
                    </nav>
                </div>
            </Container>
        </header>
    );
};

export default AppHeader;
