import { useLayoutEffect, useState } from 'react'

const themeLocalStorageKey = 'darkMode'

export default function useDarkMode() {
  const [dark, setDark] = useState(false)

  function saveMode(dark: boolean) {
    window.localStorage.setItem(themeLocalStorageKey, dark ? 'dark' : 'light')
    setDark(dark)
  }

  const toggleDarkTheme = () => saveMode(dark ? false : true)

  useLayoutEffect(() => {
    const savedTheme = window.localStorage.getItem(themeLocalStorageKey)
    if (savedTheme) {
      setDark(savedTheme === 'dark')
    }
  }, [])

  return { dark, toggleDarkTheme }
}
