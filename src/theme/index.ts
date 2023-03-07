import {theme as chakraTheme} from '@chakra-ui/react'
import { foundations } from './foundations'
import { components } from './components'
import { styles } from './styles'

export const theme = {
    ...chakraTheme,
    ...foundations,
    components,
    styles,
    fonts:{
        heading: `'Zen Dots', sans-serif`,
        body: `'Zen Dots', sans-serif`,
    },
}