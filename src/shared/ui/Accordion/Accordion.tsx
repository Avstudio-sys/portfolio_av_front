'use client'
import React, { useState } from 'react'
import styles from './Accordion.module.css'
import { ArrowIcon } from '../IconsComponent/ArrowIcon'
import { motion, AnimatePresence } from 'framer-motion'

type propsAccordionT = {
  title: string
  children: React.ReactNode
}

export const Accordion: React.FC<propsAccordionT> = ({ title, children }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className={styles.accordion}>
      <button
        className={`${styles.accordion__title} ${
          open ? styles.accordion__open : ''
        }`}
        onClick={() => setOpen((prev) => !prev)}
      >
        {title}
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowIcon />
        </motion.div>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className={styles.accordion__content}
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div style={{ paddingBottom: 32 }}>{children}</div>
          </motion.div>
        ) : (
          ''
        )}
      </AnimatePresence>
    </div>
  )
}
