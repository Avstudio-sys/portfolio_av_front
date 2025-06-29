import Image from 'next/image'
import styles from './page.module.css'
import { Button } from '@/shared/ui/Button/Button'
import { Work } from '@/entities/Work/Work'
import { Review } from '@/entities/Review/Review'
import { Accordion } from '@/shared/ui/Accordion/Accordion'
import Link from 'next/link'
import { Slider } from '@/shared/ui/Slider/Slider'

export default function Home() {
  const slides = [
    <Review
      key={1}
      fullname="Алексей Смирнов"
      func='Основатель "TechSavvy"'
      text=" Команда профессионалов! Быстро, качественно и в срок. Рекомендуем!"
    />,
    <Review
      key={2}
      fullname="Мария Петрова"
      func='Директор компании "ЭкоТревел"'
      text="Сотрудничество с этой студией стало настоящим открытием! Круто! Иделально! ***************"
    />,
    <Review
      key={3}
      fullname="Алексей Смирнов"
      func='Основатель "TechSavvy"'
      text="Команда профессионалов! Быстро, качественно и в срок. Рекомендуем!"
    />,

    <Review
      key={4}
      fullname="Елена Кузнецова"
      func='Владелица магазина "Fashion"'
      text="Ребята полностью поняли наши требования и создали идеальный сайт для нашего бизнеса"
    />,
    <Review
      key={5}
      fullname="Мария Петрова"
      func='Директор компании "ЭкоТревел"'
      text="Сотрудничество с этой студией стало настоящим открытием! Круто! Иделально! ***************"
    />,
    <Review
      key={6}
      fullname="Елена Кузнецова"
      func='Владелица магазина "Fashion"'
      text="Ребята полностью поняли наши требования и создали идеальный сайт для нашего бизнеса"
    />,
    <Review
      key={7}
      fullname="Мария Петрова"
      func='Директор компании "ЭкоТревел"'
      text="Сотрудничество с этой студией стало настоящим открытием! Круто! Иделально! ***************"
    />,
    <Review
      key={8}
      fullname="Алексей Смирнов"
      func='Основатель "TechSavvy"'
      text="Команда профессионалов! Быстро, качественно и в срок. Рекомендуем!"
    />,

    <Review
      key={9}
      fullname="Елена Кузнецова"
      func='Владелица магазина "Fashion"'
      text="Ребята полностью поняли наши требования и создали идеальный сайт для нашего бизнеса"
    />,
  ]
  return (
    <>
      <section className={styles.promo}>
        <div className={`wrapper ${styles.promo__wrapper}`}>
          <div className={styles.promo__box}>
            <h1 className={styles.promo__title}>AV</h1>
            <h1 className={styles.promo__subtitle}>studio</h1>
            <h2 className={styles.promo__slogan}>
              Качество, которое работает на вас
            </h2>
            <div className={styles.promo__subslogan}>
              Команда профессионалов, специализирующаяся на создании сайтов,
              веб-дизайне, SEO-продвижении и SMM
            </div>
            <Button className={styles.promo__btn}>Получить консультацию</Button>
          </div>
          <Image
            src={'/promo/cat_promo.svg'}
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
              <h2 className={styles.about__title}>О нас</h2>
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
          <h2 className={`title`}>Наши работы</h2>
          <div className={styles.works__wrapper}>
            {[1, 2, 3, 4].map((el) => {
              return (
                <Work
                  key={el}
                  imgUrl={`/works/${el}.jpg`}
                  title={`Работа ${el}`}
                  desc={`Описание работы ${el}`}
                />
              )
            })}
          </div>
        </div>
      </section>
      <section className={styles.services}>
        <div className="wrapper">
          <h2 className={`title`}>Услуги</h2>
          <Accordion title="Дизайн">
            <div>
              <Link href={''} className={styles.services__link}>
                Веб дизайн
              </Link>
            </div>
            <div>
              <Link href={''} className={styles.services__link}>
                Продуктовый дизайн
              </Link>
            </div>
            <div>
              <Link href={''} className={styles.services__link}>
                Брендинг
              </Link>
            </div>
            <div>
              <Link href={''} className={styles.services__link}>
                Инфографика
              </Link>
            </div>
          </Accordion>
          <Accordion title="Программирование">
            <div>
              <Link href={''} className={styles.services__link}>
                Веб дизайн
              </Link>
            </div>
            <div>
              <Link href={''} className={styles.services__link}>
                Продуктовый дизайн
              </Link>
            </div>
            <div>
              <Link href={''} className={styles.services__link}>
                Брендинг
              </Link>
            </div>
            <div>
              <Link href={''} className={styles.services__link}>
                Инфографика
              </Link>
            </div>
          </Accordion>
          <Accordion title="SEO">
            <div>
              <Link href={''} className={styles.services__link}>
                Веб дизайн
              </Link>
            </div>
            <div>
              <Link href={''} className={styles.services__link}>
                Продуктовый дизайн
              </Link>
            </div>
            <div>
              <Link href={''} className={styles.services__link}>
                Брендинг
              </Link>
            </div>
            <div>
              <Link href={''} className={styles.services__link}>
                Инфографика
              </Link>
            </div>
          </Accordion>
          <Accordion title="SMM">
            <div>
              <Link href={''} className={styles.services__link}>
                Веб дизайн
              </Link>
            </div>
            <div>
              <Link href={''} className={styles.services__link}>
                Продуктовый дизайн
              </Link>
            </div>
            <div>
              <Link href={''} className={styles.services__link}>
                Брендинг
              </Link>
            </div>
            <div>
              <Link href={''} className={styles.services__link}>
                Инфографика
              </Link>
            </div>
          </Accordion>
        </div>
      </section>
      <section className={styles.reviews}>
        <div className="wrapper">
          <h3 className={`title`}>Отзывы</h3>
          <div className={styles.reviews__wrapper}>
            <Slider slides={slides} />
          </div>
        </div>
      </section>{' '}
    </>
  )
}
