import cl from 'classnames';

import styles from './style.module.scss';

interface GlassCardProps {
    imageUrl: string;
    type: 'color' | 'dark';
}

export const GlassCard: React.FC<GlassCardProps> = ({
    imageUrl,
    type
}) => (
    <div className={cl(styles.classCard, styles[type])}>
        <img src={imageUrl} alt="Card" className={styles.classCardImage} />
    </div>
);