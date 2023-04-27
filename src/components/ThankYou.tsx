import styles from './ThankYou.module.css';

export default function ThankYou({
    rating
}: { rating: number; }) {
    return (
        <div className={styles["thank-you"]}>
            <img src="/illustration-thank-you.svg" alt="illustration" />

            <p className={styles["rating-paragraph"]}>You selected {rating} out of 5</p>

            <h2>Thank you!</h2>

            <p>
                We appreciate you taking the time to give a rating.
                If you ever need more support, don't hesitate to get in touch!
            </p>
        </div>
    );
}