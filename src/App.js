import './App.css';
import { Container, Center, Box } from '@chakra-ui/react';
import AddInput from './Component/AddInput/AddInput';
import Todos from './Component/Todos/Todo';

import AppContext from './Context/AppContext';
function App() {
    return (
        <AppContext>
            <div className="App">
                <Box marginTop={10}>
                    <Center>
                        <Container maxW="767px" w="100%">
                            <Box background={'green.50'} padding={'2'}>
                                <AddInput />
                                <Todos />
                            </Box>
                        </Container>
                    </Center>
                </Box>
            </div>
        </AppContext>
    );
}

export default App;
