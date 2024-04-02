import React, { ReactNode } from 'react';
import cl from 'classnames';

import styles from './style.module.scss';

interface TitleProps {
    size?: 'Small' | 'X-Medium' | 'Medium' | 'Large',
    children: ReactNode,
    className?: string;
}

export const Title: React.FC<TitleProps> = ({
    size = 'Medium',
    children,
    className,
}) => (
    <h2 className={cl(styles.title, styles[`title${size}`], className)}>
        {children}
    </h2>
);