import React, { ChangeEvent } from 'react'
import styles from './Checkbox.module.css'
import { CheckedIcon } from '../IconsComponent/CheckedIcon'
import { motion, AnimatePresence } from 'motion/react'

interface CheckboxPropsT extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  labelPosition?: 'left' | 'right'
  checked: boolean
  changeChecked: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox: React.FC<CheckboxPropsT> = ({
  label,
  labelPosition = 'right',
  className = '',
  checked,
  changeChecked,
  ...props
}) => {
  return (
    <label className={`${styles.checkbox__wrapper} ${className}`}>
      <input
        type="checkbox"
        className={styles.checkbox}
        {...props}
        onChange={changeChecked}
      />
      <div className={styles.checkbox__custom}>
        <AnimatePresence>
          {checked ? (
            <motion.div
              className={styles.checkbox__checked}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            >
              <CheckedIcon height={18} />
            </motion.div>
          ) : (
            ''
          )}
        </AnimatePresence>
      </div>
      {label}
    </label>
  )
}
