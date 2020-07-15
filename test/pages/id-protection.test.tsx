import React from 'react'
import { render } from '../testUtils'
import { IdProtection } from '../../pages/id-protection'

describe('Id Protection page', () => {
  xit('matches snapshot', () => {
    const { asFragment } = render(<IdProtection />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
