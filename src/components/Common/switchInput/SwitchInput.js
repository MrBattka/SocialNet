import React, { useState, useEffect, useLayoutEffect } from 'react'
import { useTheme } from '../useTheme/useTheme'
import './SwitchInput.css'

const SwitchInput = ({ isSelected, selectedDarkTheme }) => {
  const { theme, setTheme } = useTheme()

  const handleClick = () => {
    selectedDarkTheme(!isSelected)
  }
  useEffect(() => {
    if (isSelected) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  })
  console.log(isSelected);

  return (
    <div className='wrapperSwitchInput'>
      <fieldset>
        <input type="checkbox" id="switch" onClick={handleClick} defaultChecked={!!isSelected} />
        <label htmlFor="switch">Toggle</label>
      </fieldset>
    </div>
  )
}

export default SwitchInput