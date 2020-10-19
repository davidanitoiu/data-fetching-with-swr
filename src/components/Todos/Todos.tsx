import React from "react";
import DataTable from "react-data-table-component";

interface User {
    id: number;
    name: string;
    username: string;
}

interface Todo {
    id: number,
    userId: number,
    title: string;
    completed: boolean;
    user: User;
}


interface Todos {
    data: Todo[]
};

function Todos({ data = [] }: Todos) {
    const columns = [
        {
            name: "Completed",
            selector: "completed",
            sortable: true,
            cell: (row: Todo) => <input type="checkbox" readOnly checked={row.completed} />
        },
        {
            name: "Title",
            selector: "title",
            sortable: true
        },
        {
            name: "Name",
            selector: "user.name",
            sortable: true
        },
        {
            name: "User ID",
            selector: "user.id",
            sortable: true
        }
    ];

    return <DataTable columns={columns} data={data} pagination dense />;
}

export default Todos;
