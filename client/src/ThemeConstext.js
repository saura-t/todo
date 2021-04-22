import React from 'react'

export const themes = {
    dark: {
        color: 'white',
        background: 'dark'
    },
    light: {
        color: 'black',
        background: 'white'
    }
}

const ThemeConstext = React.createContext(themes.dark)

export default ThemeConstext
