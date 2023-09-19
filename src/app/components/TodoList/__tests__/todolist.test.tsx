import { render, screen } from "@testing-library/react";
import TodoList from "../TodoList";
import '@testing-library/jest-dom';

const mockTodo = [
    {
        "userId": 1,
        "title": "Wave hello! 👋",
        "completed": false,
        "id": 1
      },
      {
        "userId": 1,
        "title": "Get Coffee ☕☕☕",
        "completed": false,
        "id": 2
      },
]

const mockSetTodos = jest.fn()

describe("Todo List", () => { 
    it('should render "No Todos Available" when the todo array is empty', () => {
        render(<TodoList todos={[]} setTodos={mockSetTodos}/>)

        const message = screen.getByText(/No Todos Available/)

        expect(message).toBeInTheDocument()
    })

    it('should have 2 items in todo list', () => {
        render(<TodoList todos={mockTodo} setTodos={mockSetTodos}/>)

        const items = screen.getAllByRole('article')
        
        expect(items).toHaveLength(2);
    })

    it('should have the todo item "Get Coffee ☕☕☕" at first list after sorted', () =>{
        render(<TodoList todos={mockTodo} setTodos={mockSetTodos}/>)

        const items = screen.getAllByTestId("todo-item")[0]

        expect(items).toHaveTextContent('Get Coffee ☕☕☕')
    })
 })