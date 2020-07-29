import { ReactElement } from 'react'

import { render } from '@testing-library/react'
import { RouterContext } from 'next/dist/next-server/lib/router-context'
import { NextRouter } from 'next/router'

// import { ThemeProvider } from "my-ui-lib"
// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"

const Providers = ({ children }) => {
  return children
  // return (
  //   <ThemeProvider theme="light">
  //     <TranslationProvider messages={defaultStrings}>
  //       {children}
  //     </TranslationProvider>
  //   </ThemeProvider>
  // )
}

const customRender = (ui, options = {}) => render(ui, { wrapper: Providers, ...options })

export function withTestRouter(tree: ReactElement, router: Partial<NextRouter> = {}) {
  const {
    route = '',
    pathname = '',
    query = {},
    basePath = '',
    asPath = '',
    push = async () => true,
    replace = async () => true,
    reload = () => null,
    back = () => null,
    prefetch = async () => undefined,
    beforePopState = () => null,
    isFallback = false,
    events = {
      on: () => null,
      off: () => null,
      emit: () => null,
    },
  } = router

  return (
    <RouterContext.Provider
      value={{
        route,
        pathname,
        query,
        basePath,
        asPath,
        push,
        replace,
        reload,
        back,
        prefetch,
        beforePopState,
        isFallback,
        events,
      }}
    >
      {tree}
    </RouterContext.Provider>
  )
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
