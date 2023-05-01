import React from 'react'
import { HashLoader } from 'react-spinners'

export const HashSpinner = ({size, color}) => {
  return (
    <HashLoader
        color={color}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  )
}
