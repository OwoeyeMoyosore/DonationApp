import React from 'react'
import styles from "./button.module.scss"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children?: React.ReactNode
    width?: string
}

const CustomButton: React.FC<ButtonProps> = ({children, width, ...rest}) => {
  return (
    <button {...rest} className={styles.button} style={{width: `${width}`}}>{children}</button>
  )
}

export default CustomButton