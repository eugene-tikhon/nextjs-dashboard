import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'
//import { toMatchImageSnapshot } from 'jest-image-snapshot'

//expect.extend({ toMatchImageSnapshot });

describe('Page', () => {
  it('renders a heading logo', () => {
    render(<Page />)
 
    const headingLogo = screen.getByText('Acme')
 
    expect(headingLogo).toBeInTheDocument()
  });

  it('renders homepage unchanged', () => {
    const { container } = render(<Page />)
    expect(container).toMatchSnapshot()
  });
});