import React from "react"

import "./src/styles/global.css"
import "./src/styles/fonts.css"
import "./src/styles/animations.css"

import { FirstMountContextProvider } from "./src/contexts/FirstMountContext"

export const wrapRootElement = ({element}) => (
  <FirstMountContextProvider>
    {element}
  </FirstMountContextProvider>
)
