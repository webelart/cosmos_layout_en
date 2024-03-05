import styles from './style.module.scss';

interface ArtTitleProps {
  children: React.ReactNode;
  type?: 'sliced';
}

export const ArtTitle: React.FC<ArtTitleProps> = ({
  	children,
	type,
}) => {
	if (type === 'sliced') {
		return (
			<h2 className={styles.slicedTitle}>
				<span className={styles.slicedTitleTop}>{children}</span>
				<span className={styles.slicedTitleBottom} aria-hidden="true">{children}</span>
			</h2>
		);
	}

	return (
		<h2 className={styles.title}>
			{children}
		</h2>
	);
};

