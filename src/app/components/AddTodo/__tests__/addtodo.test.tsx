import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import AddItemForm from "../AddTodo"

const mockSetTodos = jest.fn()

describe('Add Todo', () => {
  describe('Render', () => {
    it('should render the input', () => {
        render(<AddItemForm setTodos={mockSetTodos} />)
        const input = screen.getByPlaceholderText('New Todo')
        expect(input).toBeInTheDocument()
    })

    it('should render the disabled button', () => {
        render(<AddItemForm setTodos={mockSetTodos} />)
        const button = screen.getByRole('button', { name: 'Submit' })
        expect(button).toBeDisabled()
    })
  })
  
  describe('Behavior', () => {
    it('should be able to type in the input', async () => {
        render(<AddItemForm setTodos={mockSetTodos} />)
        const input = screen.getByPlaceholderText('New Todo')
        await userEvent.type(input, "let's do homework")
        expect(input).toHaveValue("let's do homework")
    })

    it("should change the status button to enable when input have text", async () => {
        render(<AddItemForm setTodos={mockSetTodos} />)

        const input = screen.getByPlaceholderText('New Todo')
        await userEvent.type(input, "hello")

        const button = screen.getByRole('button', { name: 'Submit' })

        expect(button).toBeEnabled()
    })

    it('should clear the input when the submit button is clicked', async () => {
        render(<AddItemForm setTodos={mockSetTodos} />)

        const input = screen.getByPlaceholderText('New Todo')
        await userEvent.type(input, "let's do homework")

        const button = screen.getByRole('button', { name: 'Submit' })
        await userEvent.click(button)

        expect(input).not.toHaveValue()
    })

    it('should call the setTodos when the submit button is clicked', async () => {
        render(<AddItemForm setTodos={mockSetTodos} />)

        const input = screen.getByPlaceholderText('New Todo')
        await userEvent.type(input, "let's do homework")

        const button = screen.getByRole('button', { name: 'Submit' })
        await userEvent.click(button)

        expect(mockSetTodos).toHaveBeenCalled()
    })
  })
})