import styles from './style.module.scss';

interface ArtTitleProps {
  children: React.ReactNode;
}

export const ArtTitle: React.FC<ArtTitleProps> = ({
  children
}) => (
	<h2 className={styles.title}>
		{children}
	</h2>
);

