import Image from 'next/image'
import styles from './page.module.css'
import { Button } from '@/shared/ui/Button/Button'

export default function Home() {
  return (
    <>
      <section className={styles.promo}>
        <div className={`wrapper ${styles.promo__wrapper}`}>
          <div className={styles.promo__box}>
            <div className={styles.promo__title}>AV</div>
            <div className={styles.promo__subtitle}>studio</div>
            <div className={styles.promo__slogan}>
              Качество, которое работает на вас
            </div>
            <div className={styles.promo__subslogan}>
              Команда профессионалов, специализирующаяся на создании сайтов,
              веб-дизайне, SEO-продвижении и SMM
            </div>
            <Button className={styles.promo__btn}>Получить консультацию</Button>
          </div>
          <Image
            src={'/promo/cat_promo.png'}
            alt="#"
            width="112"
            height="178"
            className={styles.promo_img}
          />
        </div>
      </section>
      <section className={styles.about}>
        <div className={`wrapper`}>
          <div className={styles.about__wrapper}>
            <Image
              className={styles.about__img}
              src={'/cat_butterfly.svg'}
              width={361}
              height={335}
              alt="#"
            />
            <Image
              className={styles.about__corner}
              src={'/corner.svg'}
              width={50}
              height={50}
              alt="#"
            />
            <div className={styles.about__box}>
              <div className={styles.about__title}>О нас</div>
              <div className={styles.about__desc}>
                <span className={styles.about__desc_desk}>
                  Мы — команда профессионалов, готовых помочь вашему бизнесу
                  расти в digital-пространстве. Наша специализация — создание
                  современных сайтов, SEO и реклама. Мы предоставляем
                  комплексные решения "под ключ", что позволяет вам
                  сосредоточиться на своих делах, пока мы занимаемся
                  продвижением с первого дня. Быстро, качественно и
                  индивидуально — это наш подход к каждому проекту.
                </span>
                <span className={styles.about__desc_mobl}>
                  Мы — команда профессионалов, готовых помочь вашему бизнесу
                  расти в digital-пространстве. Наша специализация — создание
                  современных сайтов, SEO и реклама
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.works}>
        <div className="wrapper">
          <h2 className={styles.works__title}>Наши работы</h2>
          Нет работ
        </div>
      </section>
    </>
  )
}
