import { useTodos } from './utils';
import * as swr from 'swr';

describe('utils', () => {
    describe('useTodos', () => {
        let useSWR: jest.SpyInstance;
        beforeEach(() => {
            useSWR = jest.spyOn(swr,'default').mockReturnValue({
                data: [],
                error: false,
                revalidate: jest.fn(),
                mutate: jest.fn(),
                isValidating: false
            })
        })
        it('should call swr with allTodos URL for userId 0', () => {
            useTodos(0);

            expect(useSWR).toBeCalledWith("https://jsonplaceholder.typicode.com/todos?_expand=user",expect.anything());
        });
        it('should call swr with allTodos URL for userId 0', () => {
            useTodos(5);

            expect(useSWR).toHaveBeenNthCalledWith(1, "https://jsonplaceholder.typicode.com/todos?_expand=user",expect.anything());
            expect(useSWR).toHaveBeenNthCalledWith(2, "https://jsonplaceholder.typicode.com/todos?_expand=user&userId=5",expect.anything());
        });
    })
})