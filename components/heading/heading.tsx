import { ArrowRight } from '@icon-park/react';
import Link from 'next/link';

type TProps = {
    title: string;
    subtitle: string;
    more_button_text?: string;
    more_button_link?: string;
};

const Heading = ({ title, subtitle, more_button_text, more_button_link }: TProps) => {
    return (
        <div className="flex items-center justify-between mb-8">
            <div>
                <h3 className="font-bold text-2xl">
                    {title}
                </h3>
                <p className="text-gray-500 text-sm">
                    {subtitle}
                </p>
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
