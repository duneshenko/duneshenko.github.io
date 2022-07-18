import React from "react"
import { Helmet } from "react-helmet"

import fontVictorMonoLight from "../../assets/fonts/VictorMono/VictorMono-Light.woff2"
import fontVictorMonoRegular from "../../assets/fonts/VictorMono/VictorMono-Regular.woff2"
import fontVictorMonoBold from "../../assets/fonts/VictorMono/VictorMono-Bold.woff2"

const FontPreload = () => {
  return (
    <Helmet>
      <link rel="preload" href={fontVictorMonoLight} as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href={fontVictorMonoRegular} as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href={fontVictorMonoBold} as="font" type="font/woff2" crossOrigin="anonymous" />
    </Helmet>
  )
}

export default FontPreload
