
import cl from 'classnames';
import Link from 'next/link';

import styles from './style.module.scss';

interface ArtObjectProps {
    className?: string;
}

export const ArtObject: React.FC<ArtObjectProps> = ({
    className,
}) => (
    <div className={cl(styles.artObject, className)}>
        <div className={styles.artObjectContainer}>
            <div className={styles.artObjectColumn}>
                <div className={cl(styles.artObjectRow, styles.artObjectTextSpace)}>
                    <h3>How many?</h3>
                    <p>Our genesis land NFT collection will comprise <br /><strong className={styles.artObjectLarge}>5555 NFTs</strong>.</p>
                </div>
                <div className={cl(styles.artObjectRow, styles.artObjectTrio)}>
                    <div>
                        <svg width="56" height="25" fill="none">
                            <path stroke="#fff" strokeWidth="2.285" d="M1.334 21.379 19.156 3.555v17.822L36.98 3.557v17.822L54.802 3.557v17.822"/>
                        </svg>
                    </div>
                    <div>
                        <svg width="93" height="28" fill="none"><g clipPath="url(#a)">
                            <path fill="#fff" d="M13.69 3.035c0-7.161 4.474 2.99 2.687 6.09 1.79-3.1 12.82-4.3 6.617-.72 6.203-3.58-.35 5.377-3.93 5.377 3.58 0 10.133 8.952 3.93 5.376 6.203 3.581-4.827 2.38-6.617-.72 1.79 3.1-2.688 13.252-2.688 6.09 0 7.162-4.476-2.99-2.688-6.09-1.79 3.1-12.82 4.301-6.617.72-6.203 3.581.351-5.376 3.932-5.376-3.58 0-10.135-8.953-3.932-5.376-6.203-3.581 4.827-2.381 6.617.72C9.213 6.02 13.69-4.127 13.69 3.034"/></g><g clipPath="url(#b)">
                            <path fill="#fff" d="M46.593 3.035c0-7.161 4.474 2.99 2.688 6.09 1.79-3.1 12.82-4.3 6.617-.72 6.203-3.58-.351 5.377-3.931 5.377 3.58 0 10.134 8.952 3.93 5.376 6.204 3.581-4.826 2.38-6.616-.72 1.79 3.1-2.688 13.252-2.688 6.09 0 7.162-4.477-2.99-2.688-6.09-1.79 3.1-12.82 4.301-6.617.72-6.203 3.581.35-5.376 3.932-5.376-3.581 0-10.135-8.953-3.932-5.376-6.203-3.581 4.827-2.381 6.617.72-1.788-3.105 2.688-13.252 2.688-6.091"/></g><g clipPath="url(#c)">
                            <path fill="#fff" d="M79.496 3.035c0-7.161 4.475 2.99 2.688 6.09 1.79-3.1 12.82-4.3 6.617-.72 6.203-3.58-.35 5.377-3.93 5.377 3.58 0 10.133 8.952 3.93 5.376 6.203 3.581-4.827 2.38-6.617-.72 1.79 3.1-2.688 13.252-2.688 6.09 0 7.162-4.476-2.99-2.688-6.09-1.79 3.1-12.82 4.301-6.617.72-6.203 3.581.351-5.376 3.933-5.376-3.582 0-10.136-8.953-3.933-5.376-6.203-3.581 4.828-2.381 6.617.72-1.788-3.105 2.688-13.252 2.688-6.091"/></g>
                            <defs>
                                <clipPath id="a"><path fill="#fff" d="M.496.529h26.506v26.506H.496z"/></clipPath>
                                <clipPath id="b"><path fill="#fff" d="M33.4.529h26.505v26.506H33.4z"/></clipPath>
                                <clipPath id="c"><path fill="#fff" d="M66.303.529h26.506v26.506H66.303z"/></clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div>
                        <svg width="84" height="20" fill="none">
                            <path fill="#fff" d="M15.943.316c-4.99 0-8.114 3.62-8.114 9.376 0 5.757 3.124 9.364 8.114 9.364s8.113-3.607 8.113-9.364c0-5.756-3.123-9.376-8.113-9.376m0 2.086c3.599 0 5.856 2.816 5.856 7.29 0 4.462-2.257 7.278-5.856 7.278-3.6 0-5.857-2.816-5.857-7.278 0-4.474 2.257-7.29 5.857-7.29"/>
                            <path fill="#fff" fillRule="evenodd" d="M3.104 8.764c1.188 1.302 2.983 3.119 5.056 4.719 2.575 1.987 5.382 3.482 7.89 3.482 2.481 0 5.009-1.471 7.296-3.444 1.863-1.607 3.433-3.426 4.558-4.755a29.6 29.6 0 0 0-4.902-3.906c-2.344-1.48-4.821-2.512-6.952-2.512-2.153 0-4.912 1.048-7.545 2.54-2.16 1.223-4.106 2.67-5.401 3.876m4.292-5.833C10.13 1.383 13.305.099 16.05.099c2.766 0 5.682 1.3 8.153 2.86 2.495 1.576 4.69 3.515 6.046 5.003l.669.733-.645.755-.429.505c-1.13 1.337-2.9 3.432-5.03 5.27-2.396 2.066-5.449 3.989-8.764 3.989-3.29 0-6.605-1.899-9.264-3.951-2.701-2.084-4.93-4.489-6.077-5.805l-.663-.762.686-.74C2.142 6.433 4.64 4.492 7.396 2.93" clipRule="evenodd"/>
                            <path fill="#fff" d="M68.262.316c-4.99 0-8.114 3.62-8.114 9.376 0 5.757 3.124 9.364 8.114 9.364s8.114-3.607 8.114-9.364c0-5.756-3.124-9.376-8.114-9.376m0 2.086c3.6 0 5.856 2.816 5.856 7.29 0 4.462-2.257 7.278-5.856 7.278-3.6 0-5.856-2.816-5.856-7.278 0-4.474 2.257-7.29 5.856-7.29"/>
                            <path fill="#fff" fillRule="evenodd" d="M55.423 8.764c1.188 1.302 2.983 3.119 5.056 4.719 2.575 1.987 5.382 3.482 7.89 3.482 2.481 0 5.009-1.471 7.296-3.444 1.863-1.607 3.433-3.426 4.559-4.755A29.6 29.6 0 0 0 75.32 4.86c-2.344-1.48-4.82-2.512-6.952-2.512-2.152 0-4.911 1.048-7.545 2.54-2.159 1.223-4.105 2.67-5.4 3.876m4.293-5.833C62.448 1.383 65.624.099 68.369.099c2.766 0 5.683 1.3 8.153 2.86 2.495 1.576 4.69 3.515 6.046 5.003l.669.733-.645.755-.428.505c-1.13 1.337-2.9 3.432-5.03 5.27-2.396 2.066-5.45 3.989-8.765 3.989-3.29 0-6.604-1.899-9.264-3.951-2.7-2.084-4.93-4.489-6.077-5.805l-.663-.762.686-.74c1.41-1.522 3.908-3.463 6.665-5.025" clipRule="evenodd"/>
                            <path fill="#fff" d="m39.97 15.857 1.285-1.253L36.4 9.888h13.914V8.117H36.4L41.255 3.4 39.97 2.148l-7.022 6.854z"/>
                        </svg>
                    </div>
                </div>
                <div className={cl(styles.artObjectRow, styles.artObjectTextSpace)}>
                    <h3>How DO I Get Dusklist?</h3>
                    <p>Get engaged and active with the community. The earlier you are and more sGet engaged and active with the community. The earlier you are and more support you bring, the higher your chances.upport you bring, the higher your chances.</p>
                </div>
                <div className={cl(styles.artObjectRow, styles.artObjectTextSpace)}>
                    <h3>How much?</h3>
                    <p>Each genesis land NFT will be priced at <br /><strong>0.12eth + gas fees</strong>.</p>
                </div>
            </div>
            <div className={styles.artObjectColumn}>
                <div className={cl(styles.artObjectRow, styles.artObjectTextSpace)}>
                    <h3>WHEN mint?</h3>
                    <p>We are targeting a release <strong>in mid May</strong>.</p>
                </div>
                <div className={cl(styles.artObjectRow, styles.artObjectTextSpace)}>
                    <h3>Maximum mintable?</h3>
                    <p>For Dusklist: <strong>1 per wallet.</strong></p>
                    <p>For public sale: <strong>2 per transaction.</strong></p>
                </div>
                <div className={cl(styles.artObjectRow, styles.artObjectTextSpace)}>
                    <h3>When is staking?</h3>
                    <p>Staking with the EON Corporation will go live in the month after mint.</p>
                </div>
                <div className={cl(styles.artObjectRow, styles.artObjectTwo)}>
                    <div>
                        <svg width="61" height="60" fill="none">
                            <g clipPath="url(#a)">
                                <path fill="#fff" fillRule="evenodd" d="M31.578 0c.656 0 1.188.532 1.188 1.188v11.488c0 1.306 1.8 1.656 2.29.445L39.359 2.47a1.19 1.19 0 0 1 1.547-.657l1.731.7c.609.246.903.938.657 1.546l-4.588 11.356c-.485 1.2 1.026 2.2 1.942 1.285l8.66-8.66a1.19 1.19 0 0 1 1.68 0l1.32 1.32a1.19 1.19 0 0 1 0 1.68l-7.776 7.778c-.929.928.112 2.454 1.315 1.929l10.079-4.404a1.19 1.19 0 0 1 1.564.613l.748 1.711a1.19 1.19 0 0 1-.613 1.565L46.01 25.306c-1.18.515-.811 2.277.476 2.277H59.16c.657 0 1.189.532 1.189 1.188v1.867c0 .656-.532 1.188-1.189 1.188H46.487c-1.288 0-1.655 1.762-.476 2.277l11.614 5.074c.6.263.875.963.613 1.565l-.748 1.71a1.19 1.19 0 0 1-1.564.614l-10.079-4.403c-1.203-.526-2.244 1-1.315 1.929l7.776 7.776a1.19 1.19 0 0 1 0 1.68l-1.32 1.321a1.19 1.19 0 0 1-1.68 0l-8.66-8.66c-.916-.916-2.427.085-1.942 1.285l4.588 11.356c.246.608-.048 1.3-.657 1.546l-1.731.7a1.19 1.19 0 0 1-1.547-.657l-4.303-10.651c-.49-1.211-2.29-.861-2.29.445V58.22c0 .656-.532 1.188-1.188 1.188H29.71a1.19 1.19 0 0 1-1.188-1.188V46.733c0-1.306-1.8-1.656-2.29-.445L21.93 56.939a1.19 1.19 0 0 1-1.547.657l-1.731-.7a1.19 1.19 0 0 1-.657-1.546l4.588-11.356c.485-1.2-1.026-2.2-1.942-1.285l-8.66 8.66a1.19 1.19 0 0 1-1.68 0l-1.32-1.32a1.19 1.19 0 0 1 0-1.68l7.776-7.778c.929-.928-.112-2.454-1.315-1.928L5.362 43.066a1.19 1.19 0 0 1-1.564-.613l-.748-1.711a1.19 1.19 0 0 1 .613-1.565l11.614-5.074c1.18-.515.811-2.277-.476-2.277H2.128a1.19 1.19 0 0 1-1.189-1.188v-1.867c0-.656.532-1.188 1.189-1.188H14.8c1.287 0 1.655-1.762.476-2.277L3.663 20.232a1.19 1.19 0 0 1-.613-1.565l.748-1.71a1.19 1.19 0 0 1 1.564-.614l10.079 4.404c1.203.525 2.244-1.001 1.315-1.93L8.98 11.042a1.19 1.19 0 0 1 0-1.68l1.32-1.32a1.19 1.19 0 0 1 1.68 0l8.66 8.66c.916.915 2.427-.086 1.942-1.286L17.994 4.06c-.245-.608.049-1.3.657-1.546l1.731-.7c.608-.246 1.301.048 1.547.657l4.303 10.651c.49 1.211 2.29.861 2.29-.445V1.188C28.522.532 29.054 0 29.71 0zm-.934 42.435c7.03 0 12.73-5.7 12.73-12.73s-5.7-12.731-12.73-12.731-12.73 5.7-12.73 12.73 5.7 12.731 12.73 12.731" clipRule="evenodd"/></g>
                                <defs><clipPath id="a"><path fill="#fff" d="M.94 0h59.408v59.409H.94z"/></clipPath></defs>
                        </svg>
                    </div>
                    <div>
                        <svg width="182" height="37" viewBox="0 0 182 37" fill="none">
                            <g clipPath="url(#clip0_3523_2389)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.435092 18.585L18.2578 36.5273L36.0806 18.585L18.4954 18.585L36.0806 0.881868L0.435094 0.881865L18.0203 18.585L0.435092 18.585Z" fill="white"/>
                            </g>
                            <g clipPath="url(#clip1_3523_2389)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M115.481 36.5274L132.963 19.1616L115.481 1.7959L115.481 18.9301L98.2316 1.7959L98.2316 36.5274L115.481 19.3931L115.481 36.5274Z" fill="white"/>
                            </g>
                            <g clipPath="url(#clip2_3523_2389)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M181.405 19.2782L164.039 1.7959L146.673 19.2782L163.807 19.2782L146.673 36.5274L181.405 36.5274L164.27 19.2782L181.405 19.2782Z" fill="white"/>
                            </g>
                            <g clipPath="url(#clip3_3523_2389)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M70.2638 0.881836H63.1347V10.099L56.6171 3.58148L51.5761 8.6225L58.0936 15.14H48.8765V22.2691H58.0936L51.5761 28.7865L56.6171 33.8277L63.1347 27.3101V36.5273H70.2638V27.3101L76.7813 33.8277L81.8223 28.7867L75.3047 22.2691H84.5219V15.14H75.3047L81.8223 8.6225L76.7813 3.58146L70.2638 10.099V0.881836Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_3523_2389">
                                    <rect width="35.6455" height="35.6455" fill="white" transform="translate(36.0806 36.5273) rotate(-180)"/>
                                </clipPath>
                                <clipPath id="clip1_3523_2389">
                                    <rect width="34.7315" height="34.7315" fill="white" transform="translate(132.963 1.7959) rotate(90)"/>
                                </clipPath>
                                <clipPath id="clip2_3523_2389">
                                    <rect width="34.7315" height="34.7315" fill="white" transform="translate(146.673 1.7959)"/>
                                </clipPath>
                                <clipPath id="clip3_3523_2389">
                                    <rect width="35.6455" height="35.6455" fill="white" transform="translate(48.8765 0.881836)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
            <div className={styles.artObjectColumn}>
                <div className={cl(styles.artObjectRow, styles.artObjectTextSpace)}>
                    <h3>Which blockchain?</h3>
                    <p>Dusktopia will be built on the <strong>Ethereum blockchain</strong>.</p>
                </div>
                <div className={cl(styles.artObjectRow, styles.artObjectTextSpace)}>
                    <h3>What is the utility?</h3>
                    <p>Owning a genesis land NFT sets you up for the rest of our ecosystem. The land collection is the foundation of Dusktopia - holders will be rewarded in the short term through the staking mechanism. In the long term, they will be able to build on that genesis land with various properties and avatars we will be releasing.</p>
                </div>
                <div className={cl(styles.artObjectRow, styles.artObjectTextSpace)}>
                    <h3>Future mints?</h3>
                    <p>Immediately after mint, we are planning for a limited secondary land release for holders, claimable with $DAWN. Subsequently, we will release a Properties collection, as well as PFP avatars which will serve as your in-game role.</p>
                </div>
            </div>
        </div>
        <div className={styles.borders}>
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
        </div>
        
    </div>
);