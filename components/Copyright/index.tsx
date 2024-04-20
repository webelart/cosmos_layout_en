import cl from 'classnames';

import styles from './style.module.scss';

interface CopyrightProps {
    className?: string;
}

export const Copyright: React.FC<CopyrightProps> = ({
    className,
}) => (
    <p className={cl(styles.copyright, className)}>
        Copyright © {new Date().getFullYear()}. All rights reserved.
    </p>
);