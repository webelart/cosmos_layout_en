import { ReactNode } from 'react';
import cl from 'classnames';

import styles from './style.module.scss';

const links = [
    {
        id: "01",
        title: "Genesis lands drop",
        text: "An original collection of 5,555 land plots will be made ready for the very first Dusktopian adventurers.",
        imageUrl: "./images/01.png",
    },
    {
        id: "02",
        title: "Staking goes live",
        text: "The EON Corporation Superbank begins rewarding Dusktopians staking their land plots with $DAWN.",
        imageUrl: "./images/01.png",
    },
    {
        id: "03",
        title: "New worlds emerge",
        text: "Claim a slice of our secret land collection with $DAWN. Outfit your existing land with new properties and accessories.",
        imageUrl: './images/01.png',
    },
    {
        id: "04",
        title: "Avatar collection drop",
        text: "Get the PFP avatars you will use for in-universe interaction, synergized with your asset holdings.",
        imageUrl: './images/01.png',

    },
    {
        id: "05",
        title: "Let's the game begin",
        imageUrl: './images/01.png',
    }
];

interface AnimatedMenuProps {
    className?: string;
}

export const AnimatedMenu: React.FC<AnimatedMenuProps> = ({
    className
}) => (
    <div>Animated Menu</div>
);