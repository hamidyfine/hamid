import { Container } from '@chakra-ui/react';

const AppContainer = ({ children }: React.PropsWithChildren<{}>) => {
    return (
        <Container maxW='4xl'>
            {children}
        </Container>
    );
};

export default AppContainer;
