import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { VKIcon } from '@/shared/ui/IconsComponent/VKIcon'
import { TelegramIcon } from '@/shared/ui/IconsComponent/TelegramIcon'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="wrapper">
        <div className={styles.footer__wrapper}>
          <div className={styles.footer__logo}>
            <Image src={'/logo.svg'} width="226" height="182" alt="AV" />
          </div>
          <div className={styles.footer__box}>
            <nav className={styles.footer__menu}>
              <div>
                <Link href={''} className={styles.footer__menu_element}>
                  Контакты
                </Link>
                <Link href={''} className={styles.footer__menu_element_mail}>
                  avstudioavav@gmail.com
                </Link>
                <div className={styles.footer__menu_sn}>
                  <Link href={''} className={styles.footer__menu_element_sn}>
                    <VKIcon height={14} />
                  </Link>
                  <Link href={''} className={styles.footer__menu_element_sn}>
                    <TelegramIcon height={14} />
                  </Link>
                </div>
              </div>
              <div>
                <Link href={''} className={styles.footer__menu_element}>
                  О нас
                </Link>
              </div>
              <div>
                <Link href={''} className={styles.footer__menu_element}>
                  Наши работы
                </Link>
              </div>
              <div>
                <Link href={''} className={styles.footer__menu_element}>
                  Услуги
                </Link>
                <div className={styles.footer__menu_element_services}>
                  <Link
                    href={''}
                    className={styles.footer__menu_element_service}
                  >
                    Дизайн
                  </Link>
                  <Link
                    href={''}
                    className={styles.footer__menu_element_service}
                  >
                    Сайты
                  </Link>
                  <Link
                    href={''}
                    className={styles.footer__menu_element_service}
                  >
                    SEO
                  </Link>
                  <Link
                    href={''}
                    className={styles.footer__menu_element_service}
                  >
                    SMM
                  </Link>
                </div>
              </div>
              <div>
                <Link href={''} className={styles.footer__menu_element}>
                  Отзывы
                </Link>
              </div>
            </nav>
            <div className={styles.footer__botton}>
              <Link href={''} className={styles.footer__menu_element_policy}>
                Политика конфиденциальности
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
