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
    <h3 className={cl(styles.title, className, type === 'up' && styles.titleCenter)}>
        <span className={styles.titleText}>
            {children}
        </span>
        {type === 'down' && (
            <svg width="160" height="12" fill="none" className={styles.titleBorder}>
                <path stroke="url(#a)" strokeWidth="1.5" d="m159.5 1-10 5.5h-74l-9 4.5H57l-7-4.5H25m-25 0h17"/>
                <defs>
                    <linearGradient id="a" x1="159.5" x2="0" y1="6" y2="6" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFB800"/>
                        <stop offset=".706" stopColor="#FFBAC3"/>
                    </linearGradient>
                </defs>
            </svg>
        )}
        {type === 'up' && (
            <svg width="123" height="12" fill="none" className={styles.titleBorder}>
                <path stroke="url(#a)" strokeWidth="1.5" d="m122.5 11-10-5.5h-37l-9-4.5H57l-7 4.5H25m-25 0h17"/>
                <defs>
                    <linearGradient id="a" x1="122.5" x2="0" y1="6" y2="6" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFB800"/>
                        <stop offset=".706" stopColor="#FFBAC3"/>
                    </linearGradient>
                </defs>
            </svg>
        )}
    </h3>
);