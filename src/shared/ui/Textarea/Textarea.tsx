import React, { ChangeEvent } from 'react'
import styles from './Textarea.module.css'
import { div } from 'motion/react-client'

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Запретить изменение размера */
  noResize?: boolean
  /** Количество видимых строк (аналог rows) */
  lineCount?: number
  className?: string
  value: string
  setValue: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

export const Textarea: React.FC<TextareaProps> = ({
  noResize = true,
  lineCount = 3,
  style,
  rows, // rows из стандартных пропсов
  className,
  value,
  setValue,
  ...rest
}) => {
  const textareaStyle: React.CSSProperties = {
    ...style,
  }

  return (
    <div className={styles.textarea__wrapper}>
      <textarea
        rows={rows || lineCount}
        style={textareaStyle}
        value={value}
        onChange={setValue}
        {...rest}
        className={`${styles.textarea} ${className ? className : ''}`}
      />
    </div>
  )
}
