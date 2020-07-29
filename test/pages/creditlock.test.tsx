import React from 'react'

import CreditLock from '@/pages/creditlock'

import { render, withTestRouter } from '../testUtils'

describe('Credit Lock page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(withTestRouter(<CreditLock mock={true} />), {})
    expect(asFragment()).toMatchSnapshot()
  })
})
