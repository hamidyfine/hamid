import { Container, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

const AppFooter = () => {
    const { t } = useTranslation();

    return (
        <footer className="app-footer fixed bottom-0 left-0 right-0 p-4 bg-gray-100">
            <Container centerContent>
                <Text fontSize='xs'>
                    {t('footer.text')}
                </Text>
            </Container>
        </footer>
    );
};

export default AppFooter;
