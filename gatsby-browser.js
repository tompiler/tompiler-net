import React from "react"
import GlobalStateProvider from "./src/components/store/GlobalStateProvider"

export const wrapRootElement = ({ element }) => (
  <GlobalStateProvider>{element}</GlobalStateProvider>
)
