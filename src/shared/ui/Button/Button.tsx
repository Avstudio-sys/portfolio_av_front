'use client'
import React from 'react'
import styles from './Button.module.css'

type propsButtonT = {
  children: React.ReactNode
  className?: string
}

export const Button: React.FC<propsButtonT> = ({ children, className }) => {
  return <button className={`${styles.button} ${className}`}>{children}</button>
}
