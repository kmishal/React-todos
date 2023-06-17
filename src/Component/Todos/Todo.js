import { OrderedList, Box, Text } from '@chakra-ui/react';
import { appContext } from '../../Context/AppContext';
import { useContext } from 'react';
import TodoItem from './TodoItem';

export default function Todos() {
    const { todoList } = useContext(appContext);
    return (
        <Box marginTop={10}>
            <OrderedList listStyleType={'none'} marginStart={0}>
                {todoList.length > 0 &&
                    todoList.map((todo) => {
                        return <TodoItem key={todo.id} todo={todo} />;
                    })}
                {!todoList.length && (
                    <Text
                        fontSize={20}
                        marginBottom={2}
                        textAlign={'center'}
                        fontWeight={500}
                    >
                        No Todos Added
                    </Text>
                )}
            </OrderedList>
        </Box>
    );
}
