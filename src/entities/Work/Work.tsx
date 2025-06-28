import React from 'react'
import styles from './Work.module.css'
import Image from 'next/image'

type propsWorkT = {
  imgUrl: string
  title: string
  desc: string
}

export const Work: React.FC<propsWorkT> = ({ imgUrl, title, desc }) => {
  return (
    <div className={styles.work}>
      <div className={styles.work__img}>
        <Image src={imgUrl} alt="#" width="504" height="336" />
      </div>
      <h4 className={styles.work__title}>{title}</h4>
      <div className={styles.work__desc}>{desc}</div>
    </div>
  )
}
