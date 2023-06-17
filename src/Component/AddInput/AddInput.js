import {
    Input,
    Button,
    InputRightElement,
    useToast,
    InputGroup,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { appContext } from '../../Context/AppContext';

export default function AddInput() {
    const { todo, setTodo, setTodoList } = useContext(appContext);
    const toast = useToast();
    const handleAddtodo = function (e) {
        e.preventDefault();
        if (todo.trim()) {
            setTodoList((previousTodos) => {
                return [
                    { id: Date.now(), name: todo, completed: false },
                    ...previousTodos,
                ];
            });
            setTodo('');
            toast({
                title: `Todo ${todo} was added to list`,
                status: 'warning',
                duration: 9000,
                isClosable: false,
                position: 'bottom-right',
            });
        } else {
            toast({
                title: 'Input cannot be empty',
                status: 'error',
                duration: 9000,
                isClosable: false,
                position: 'bottom-right',
            });
        }
    };

    return (
        <form onSubmit={handleAddtodo}>
            <InputGroup size="md">
                <Input
                    pr="4.5rem"
                    name="addTodo"
                    placeholder="Enter todo"
                    size="lg"
                    variant="filled"
                    value={todo}
                    onChange={(e) => {
                        setTodo(e.target.value);
                    }}
                />
                <InputRightElement width="4.5rem">
                    <Button size="sm" type="submit" colorScheme="orange">
                        Add Todo
                    </Button>
                </InputRightElement>
            </InputGroup>
        </form>
    );
}
