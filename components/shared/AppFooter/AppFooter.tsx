import { Container, Text } from '@chakra-ui/react';

const AppFooter = () => {
    return (
        <footer className="app-footer fixed bottom-0 left-0 right-0 p-4 bg-gray-100">
            <Container centerContent>
                <Text fontSize='xs'>
                    Designed by me with inspiration from other websites.
                </Text>
            </Container>
        </footer>
    );
};

export default AppFooter;
