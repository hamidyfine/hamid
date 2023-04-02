import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconButton, Menu, MenuItem, MenuList, MenuButton } from '@chakra-ui/react';
import { World } from '@icon-park/react';

export default function LocaleSwitcher() {
    const router = useRouter();
    const { locales, locale: activeLocale } = router;

    return (
        <Menu>
            <MenuButton
                as={IconButton}
                icon={<World />}
            >
                {/* {activeLocale === 'en' ? 'English' : activeLocale === 'fa' ? 'Persian' : null} */}
            </MenuButton>
            <MenuList>
                {locales?.map((locale) => {
                    const { pathname, query, asPath } = router;
                    return (
                        <Link
                            key={'locale-' + locale}
                            href={{ pathname, query }}
                            as={asPath}
                            locale={locale}
                        >
                            <MenuItem>
                                {locale === 'en' ? 'English' : locale === 'fa' ? 'Persian' : null}
                            </MenuItem>
                        </Link>
                    );
                })}
            </MenuList>
        </Menu>
    );
}
