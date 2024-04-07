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
    </article>
  )
}
