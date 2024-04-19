import { useRef, useState, useEffect } from 'react';
import cl from 'classnames';

import { useUpdateActiveIndex } from './hooks/useUpdateActiveIndex';

import styles from './style.module.scss';

interface AlliesGalleryProps {
    className?: string;
}

interface Item {
    id: number;
    position: string;
    title: string;
    description: string;
    imageUrl: string;
}

const items: Item[] = [
    {
        id: 1,
        position: 'Co-founder / Ecosystem Chief',
        title: '@jaypegsonly',
        description: '<strong>@jaypegsonly</strong> was a corporate finance lawyer at a top global firm who has advised institutional clients, MNCs and VCs. He has worked on deals well over US$1B. Having delved into NFTs since July 2021, he brings his expertise and connections from Web2 into the Web3 world. With all these resources and experience, he aims to build a sustainable, scaleable ecosystem with Dusktopia.',
        imageUrl: "/alliesGallery/jaypegsonly.jpg",
    },
    {
        id: 2,
        position: 'Co-founder / Operations Chief',
        title: '@oxsuperpotato',
        description: 'Before crypto, <strong>@0xSuperPotato</strong> was a commercial lawyer at a top disputes firm. He routinely worked on bet-the-company litigation against governments, mega funds, and multinationals — picking up blue chip experience with complex operational management and problem solving capabilities along the way. Now, he brings that to the Web3 space with Dusktopia.',
        imageUrl: "/alliesGallery/oxsuperpotato.jpg",
    },
    {
        id: 3,
        position: 'Co-founder / Software Chief',
        title: '@webelart',
        description: '<strong>@webelart</strong> is a corporate which helps different people from beginning to professional became better in software engineering. To be light and love of this world, to be a loved by the universe.',
        imageUrl: "/alliesGallery/webelart.jpg",
    },
    {
        id: 4,
        position: 'Co-founder / Design Chief',
        title: '@madking3126',
        description: '<strong>@MadKing3126</strong> has spent a huge portion of his life around games. He\'s experienced the full force of innovation within the Silicon Valley ecosystem, having spent the majority of his time in college in and around the Bay Area — and was pursuing a career in UI/UX design for startups before crypto and Web3 took over his life. His mission is now singular: to bring the best aesthetic and design aspects of the Web2 world to Dusktopia.',
        imageUrl: "/alliesGallery/madking3126.jpg",
    },
    {
        id: 5,
        position: 'Co-founder / Blockchain Chief',
        title: '@itscuzzo',
        description: '<strong>@ItsCuzzo</strong> is the set of brains behind Dusktopia\'s smart contracts. He’s interested in all things Web3 and has worked with other major NFT projects in development, advisory and contract audit roles. Cuzzo’s considerable expertise will ensure that our technical back-end is top notch.',
        imageUrl: "/alliesGallery/itscuzzo.jpg",
    },
    {
        id: 6,
        position: 'Co-founder / Ecosystem Chief',
        title: '@jaypegsonly',
        description: '<strong>@jaypegsonly</strong> was a corporate finance lawyer at a top global firm who has advised institutional clients, MNCs and VCs. He has worked on deals well over US$1B. Having delved into NFTs since July 2021, he brings his expertise and connections from Web2 into the Web3 world. With all these resources and experience, he aims to build a sustainable, scaleable ecosystem with Dusktopia.',
        imageUrl: "/alliesGallery/jaypegsonly.jpg",
    },
    {
        id: 7,
        position: 'Co-founder / Operations Chief',
        title: 'oxsuperpotato',
        description: 'Before crypto, <strong>@0xSuperPotato</strong> was a commercial lawyer at a top disputes firm. He routinely worked on bet-the-company litigation against governments, mega funds, and multinationals — picking up blue chip experience with complex operational management and problem solving capabilities along the way. Now, he brings that to the Web3 space with Dusktopia.',
        imageUrl: "/alliesGallery/oxsuperpotato.jpg",
    },
    {
        id: 8,
        position: 'Co-founder / Software Chief',
        title: '@webelart',
        description: '<strong>@webelart</strong> is a corporate which helps different people from beginning to professional became better in software engineering. To be light and love of this world, to be a loved by the universe.',
        imageUrl: "/alliesGallery/webelart.jpg",
    },
    {
        id: 9,
        position: 'Co-founder / Design Chief',
        title: '@madking3126',
        description: '<strong>@MadKing3126</strong> has spent a huge portion of his life around games. He\'s experienced the full force of innovation within the Silicon Valley ecosystem, having spent the majority of his time in college in and around the Bay Area — and was pursuing a career in UI/UX design for startups before crypto and Web3 took over his life. His mission is now singular: to bring the best aesthetic and design aspects of the Web2 world to Dusktopia.',
        imageUrl: "/alliesGallery/madking3126.jpg",
    },
    {
        id: 10,
        position: 'Co-founder / Blockchain Chief',
        title: '@itscuzzo',
        description: '<strong>@ItsCuzzo</strong> is the set of brains behind Dusktopia\'s smart contracts. He’s interested in all things Web3 and has worked with other major NFT projects in development, advisory and contract audit roles. Cuzzo’s considerable expertise will ensure that our technical back-end is top notch.',
        imageUrl: "/alliesGallery/itscuzzo.jpg",
    },
];

export const AlliesGallery: React.FC<AlliesGalleryProps> = ({
    className
}) => {
    const [ activeIndex, setActiveIndex ] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollActiveIndex = useUpdateActiveIndex(containerRef);

    useEffect(() => {
        setActiveIndex(scrollActiveIndex)
    }, [ scrollActiveIndex ]);

    const move = (newActiveElement: number) => {
        const currentNode = containerRef?.current;
        const firstElementData = currentNode?.firstElementChild?.getBoundingClientRect();
    
        if (!currentNode || !firstElementData) {
          return;
        }

        setActiveIndex(newActiveElement);
    
        currentNode.scrollTo({
          left: newActiveElement * firstElementData?.width,
          behavior: 'smooth',
        });
    }

    return (
        <div className={cl(className, styles.alliesGallery)}>
            <div className={styles.alliesContainer} ref={containerRef}>
                {items.map((item, index) => (
                    <div
                        className={cl(styles.alliesItem, activeIndex === index && styles.alliesItemActive)}
                        key={item.id}
                        onClick={() => move(index)}
                    >
                        <div className={styles.alliesItemContainer}>
                            <div className={styles.alliesImageContainer}>
                                <img
                                    className={styles.alliesImage}
                                    src={item.imageUrl}
                                />
                            </div>
                            <div className={styles.alliesPosition}>{item.position}</div>
                            <h4 className={styles.alliesTitle}>{item.title}</h4>
                            <p
                                className={styles.alliesDescription}
                                dangerouslySetInnerHTML={{__html: item.description}}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <img
                src="/alliesGallery/drag_drag_drag.png"
                alt="Drag Drag Drag"
                className={styles.dragDragDrag}
            />
        </div>
    );
};