import { ReactNode } from 'react';
import cl from 'classnames';

import styles from './style.module.scss';

interface ArtTitleProps {
    type: 'up' | 'down';
    children: ReactNode;
    className?: string;
}

export const ArtTitle: React.FC<ArtTitleProps> = ({
    type,
    children,
    className
}) => (
    <h3 className={cl(styles.title, className)}>
        <span className={styles.titleText}>
            {children}
        </span>
        <br />
        {type === 'down' && (
            <svg width="160" height="12" viewBox="0 0 160 12" fill="none" className={styles.titleIcon}>
                <path d="M159.5 1L149.5 6.5H75.5L66.5 11H57L50 6.5H25M0 6.5H17" stroke="url(#paint0_linear_0_469)" strokeWidth="1.5"/>
                <defs>
                    <linearGradient id="paint0_linear_0_469" x1="159.5" y1="6" x2="0" y2="6" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFB800"/>
                        <stop offset="0.70625" stopColor="#FFBAC3"/>
                    </linearGradient>
                </defs>
            </svg>
        )}
    </h3>
);