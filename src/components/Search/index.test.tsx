import { act, fireEvent, render, screen } from '@testing-library/react'

import { Search } from '.'

describe('Search', () => {
  it('calls onChange with the input value after typing', async () => {
    const mockOnChange = jest.fn()
    render(<Search onChange={mockOnChange} placeholder="Test Placeholder" />)

    const input = screen.getByPlaceholderText('Test Placeholder')

    await act(async () => {
      fireEvent.change(input, { target: { value: 'test' } })
      await new Promise((resolve) => setTimeout(resolve, 1000))
    })

    expect(mockOnChange).toHaveBeenCalledWith('test')
  })

  it('calls onChange with empty value when clear icon is clicked', async () => {
    const mockOnChange = jest.fn()
    render(<Search onChange={mockOnChange} />)

    const input = screen.getByPlaceholderText('Search')

    await act(async () => {
      fireEvent.change(input, { target: { value: 'test' } })
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const clearIcon = screen.getByTestId('clear-icon')
      fireEvent.click(clearIcon)
      await new Promise((resolve) => setTimeout(resolve, 1000))
    })

    expect(mockOnChange).toHaveBeenCalledWith('')

  })
})
