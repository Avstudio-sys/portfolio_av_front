'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/shared/ui/Button/Button'
import { VKIcon } from '@/shared/ui/IconsComponent/VKIcon'
import { TelegramIcon } from '@/shared/ui/IconsComponent/TelegramIcon'
import { BurgerMenuIcon } from '@/shared/ui/IconsComponent/BurgerMenuIcon'
import styles from './Header.module.css'
import { motion, AnimatePresence } from 'motion/react'

export const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className="wrapper">
        <div className={styles.header__wrapper}>
          <div className={styles.header__logo_mobile}>
            <Image src="/logo.svg" alt="A&V" width={55} height={44} />
          </div>
          <button className={styles.burger_menu} onClick={() => setOpen(true)}>
            <BurgerMenuIcon />
          </button>
          <AnimatePresence>
            {open ? (
              <motion.div
                key="menu-backdrop"
                className={styles.bg_menu}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setOpen(false)}
              ></motion.div>
            ) : (
              ''
            )}
          </AnimatePresence>
          <AnimatePresence>
            {open ? (
              <motion.div
                key="menu"
                className={styles.menu}
                initial={{ x: '100%' }} // Начальное положение (за пределами экрана)
                animate={{ x: open ? 0 : '100%' }} // Анимация: если open=true, то x=0 (появляется)
                exit={{ x: '100%' }}
                transition={{ ease: 'easeInOut', duration: 0.3 }} // Плавная анимация
              >
                <div className={styles.header__top}>
                  <nav className={styles.main_menu}>
                    <Link href={''} className={styles.menu__elenent}>
                      О нас
                    </Link>
                    <Link href={''} className={styles.menu__elenent}>
                      Наши работы
                    </Link>
                    <Link href={''} className={styles.menu__elenent}>
                      Услуги
                    </Link>
                    <div className={styles.menu_mobile}>
                      <Link href={''} className={styles.menu__elenent}>
                        Дизайн
                      </Link>
                      <Link href={''} className={styles.menu__elenent}>
                        Сайты
                      </Link>
                      <Link href={''} className={styles.menu__elenent}>
                        SEO
                      </Link>
                      <Link href={''} className={styles.menu__elenent}>
                        SMM
                      </Link>
                    </div>
                    <Link href={''} className={styles.menu__elenent}>
                      Отзывы
                    </Link>
                  </nav>
                  <div className={styles.header__logo}>
                    <Image src="/logo.svg" alt="A&V" width={99} height={80} />
                  </div>
                  <nav className={styles.sub_menu}>
                    <div>
                      <Link href={''} className={styles.menu__elenent_sn}>
                        <VKIcon height={14} />
                      </Link>
                      <Link href={''} className={styles.menu__elenent_sn}>
                        <TelegramIcon height={18} />
                      </Link>
                    </div>

                    <Button className={styles.header__btn}>Связаться</Button>
                  </nav>
                </div>
              </motion.div>
            ) : (
              ''
            )}
          </AnimatePresence>
          <div className={styles.desktop_menu}>
            <div className={styles.header__top}>
              <nav className={styles.main_menu}>
                <Link href={''} className={styles.menu__elenent}>
                  О нас
                </Link>
                <Link href={''} className={styles.menu__elenent}>
                  Наши работы
                </Link>
                <Link href={''} className={styles.menu__elenent}>
                  Услуги
                </Link>
                <div className={styles.menu_mobile}>
                  <Link href={''} className={styles.menu__elenent}>
                    Дизайн
                  </Link>
                  <Link href={''} className={styles.menu__elenent}>
                    Сайты
                  </Link>
                  <Link href={''} className={styles.menu__elenent}>
                    SEO
                  </Link>
                  <Link href={''} className={styles.menu__elenent}>
                    SMM
                  </Link>
                </div>
                <Link href={''} className={styles.menu__elenent}>
                  Отзывы
                </Link>
              </nav>
              <div className={styles.header__logo}>
                <Image src="/logo.svg" alt="A&V" width={99} height={80} />
              </div>
              <nav className={styles.sub_menu}>
                <div>
                  <Link href={''} className={styles.menu__elenent_sn}>
                    <VKIcon height={14} />
                  </Link>
                  <Link href={''} className={styles.menu__elenent_sn}>
                    <TelegramIcon height={18} />
                  </Link>
                </div>

                <Button className={styles.header__btn}>Связаться</Button>
              </nav>
            </div>
            <div className={styles.header__bottom}>
              <nav className={styles.menu_service}>
                <Link href={''} className={styles.menu__elenent}>
                  Дизайн
                </Link>
                <Link href={''} className={styles.menu__elenent}>
                  Программирование
                </Link>
                <Link href={''} className={styles.menu__elenent}>
                  SEO
                </Link>
                <Link href={''} className={styles.menu__elenent}>
                  SEO
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
