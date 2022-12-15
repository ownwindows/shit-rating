import styles from './alert.module.css';
import clsx from 'clsx';

// https://github.com/lukeed/clsx
export default function Alert({ children, type }) {
    return (
        <div
            className={cn({
                [styles.success]: type === 'success',
                [styles.error]: type === 'error',
            })}
        >
            {children}
        </div>
    );
}