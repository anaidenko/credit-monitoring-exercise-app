import React from 'react'

import IdProtection from '@/pages/id-protection'

import { render, withTestRouter } from '../testUtils'

describe('Id Protection page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(withTestRouter(<IdProtection mock={true} />, {}))
    expect(asFragment()).toMatchSnapshot()
  })
})
