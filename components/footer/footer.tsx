import { useTranslation } from 'next-i18next';
import Container from '../container/container';

const AppFooter = () => {
    const { t } = useTranslation();

    return (
        <footer className="app-footer fixed bottom-0 left-0 right-0 p-4 bg-gray-100">
            <Container className="text-center">
                <p className="center">
                    {t('footer.text')}
                </p>
            </Container>
        </footer>
    );
};

export default AppFooter;
