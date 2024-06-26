import { createContext, useState, useEffect } from 'react'

type ThemeName = 'light' | 'dark' | string
type ThemeContextType = {
    theme: ThemeName
    setTheme: (name: ThemeName) => void
}

const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('color-theme')
        if (typeof storedPrefs !== null) {
            return storedPrefs
        }

        const userMedia = window.matchMedia('(prefers-color-scheme:dark)')
        if (userMedia.matches) {
            return 'dark'
        }
    }
    return 'light'
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)

export const ThemeProvider = ({ initialTheme, children }: any) => {
    const [theme, setTheme] = useState<string>(getInitialTheme() ?? 'dark')


    const rawSetTheme = (theme: string) => {
        const root = window.document.documentElement
        const isDark = theme === 'dark'

        root.classList.remove(isDark ? 'light' : 'dark')
        root.classList.add(theme)

        localStorage.setItem('color-theme', theme)
    }

    if (initialTheme) {
        rawSetTheme(initialTheme)
    }

    useEffect(() => {
        rawSetTheme(theme ?? 'dark')
    }, [theme])

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}