import React, { ChangeEvent } from 'react'
import styles from './Input.module.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?:
    | 'text'
    | 'password'
    | 'email'
    | 'number'
    | 'search'
    | 'tel'
    | 'url'
    | string
  placeholder?: string
  disabled?: boolean
  value: string
  setValue: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder = '',
  disabled = false,
  value,
  setValue,
  ...rest
}) => {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={setValue}
      {...rest}
    />
  )
}
