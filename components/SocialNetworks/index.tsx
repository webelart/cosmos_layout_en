import cl from 'classnames';

import styles from './style.module.scss';

interface SocialNetworksProps {
    type?: 'header' | 'footer';
    className?: string;
}

const socialNetworks = [
    {
        id: 1,
        title: 'DisCord',
        className: 'DisCord',
        link: 'https://facebook.com',
    },
    {
        id: 2,
        title: 'Twitter',
        className: 'Twitter',
        link: 'https://twitter.com',
    },
    {
        id: 3,
        title: 'AntDesign',
        className: 'AntDesign',
        link: 'https://ant.design',
    }
];

export const SocialNetworks: React.FC<SocialNetworksProps> = ({
    type = 'header',
    className,
}) => (
    <ul className={cl(styles.socialNetworks, className, styles[type])}>
        {socialNetworks.map((socialNetwork) => (
            <li key={socialNetwork.id}>
                <a
                    href={socialNetwork.link}
                    target="_blank"
                    rel="noreferrer"
                    className={cl(styles.socialNetworksLink, styles[`socialNetworks${socialNetwork.className}`])}
                >
                    {socialNetwork.title}  
                </a>
            </li>
        ))}
    </ul>
);