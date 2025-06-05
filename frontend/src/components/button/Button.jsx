import styles from './Button.module.scss';

function Button({
    children,
    onClick,
    variant = 'primary',
    className,
    disabled,
    type = 'button',
    ...props
}) {
    const buttonClass = `${styles.button} ${styles[`button--${variant}`]} ${className || ''}`;

    return (
        <button
            type={type}
            className={buttonClass}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
