import styles from './style.module.scss';

interface TextProps {
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  children
}) => (
	<div className={styles.text}>
		{children}
	</div>
);

