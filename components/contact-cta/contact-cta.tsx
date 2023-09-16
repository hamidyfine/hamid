import { SOCIAL } from '@/utils/constants';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import SocialLink from '../social-link';
import { DownloadOne } from '@icon-park/react';
import { NAVIGATION } from '@/utils/constants';

const ContactCTA = () => {
    const { t } = useTranslation(['common', 'button']);
    const socialKeys = Object.keys(SOCIAL);
    
    return (
        <div className="border-purple-600 border-4 p-10 rounded-md mx-4 md:mx-auto container w-fit">
            <h2 className="text-4xl font-bold mb-4">
                {t('contact.cta.title')}
            </h2>
            <p className="mb-6 leading-relaxed">
                {t('contact.cta.body')}
            </p>
            <div className="block md:flex items-center justify-between">
                <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0 flex-col md:flex-row gap-2">
                    <Link
                        className="flex items-center justify-center text-white py-2 px-4 bg-purple-600 hover:bg-purple-800 transition-all rounded-md w-full md:w-auto"
                        href="/Hamid_Yaftian_Resume.pdf"
                    >
                        <DownloadOne
                            theme="outline"
                            size="16"
                            fill="#fff"
                            className="mr-1"
                        />
                        {t('resume.download', { ns: 'button' })}
                    </Link>
                    <Link
                        className="text-white text-center py-2 px-4 bg-purple-600 hover:bg-purple-800 transition-all rounded-md w-full md:w-auto"
                        href={NAVIGATION.contact.href}
                    >
                        {t('contact', { ns: 'button' })}
                    </Link>
                </div>

                <div className="flex items-center justify-center md:justify-start">
                    {socialKeys.map((key) => {
                        if (SOCIAL[key].href) {
                            return (
                                <SocialLink
                                    item={SOCIAL[key]}
                                    key={key}
                                    slug={key}
                                    className="mr-2 text-white bg-purple-600 hover:bg-purple-800"
                                />
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        </div>
    );
};

export default ContactCTA;
