import React from 'react'
import styles from './Review.module.css'

type propsReviewT = {
  fullname: string
  func: string
  text: string
}

export const Review: React.FC<propsReviewT> = ({ fullname, func, text }) => {
  return (
    <div className={styles.review}>
      <div className={styles.review__fullname}>{fullname}</div>
      <div className={styles.review__func}>{func}</div>
      <div className={styles.review__text}>{text}</div>
    </div>
  )
}
