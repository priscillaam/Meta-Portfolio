import { extendTheme } from '@chakra-ui/react'
import "@fontsource/martel-sans"

const theme = extendTheme({
  fonts: {
    heading: `"Martel Sans", sans-serif`,
    body: `"Martel Sans", sans-serif`,
  },
})

export default theme;