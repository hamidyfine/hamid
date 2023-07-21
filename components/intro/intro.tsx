import { useTranslation } from 'next-i18next';

const Intro = () => {
    const { t } = useTranslation('common');
    return (
        <div className="py-12 md:py-24">
            <p className="text-2xl mb-4 font-light">
                {t('home.intro.title')}
            </p>
            <h1 className="text-5xl font-extrabold mb-4">
                {t('home.intro.job-title-pre')} <span className="text-purple-600">{t('home.intro.job-title')}</span>
            </h1>
            <p className="text-2xl leading-relaxed font-light">
                {t('home.intro.body')}
            </p>
        </div>
    );
};

export default Intro;
