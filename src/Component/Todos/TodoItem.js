import { Box, Flex, ListItem, Text } from '@chakra-ui/react';

import { useContext } from 'react';
import { appContext } from '../../Context/AppContext';
import { IconButton, useToast } from '@chakra-ui/react';
import { CheckIcon, DeleteIcon, CalendarIcon } from '@chakra-ui/icons';
export default function TodoItem({ todo }) {
    const { id, name } = todo;
    const toast = useToast();
    const { setTodoList } = useContext(appContext);
    const deleteTodo = () => {
        setTodoList((previousTodo) => {
            return previousTodo.filter((todo) => todo.id !== id);
        });
        toast({
            title: `Todo '${todo.name}' Deleted !`,
            status: 'info',
            duration: 9000,
            isClosable: false,
            position: 'bottom-right',
        });
    };

    const completedTodo = (e) => {
        setTodoList((previousTodo) => {
            previousTodo.forEach((todo) => {
                if (todo.id === id && todo.completed !== true) {
                    todo.completed = true;
                }
            });
            return [...previousTodo];
        });

        toast({
            title: `Todo '${todo.name}' Completed !`,
            status: 'success',
            duration: 9000,
            isClosable: false,
            position: 'bottom-right',
        });
    };

    return (
        <Box
            background={'gray.100'}
            padding={4}
            marginBottom={5}
            borderRadius={5}
        >
            <ListItem
                id={id}
                textTransform={'capitalize'}
                textDecor={todo.completed ? 'line-through' : 'none'}
            >
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                    <Text fontWeight={500} as={todo.completed ? 'del' : ''}>
                        <CalendarIcon
                            background={'orange.400'}
                            marginRight={2}
                        />{' '}
                        {name}
                    </Text>
                    <Box marginLeft={4}>
                        {!todo.completed && (
                            <IconButton
                                background={'green.400'}
                                color={'white'}
                                aria-label="Completed todo"
                                size={'xs'}
                                onClick={completedTodo}
                                icon={<CheckIcon />}
                                marginLeft={5}
                            />
                        )}
                        <IconButton
                            background={'red.400'}
                            color={'white'}
                            aria-label="Delete todo"
                            size={'xs'}
                            onClick={deleteTodo}
                            icon={<DeleteIcon />}
                            marginLeft={5}
                        />
                    </Box>
                </Flex>
            </ListItem>
        </Box>
    );
}
