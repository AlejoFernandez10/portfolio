'use client'

import React, {useState} from 'react'

import Context from './Context'

const ThemeContext = ({children}) => {

  const [theme, setTheme] = useState('dark')


  return (
    <Context.Provider value={[theme, setTheme]}>
      {children}
    </Context.Provider>
  )
}

export default ThemeContext