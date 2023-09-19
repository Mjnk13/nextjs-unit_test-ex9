import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoItem from "../TodoItem";
import '@testing-library/jest-dom';

const mockTodo = {
    "userId": 1,
    "title": "Wave hello! 👋",
    "completed": false,
    "id": 1
}

const mockSetTodos = jest.fn()

describe('Todo Item', () => { 
    describe('Render', () => {
        it('should render an article', () => {
            render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />)

            const article = screen.getByRole('article')

            expect(article).toBeInTheDocument()
        })

        it('should render a label', () => {
            render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />)

            const label = screen.getByTestId('todo-item')

            expect(label).toBeInTheDocument()
        })

        it('should render a checkbox', () => {
            render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />)

            const checkbox = screen.getByRole('checkbox')

            expect(checkbox).toBeInTheDocument()
        })

        it('should render a button', () => {
            render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />)

            const button = screen.getByRole('button')

            expect(button).toBeInTheDocument()
        })
        
        describe('behavior', () => {
            it('check box should call setTodos when be checked', async () => {
                render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />)

                const checkbox = screen.getByTestId('todo-item-checkbox')
                await userEvent.click(checkbox)
                
                expect(mockSetTodos).toBeCalled()
            })

            it('button should call setTodos when be clicked', async () => {
                render(<TodoItem todo={mockTodo} setTodos={mockSetTodos} />)

                const button = screen.getByRole('button')
                await userEvent.click(button)

                expect(mockSetTodos).toBeCalled()
            })
        })
    })
})