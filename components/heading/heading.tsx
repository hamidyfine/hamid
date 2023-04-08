import { ArrowRight } from '@icon-park/react';
import classNames from 'classnames';
import Link from 'next/link';

type TProps = {
    className?: string;
    has_default_mb?: boolean;
    is_large?: boolean;
    is_small?: boolean;
    more_button_link?: string;
    more_button_text?: string;
    subtitle?: string;
    title: string;
};

const Heading = ({ title, subtitle, more_button_text, more_button_link, is_large, is_small, className, has_default_mb = true }: TProps) => {
    return (
        <div className={classNames('flex items-center justify-between', className, { 'mb-8': has_default_mb })}>
            <div>
                <h3 className={classNames('font-medium', { 'text-6xl py-14': is_large, 'text-2xl': is_small, 'text-4xl': !is_large && !is_small })}>
                    {title}
                </h3>
                {subtitle && (
                    <p className="text-gray-500 text-sm">
                        {subtitle}
                    </p>
                )}
            </div>

            {more_button_text && more_button_link && (
                <div>
                    <Link
                        className="flex items-center justify-end rounded-md text-sm  py-1 px-2 text-purple-600 transition-all hover:text-white hover:bg-purple-600"
                        href={more_button_link}
                    >
                        {more_button_text}
                        <ArrowRight
                            className="ml-1 relative top-px"
                            theme="outline"
                        />
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Heading;
