import styles from './LoadingSpinner.module.css';

export const LoadingSpinner = (props) => {
    return (
        <div className={styles.spinnerContainer}>
            <div className={styles.loadingSpinner}></div>
        </div>
    )
}