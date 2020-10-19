import useSWR from "swr";

const baseUrl = "https://jsonplaceholder.typicode.com";
const getData = (url: string) => {
    return fetch(url).then((response) => response.json());
};

export const useTodos = (userId: number) => {
    const allTodos = baseUrl + "/todos?_expand=user";
    const todosByUserId = baseUrl + "/todos?_expand=user&userId=" + userId;

    const url = !!userId ? todosByUserId : allTodos;
    const { data, error } = useSWR(url, getData);

    return {
        data,
        loading: !error && !data,
        error
    };
};
