import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the heading', () => {
    render(<App />)
    expect(
      screen.getByText('TestProject JavaScript OpenSDK Demo')
    ).toBeInTheDocument()
  })
})
