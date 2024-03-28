import Link from 'next/link';
import Image from 'next/image';
import cl from 'classnames';

import { ArtButton, TypeArtButton } from '../ArtButton';

import styles from './style.module.scss';

interface ArtMenuItemProps {
    id: number;
    href: string;
    title: string;
    image: string;
    isOpened: boolean;
    onClick: (event: React.MouseEvent) => void;
    onClickButton: () => void;
}

const getTypeById = (id: number): TypeArtButton => {
    if (id === 1) {
        return 'YellowPink';
    }

    if (id === 2) {
        return 'Blue';
    }

    if (id === 3) {
        return 'BluePurple';
    }

    return 'GreenYellow';
}

export const ArtMenuItem: React.FC<ArtMenuItemProps> = ({
    id,
    image,
    title,
    isOpened,
    onClick,
    onClickButton
}) => (
    <div
        onClick={onClick}
        className={cl(
            styles.artMenuItem,
            isOpened && styles.artMenuItemActive
        )}
    >
        <h3 className={styles.artMenuTitle}>{title}</h3>
        <div className={cl(
            styles.cardMore,
            styles.artMenuCard
        )}>
            <ArtButton
                type={getTypeById(id)}
                onClick={onClickButton}
                className={styles.cardMoreButton}
            >
                More
            </ArtButton>
            <Image
                src={image}
                alt={title}
                width="271"
                height="184"
                className={styles.cardMoreImage}
            />
        </div>
        <span className={styles.artMenuDecorator} />
    </div>
);