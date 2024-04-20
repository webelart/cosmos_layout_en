import styles from '../styles/home.module.scss';
import cl from 'classnames';

import { Logo } from '../components/Logo';
import { SocialNetworks } from '../components/SocialNetworks';
import { ArtButton } from '../components/ArtButton';
import { ArtMenu } from '../components/ArtMenu';
import { Navigation } from '../components/Navigation';
import { Title } from '../components/Title';
import { ArtTitle } from '../components/ArtTitle';
import { AnimatedMenu } from '../components/AnimatedMenu';
import { LogoList } from '../components/LogoList';
import { ArtObject } from '../components/ArtObject';
import { AlliesGallery } from '../components/AlliesGallery';
import { Copyright } from '../components/Copyright';

export default function Home() {
  return (
    <article>
      <section className={cl(styles.section, styles.sectionMain)}>
        <header className={styles.header}>
          <Logo />
          <SocialNetworks />
          <ArtButton
            onClick={() => {}}
          >
            Whitepaper
          </ArtButton>
        </header>
        <Navigation />
        <div>
          <Title>
            From dust to&nbsp;dawn
          </Title>
          <ul className={styles.buttonList}>
            <li>
              <ArtButton onClick={() => {}}>
                Mint
              </ArtButton>
            </li>
            <li>
              <ArtButton
                onClick={() => {}}
              >
                Connect Wallet
              </ArtButton>
            </li>
          </ul>
        </div>
      </section>
      <section className={cl(styles.section, styles.sectionEarth)}>
        <Title size="Large">
          Factions
        </Title>
        <ArtMenu />
      </section>
      <section className={cl(styles.section, styles.sectionAnimation)}>
        <ArtTitle type="down" className={styles.artTitle}>Our way</ArtTitle> 
        <Title size="Small" className={styles.smallTitle}>
          Road
          <svg width="39" height="39" viewBox="0 0 39 39" fill="none" style={{marginRight: '0.5rem',}}>
            <g clipPath="url(#clip0_0_729)">
              <path fillRule="evenodd" clipRule="evenodd" d="M19.3692 39L39 19.5L19.3692 -8.58091e-07L19.3692 19.24L1.43051e-06 -1.70474e-06L-2.74233e-07 39L19.3692 19.7599L19.3692 39Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_0_729">
                <rect width="39" height="39" fill="white" transform="translate(39) rotate(90)"/>
              </clipPath>
            </defs>
          </svg>
          Map
        </Title>
        <AnimatedMenu />
      </section>
      <section className={cl(styles.section, styles.sectionLogos)}>
        <ArtTitle type="up" className={styles.artTitle}>Partners</ArtTitle>
        <Title size="X-Medium" className={styles.subTitle}>Collaborations</Title>
        <LogoList className={styles.logoList} />
      </section>
      <section className={cl(styles.section, styles.sectionDifficultForms)}>
        <div className={styles.sectionContent}>
          <ArtTitle type="up" className={styles.artTitle}>FAQ</ArtTitle>
          <Title size="X-Medium" className={styles.subTitle}>
            Have
            <svg width="56" height="56" fill="none" className={styles.superStar}>
              <g clipPath="url(#a)"><path fill="#fff" fillRule="evenodd" d="M30 1.12A1.12 1.12 0 0 0 28.88 0h-1.76A1.12 1.12 0 0 0 26 1.12v10.829c0 1.231-1.697 1.56-2.158.42l-4.057-10.04a1.12 1.12 0 0 0-1.458-.62l-1.632.66a1.12 1.12 0 0 0-.619 1.458l4.325 10.704c.457 1.13-.968 2.074-1.83 1.211L10.407 7.58a1.12 1.12 0 0 0-1.584 0L7.58 8.823a1.12 1.12 0 0 0 0 1.584l7.33 7.33c.875.876-.106 2.315-1.24 1.82l-9.5-4.151a1.12 1.12 0 0 0-1.475.577l-.704 1.613a1.12 1.12 0 0 0 .578 1.475l10.947 4.783c1.111.486.765 2.146-.449 2.146H1.12A1.12 1.12 0 0 0 0 27.12v1.76C0 29.499.501 30 1.12 30h11.946c1.214 0 1.56 1.66.448 2.146L2.568 36.93a1.12 1.12 0 0 0-.578 1.475l.704 1.612a1.12 1.12 0 0 0 1.475.578l9.5-4.15c1.134-.496 2.115.943 1.24 1.818l-7.33 7.33a1.12 1.12 0 0 0 0 1.585l1.244 1.244a1.12 1.12 0 0 0 1.584 0l8.163-8.163c.863-.863 2.288.08 1.83 1.211l-4.324 10.704a1.12 1.12 0 0 0 .62 1.459l1.63.659a1.12 1.12 0 0 0 1.459-.62l4.057-10.04c.46-1.141 2.158-.81 2.158.42V54.88c0 .618.501 1.12 1.12 1.12h1.76A1.12 1.12 0 0 0 30 54.88V44.051c0-1.23 1.697-1.561 2.159-.42l4.056 10.04c.232.575.884.851 1.458.62l1.632-.66a1.12 1.12 0 0 0 .619-1.458L35.599 41.47c-.457-1.13.968-2.074 1.83-1.211l8.164 8.163a1.12 1.12 0 0 0 1.584 0l1.244-1.244a1.12 1.12 0 0 0 0-1.584l-7.33-7.33c-.875-.876.106-2.315 1.24-1.819l9.5 4.15a1.12 1.12 0 0 0 1.475-.578l.704-1.612a1.12 1.12 0 0 0-.578-1.475l-10.946-4.783C41.374 31.66 41.72 30 42.934 30H54.88A1.12 1.12 0 0 0 56 28.88v-1.76A1.12 1.12 0 0 0 54.88 26H42.934c-1.214 0-1.56-1.66-.448-2.146l10.946-4.783a1.12 1.12 0 0 0 .578-1.475l-.704-1.613a1.12 1.12 0 0 0-1.475-.578l-9.5 4.151c-1.134.496-2.115-.943-1.24-1.818l7.33-7.33a1.12 1.12 0 0 0 0-1.585L47.177 7.58a1.12 1.12 0 0 0-1.584 0l-8.163 8.163c-.863.863-2.288-.08-1.83-1.212l4.324-10.703a1.12 1.12 0 0 0-.619-1.458l-1.632-.66a1.12 1.12 0 0 0-1.458.62l-4.056 10.04c-.462 1.14-2.159.811-2.159-.42z" clipRule="evenodd"/></g>
              <defs><clipPath id="a"><path fill="#fff" d="M0 0h56v56H0z"/></clipPath></defs>
            </svg>
            any
            <br />
            questions?
          </Title>
          <ArtObject />
        </div>
      </section>
      <section className={cl(styles.section, styles.sectionAlliesGallery)}>
        <ArtTitle type="up" className={styles.artTitle}>Members</ArtTitle>
        <Title size="X-Medium" className={styles.subTitle}>
          Meet
          <br />
          our
          <svg width="72" height="44" fill="none" className={styles.superEye}>
            <path fill="#fff" d="M36.592.5C25.106.5 17.916 8.833 17.916 22.084s7.19 21.554 18.676 21.554c11.487 0 18.676-8.304 18.676-21.554C55.268 8.833 48.078.5 36.592.5m0 4.803c8.285 0 13.48 6.48 13.48 16.78 0 10.271-5.195 16.752-13.48 16.752s-13.48-6.48-13.48-16.751c0-10.3 5.195-16.781 13.48-16.781"/>
            <path fill="#fff" fillRule="evenodd" d="M7.04 19.947c2.734 2.995 6.866 7.178 11.637 10.86 5.928 4.575 12.39 8.017 18.161 8.017 5.712 0 11.53-3.387 16.794-7.928 4.29-3.7 7.902-7.887 10.494-10.946-2.844-2.831-6.843-6.185-11.285-8.99-5.396-3.407-11.097-5.784-16.003-5.784-4.954 0-11.305 2.413-17.366 5.847-4.97 2.816-9.45 6.148-12.432 8.924m9.88-13.428C23.21 2.956 30.52 0 36.838 0c6.368 0 13.08 2.992 18.767 6.583 5.744 3.628 10.796 8.093 13.917 11.516l1.54 1.689-1.485 1.737q-.45.527-.986 1.163c-2.6 3.077-6.676 7.9-11.578 12.128C51.498 39.574 44.47 44 36.838 44c-7.571 0-15.201-4.37-21.323-9.095C9.298 30.108 4.166 24.573 1.527 21.543L0 19.79l1.58-1.706c3.244-3.501 8.995-7.97 15.34-11.565" clipRule="evenodd"/>
          </svg>
          team
        </Title>
        <AlliesGallery />
      </section>
      <section className={cl(styles.section, styles.sectionFooter)}>
          <Logo />
          <SocialNetworks type="footer" />
          <Copyright className={styles.copyright} />
      </section>
    </article>
  )
}
