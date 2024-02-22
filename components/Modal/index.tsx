import { useEffect, ReactNode } from 'react';
import { ArtButton } from '../ArtButton';

import styles from './style.module.scss';

interface ModalProps {
  backgroundUrl:  string;
  onClickClose: () => void;
  onClickNext: () => void;
  children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  backgroundUrl,
  onClickClose,
  onClickNext,
  children,
}) => {
	useEffect(() => {
		document.body.classList.add('bodyOverflow');

		return () => {
			document.body.classList.remove('bodyOverflow');
		}
	}, []);

	console.log(backgroundUrl)

  	return (
		<div
			className={styles.modal}
			style={{
				backgroundImage:`url(${backgroundUrl})`,
			}}
		>
			<header className={styles.modalHeader}>
				<ArtButton onClick={onClickClose} type="Transparent">
					Close
				</ArtButton>
				<ArtButton onClick={onClickNext} type="White">
					Next
				</ArtButton>
			</header>
			{children}
		</div>
  	);
}