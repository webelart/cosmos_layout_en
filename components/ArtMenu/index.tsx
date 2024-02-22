import { useState, ReactNode } from 'react';

import { ArtMenuItem } from './ArtMenuItem';
import { ArtTitle } from '../ArtTitle';
import { Modal } from '../Modal';
import { Text } from '../Text';
import { GlassCard } from '../GlassCard';
import styles from './style.module.scss';

interface ArtMenuLinks {
    id: number;
    href: string;
    title: string;
    image: string;
    active: boolean;
    modalInfo: {
        title: string;
        content: ReactNode;
        coverImage: string;
        listImages: {
            src: string;
            type: 'color' | 'dark';
        }[]
    }
}

const links: ArtMenuLinks[] = [
    {
        id: 1,
        href: '/',
        title: 'Blighted Badlands',
        image: '/images/badlands/preview.jpg',
        active: false,
        modalInfo: {
            title: 'Badlands',
            content: (
                <>
                    <p>Modern-day Dusktopia begins here</p>
                    <p>The first thing that counts here is survival Only then can you think of profit; then finally domination</p>
                    <p>Forge your alliances with the EON Corporation, the rival mafia gangs, or even an utterly corrupt police force - and crush all standing in your way</p>
                </>
            ),
            coverImage: '/images/badlands/modal_cover.jpg',
            listImages: [
                {
                    src: '/images/badlands/list/badlands_01.png',
                    type: 'color',
                },
                {
                    src: '/images/badlands/list/badlands_02.png',
                    type: 'color',
                },{
                    src: '/images/badlands/list/badlands_03.png',
                    type: 'color',
                }, {
                    src: '/images/badlands/list/badlands_04.png',
                    type: 'color',
                },
                {
                    src: '/images/badlands/list/badlands_01.png',
                    type: 'dark',
                },
                {
                    src: '/images/badlands/list/badlands_02.png',
                    type: 'dark',
                },{
                    src: '/images/badlands/list/badlands_03.png',
                    type: 'dark',
                }, {
                    src: '/images/badlands/list/badlands_04.png',
                    type: 'dark',
                }
            ]
        }
    },
    {
        id: 2,
        href: '/',
        title: 'Glacial Frontier',
        image: '/images/glacial_frontier/preview.jpg',

        active: false,
        modalInfo: {
            title: 'Glacial Frontier',
            content: (
                <>
                    <p>The home of everything warfare in Dusktopia</p>
                    <p>Mercenaries and soldiers take payouts from the Cabal to do its bidding - but some want more for themselves, and are willing to go against power itself to get it</p>
                    <p>Which side are you joining?</p>
                </>
            ),
            coverImage: '/images/glacial_frontier/modal_cover.jpg',
            listImages: [
                {
                    src: '/images/glacial_frontier/list/glacial_frontier_01.png',
                    type: 'color',
                },
                {
                    src: '/images/glacial_frontier/list/glacial_frontier_02.png',
                    type: 'color',
                },
                {
                    src: '/images/glacial_frontier/list/glacial_frontier_03.png',
                    type: 'color',
                },
                {
                    src: '/images/glacial_frontier/list/glacial_frontier_04.png',
                    type: 'color',
                },
                {
                    src: '/images/glacial_frontier/list/glacial_frontier_01.png',
                    type: 'dark',
                },
                {
                    src: '/images/glacial_frontier/list/glacial_frontier_02.png',
                    type: 'dark',
                },
                {
                    src: '/images/glacial_frontier/list/glacial_frontier_03.png',
                    type: 'dark',
                },
                {
                    src: '/images/glacial_frontier/list/glacial_frontier_04.png',
                    type: 'dark',
                },
            ]
        }
    },
    {
        id: 3,
        href: '/',
        title: 'Sundered Grove',
        image: '/images/sundered_grove/preview.jpg',
        active: false,
        modalInfo: {
            title: 'Glacial Frontier',
            content: (
                <>
                    <p>Dusktopia’s last remaining sanctuary of peace</p>
                    <p>Researchers and scientists congregate here to live in religious pacifism, spending their time developing a renewable energy source for the world</p>
                    <p>A small faction wants more - selling Aurium on the black market for their own personal gain</p>
                    <p>Will you root out the traitors or join them?</p>
                </>
            ),
            coverImage: '/images/sundered_grove/modal_cover.jpg',
            listImages: [
                {
                    src: '/images/sundered_grove/list/sundered_grove_01.png',
                    type: 'color',
                },
                {
                    src: '/images/sundered_grove/list/sundered_grove_02.png',
                    type: 'color',
                },
                {
                    src: '/images/sundered_grove/list/sundered_grove_01.png',
                    type: 'color',
                },
                {
                    src: '/images/sundered_grove/list/sundered_grove_02.png',
                    type: 'color',
                },
                {
                    src: '/images/sundered_grove/list/sundered_grove_01.png',
                    type: 'dark',
                },
                {
                    src: '/images/sundered_grove/list/sundered_grove_02.png',
                    type: 'dark',
                },
                {
                    src: '/images/sundered_grove/list/sundered_grove_01.png',
                    type: 'dark',
                },
                {
                    src: '/images/sundered_grove/list/sundered_grove_02.png',
                    type: 'dark',
                },
            ]
        }
    },
    {
        id: 4,
        href: '/',
        title: 'Sky Citadel',
        image: '/images/sky_citadel/preview.jpg',
        active: false,
        modalInfo: {
            title: 'Sky Citadel',
            content: (
                <>
                    <p>These are where the apex predators in Dusktopia reside</p>
                    <p>The political and economic masters of all society: living high above the suffering of ordinary denizens, and calmly plot elevated pursuits like space colonization in absolute peace</p>
                    <p>If you’re lucky enough to be part of it, hold on tight - everybody wants what you have</p>
                </>
            ),
            coverImage: '/images/sky_citadel/modal_cover.jpg',
            listImages: [
                {
                    src: '/images/sky_citadel/list/sky_citadel.png',
                    type: 'color',
                },
                {
                    src: '/images/sky_citadel/list/sky_citadel.png',
                    type: 'color',
                },
                {
                    src: '/images/sky_citadel/list/sky_citadel.png',
                    type: 'color',
                },
                {
                    src: '/images/sky_citadel/list/sky_citadel.png',
                    type: 'color',
                },
                {
                    src: '/images/sky_citadel/list/sky_citadel.png',
                    type: 'dark',
                },
                {
                    src: '/images/sky_citadel/list/sky_citadel.png',
                    type: 'dark',
                },
                {
                    src: '/images/sky_citadel/list/sky_citadel.png',
                    type: 'dark',
                },
                {
                    src: '/images/sky_citadel/list/sky_citadel.png',
                    type: 'dark',
                },
            ]
        }
    }
];

export const ArtMenu: React.FC = () => {
    const [ openedId, setOpenedId ] = useState(0);
    const modalInfo = links[0].modalInfo;

    return (
        <>
            <div className={styles.artMenu}>
                {links.map((link) => (
                    <ArtMenuItem
                        key={link.id}
                        onClick={(event) => {
                            event.preventDefault();
                            setOpenedId(link.id !== openedId ? link.id : 0);
                        }}
                        isOpened={link.id === openedId}
                        {...link}
                    />
                ))}
            </div>
            <Modal
                backgroundUrl={modalInfo.coverImage}
                onClickClose={() => {}}
                onClickNext={() => {}}
            >
                <ArtTitle>BadLands</ArtTitle>
                <Text className={styles.modalText}>{modalInfo.content}</Text>
                <div className={styles.cardList}>
                    {modalInfo.listImages.map((item, id) => (
                        <GlassCard
                            key={id}
                            type={item.type}
                            imageUrl={item.src}
                        />
                    ))}
                </div>
            </Modal>
        </>
    )
}

