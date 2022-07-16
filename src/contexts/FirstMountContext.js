import React, { createContext, useContext, useEffect, useState } from "react"

export const FirstMountContext = createContext({
  mountedComponents: {},
  setMountedComponents: (value) => {}
})

export const FirstMountContextProvider = ({ children }) => {
  const [mountedComponents, setMountedComponents] = useState({})

  return (
    <FirstMountContext.Provider value={{ mountedComponents, setMountedComponents }}>
      {children}
    </FirstMountContext.Provider>
  )
}

export const useFirstMount = (componentName) => {
  const { mountedComponents, setMountedComponents } = useContext(FirstMountContext)
  const [isFirstMount, ] = useState(!mountedComponents[componentName])

  useEffect(() => {
    setMountedComponents((mountedComponents) => ({...mountedComponents, [componentName]: true}))
  }, [componentName, setMountedComponents])

  return isFirstMount
}
