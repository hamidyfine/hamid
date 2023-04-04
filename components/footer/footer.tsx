import { useTranslation } from 'next-i18next';
import Container from '../container/container';

const AppFooter = () => {
    const { t } = useTranslation();

    return (
        <footer className="p-4 mt-8 bg-gray-100">
            <Container className="text-center">
                <p className="center text-xs text-gray-600">
                    {t('footer.text')}
                </p>
            </Container>
        </footer>
    );
};

export default AppFooter;
