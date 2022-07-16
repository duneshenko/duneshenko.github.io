import React, { createContext, useCallback, useContext, useEffect, useState } from "react"

import { keyToCmp } from "../../utils"

const AutoplayerContext = createContext({
  currentElement: null,
  watchElement: (element) => {},
  unwatchElement: (element) => {},
})

export const Autoplayer = ({ children }) => {
  const [watchedElements, setWatchedElements] = useState([])
  const [currentElement, setCurrentElement] = useState(null)

  const watchElement = useCallback((element) => {
    setWatchedElements((watchedElements) => [...watchedElements, element])
  }, [setWatchedElements])

  const unwatchElement = useCallback((element) => {
    setWatchedElements((watchedElements) => watchedElements.filter((item) => item !== element))
  }, [setWatchedElements])

  useEffect(() => {
    const onScroll = () => {
      setCurrentElement(
        [...watchedElements]
          .sort(keyToCmp((element) => element.getBoundingClientRect().top, true))
          .find((element) => {
            const rect = element.getBoundingClientRect()
            return rect.top < window.innerHeight / 2 && rect.bottom > 0
          })
      )
    }

    window.addEventListener("scroll", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [watchedElements, setCurrentElement])

  return (
    <AutoplayerContext.Provider value={{ currentElement, watchElement, unwatchElement }}>
      {children}
    </AutoplayerContext.Provider>
  )
}

export const useAutoplay = (element) => {
  const { currentElement, watchElement, unwatchElement } = useContext(AutoplayerContext)

  useEffect(() => {
    if (!element) return

    watchElement(element)

    return () => {
      unwatchElement(element)
    }
  }, [element])

  return element === currentElement
}

export default Autoplayer
