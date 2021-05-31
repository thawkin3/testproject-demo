import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the heading', () => {
    render(<App />)
    const headingText = 'TestProject JavaScript OpenSDK Demo'
    expect(screen.getByText(headingText)).toBeInTheDocument()
  })
})
