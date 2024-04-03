import cl from 'classnames';

import styles from './style.module.scss';

interface LogoListProps {
    className?: string;
}

const logos = [
    { id: 1, title: 'Logo' },
    { id: 2, title: 'Logo' },
    { id: 3, title: 'Logo' },
    { id: 4, title: 'Logo' },
];

export const LogoList: React.FC<LogoListProps> = ({
    className,
}) => {
    return (
        <ul className={cl(className, styles.logoList)}>
            {logos.map(({ id, title }) => (
                <li key={id} className={styles.logoItem}>
                    <span className={styles.logoItemText}>{title}</span>
                    <span className={styles.logoItemAngleLeft} />
                    <span className={styles.logoItemAngleRight} />
                </li>
            ))}
        </ul>
    );
};