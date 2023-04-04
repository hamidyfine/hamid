import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { NAVIGATION } from '@/utils/constants';
import Container from '../container';
import Image from 'next/image';
// import DarkModeSwitcher from '../dark-mode-switcher';
// import LocaleSwitcher from '../locale-switcher';

const AppHeader = () => {
    const { t } = useTranslation(['button']);
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

    return (
        <header className="p-8">
            <Container>
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <Image
                            alt="Hamid Website"
                            src="/h-logo.png"
                            className="rounded-full"
                            width={50}
                            height={50}
                        />
                    </Link>

                    <nav>
                        <ul className="flex items-center justify-end">
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
