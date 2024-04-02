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
      <section className={cl(styles.section, styles.sectionDifficultForms)}>
        <ArtTitle type="up" className={styles.artTitle}>Partners</ArtTitle>
        <Title size="X-Medium">Collaborations</Title>
        <LogoList />
      </section>
    </article>
  )
}
