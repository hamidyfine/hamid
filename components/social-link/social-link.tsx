import { TSocialItem } from '@/types';
import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

type TProps = {
    slug: string;
    item: TSocialItem;
    className?: string;
    show_label?: boolean;
};

const SocialLink = ({ item, slug, className, show_label }: TProps) => {
    const { t } = useTranslation(['button']);

    return (
        <Link
            href={item.href}
            className={classNames('flex items-center justify-center w-10 h-10 transition-all rounded-md', className)}
        >
            {item.icon}
            {show_label && (
                <span className="ml-1">
                    {t(`social.${slug}`)}
                </span>
            )}
        </Link>
    );
};

export default SocialLink;
