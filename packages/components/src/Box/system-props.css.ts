import { defineProperties, createRainbowSprinkles } from 'rainbow-sprinkles'
import { vars } from '../vars.css'
import { breakpoints } from '../theme'

export let rainbowSprinkles = createRainbowSprinkles(
  defineProperties({
    conditions: {
      _: {},
      small: {
        '@media': `screen and (min-width: ${breakpoints.small})`,
      },
      medium: {
        '@media': `screen and (min-width: ${breakpoints.medium})`,
      },
      large: {
        '@media': `screen and (min-width: ${breakpoints.large})`,
      },
      extraLarge: {
        '@media': `screen and (min-width: ${breakpoints.extraLarge})`,
      },
    },
    defaultCondition: '_',
    dynamicProperties: {
      margin: vars.space,
      marginTop: vars.space,
      marginRight: vars.space,
      marginBottom: vars.space,
      marginLeft: vars.space,
      padding: vars.space,
      paddingTop: vars.space,
      paddingRight: vars.space,
      paddingBottom: vars.space,
      paddingLeft: vars.space,
      color: vars.colors,
      backgroundColor: vars.colors,
      width: vars.sizes,
      maxWidth: vars.sizes,
      minWidth: vars.sizes,
      height: vars.sizes,
      maxHeight: vars.sizes,
      minHeight: vars.sizes,
      fontSize: vars.fontSizes,
      display: true,
      flexDirection: true,
      alignItems: true,
      justifyContent: true,
      flexGrow: true,
      flexShrink: true,
      gridTemplateColumns: true,
      gridTemplateRows: true,
      position: true,
      transform: true,
      top: true,
      left: true,
      right: true,
      bottom: true,
      borderRadius: vars.radii,
      border: true,
      textAlign: true,
      fontStyle: true,
      overflow: true,
      fontWeight: true
    },
    shorthands: {
      m: ['margin'],
      ml: ['marginLeft'],
      mr: ['marginRight'],
      mt: ['marginTop'],
      mb: ['marginBottom'],
      p: ['padding'],
      pl: ['paddingLeft'],
      pr: ['paddingRight'],
      pt: ['paddingTop'],
      pb: ['paddingBottom'],
      marginY: ['marginTop', 'marginBottom'],
      my: ['marginTop', 'marginBottom'],
      paddingy: ['paddingTop', 'paddingBottom'],
      py: ['paddingTop', 'paddingBottom'],
      marginX: ['marginLeft', 'marginRight'],
      mx: ['marginLeft', 'marginRight'],
      paddingX: ['paddingLeft', 'paddingRight'],
      px: ['paddingLeft', 'paddingRight'],
      bg: ['backgroundColor'],
    },
  }),
)

export type Sprinkles = Parameters<typeof rainbowSprinkles>[0]
