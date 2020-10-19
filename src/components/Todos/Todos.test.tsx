import React from "react";
import Todos from "./Todos";
import sampleData from "./sampleData.json";
import { render } from "@testing-library/react";

const setUp = () => {
    const { getAllByRole, getByRole } = render(<Todos data={sampleData} />);

    const table = getByRole('table');
    const rows = getAllByRole('row');

    return {
        table,
        rows
    }
}

describe('Todos', () => {
    it('should render the table correctly', () => {
        const { table } = setUp();

        expect(table).toBeInTheDocument();
    });

    it('should render todos with the correct number of rows', () => {
        const { rows } = setUp();

        expect(rows).toHaveLength(5);
    })
})