'use client'
import React, { ChangeEvent, useCallback, useState } from 'react'
import styles from './Contact.module.css'
import { Input } from '@/shared/ui/Input/Input'
import { Textarea } from '@/shared/ui/Textarea/Textarea'
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox'
import { Button } from '@/shared/ui/Button/Button'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'

export const Contact = () => {
  const [name, setName] = useState('')
  const [tel, setTel] = useState('')
  const [telegram, setTelegram] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')
  const [policy, setPolicy] = useState(false)

  const setNameChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }, [])

  const setTelChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setTel(event.target.value)
  }, [])

  const setTelegramChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setTelegram(event.target.value)
    },
    []
  )

  const setEmailChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }, [])

  const setTextChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      setText(event.target.value)
    },
    []
  )

  const changePolicy = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setPolicy((prev) => !prev)
  }, [])

  return (
    <section className={styles.contact}>
      <motion.div
        className={`${styles.contact__img_wrapper} ${styles.contact__img_wrapper_desctop}`}
        initial={{ y: 220 }} // Начальное состояние: прозрачность 0 и смещение на 100px вниз
        whileInView={{ y: 0 }}
        transition={{
          duration: 0.5,
        }}
      >
        <Image
          src="/cat_black.svg"
          width="261"
          height="421"
          alt="#"
          className={styles.contact__img_desctop}
        />
      </motion.div>
      <motion.div
        className={`${styles.contact__img_wrapper} ${styles.contact__img_wrapper_medium}`}
        initial={{ y: 194 }}
        whileInView={{ y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 50,
          damping: 15,
          duration: 1,
        }}
      >
        <Image
          src="/cat_black.svg"
          width="174"
          height="280"
          alt="#"
          className={styles.contact__img}
        />
      </motion.div>
      <motion.div
        className={`${styles.contact__img_wrapper} ${styles.contact__img_wrapper_small}`}
        initial={{ y: 150 }}
        whileInView={{ y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 50,
          damping: 15,
          duration: 1,
        }}
      >
        <Image
          src="/cat_black.svg"
          width="141"
          height="226"
          alt="#"
          className={styles.contact__img}
        />
      </motion.div>
      <div className="wrapper">
        <h3 className={styles.contact__title}>Получите консультацию!</h3>
        <div className={styles.contact__subtitle}>
          Оставьте свой номер телефона и мы свяжемся с вами!
        </div>
        <div className={styles.contact__wrapper}>
          <div className={styles.contact__box}>
            <Input
              value={name}
              setValue={setNameChange}
              type="text"
              placeholder="Ваше имя"
            />
            <Input
              value={tel}
              setValue={setTelChange}
              type="tel"
              placeholder="+7 (_ _ _) _ _ _    _ _  _ _"
            />
          </div>
          <div className={styles.contact__box}>
            <Input
              value={telegram}
              setValue={setTelegramChange}
              type="text"
              placeholder="Telegram"
            />
            <Input
              value={email}
              setValue={setEmailChange}
              type="email"
              placeholder="Почта"
            />
          </div>
          <div className={styles.contact__box}>
            <Textarea
              placeholder="Ваш вопрос"
              value={text}
              setValue={setTextChange}
            />
          </div>
          <div
            className={`${styles.contact__box} ${styles.contact__box_policy}`}
          >
            <Button className={styles.contact__btn}>
              Получить консультацию
            </Button>
            <div className={styles.contact__policy}>
              <Checkbox checked={policy} changeChecked={changePolicy} />
              <Link href={'#'} className={styles.contact__link}>
                Политика конфиденциальности
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
